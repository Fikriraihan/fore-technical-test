/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabaseClient } from "@/utils/supabase";
import { HttpMethod, QueryParams, UrlParams } from "@/utils/types";
// import { HttpMethod, QueryParams, UrlParams } from "@/utils/types";
import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
  AxiosHeaders,
  AxiosProgressEvent,
  ResponseType,
} from "axios";
import localforage from "localforage";

export const requestInterceptor = async (req: InternalAxiosRequestConfig) => {
  const getSessionToken = async () => {
    const { data, error } = await supabaseClient.auth.getSession();
    if (error) {
      const refreshResponse = await supabaseClient.auth.refreshSession();
      if (refreshResponse.error) {
        window.location.href = "/login"; // DEBUG
        throw new Error("Logout due to session refresh error");
      }
      const token = refreshResponse.data.session?.access_token;
      await localforage.setItem("token", token);
      return token;
    }
    return data.session?.access_token;
  };

  try {
    const token = await getSessionToken();
    req.headers.Authorization = "Bearer " + token;
  } catch (error) {
    console.error(error);
  }

  return req;
};

export const responseInterceptor = (res: AxiosResponse) => {
  return res;
};

export const errorInterceptor = async (err: AxiosError) => {
  if (err.response) {
    const { status } = err.response;

    if (status === 401) {
      console.warn("Token expired or unauthorized, trying to refresh...");

      const { data, error } = await supabaseClient.auth.refreshSession();

      if (error || !data.session?.access_token) {
        console.error("Session refresh failed, redirecting to login...");
        await localforage.removeItem("token");
        window.location.href = "/login";
        return Promise.reject(err);
      }

      const newToken = data.session.access_token;
      await localforage.setItem("token", newToken);

      // Retry request lama dengan token baru
      const originalRequest = err.config!;
      (originalRequest.headers as any) = {
        ...(originalRequest.headers || {}),
        Authorization: `Bearer ${newToken}`,
      };
      return API(originalRequest);      
    } else {
      err.message = "Oops, something went wrong!";
    }
  }
  return Promise.reject(err);
};


const API = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
  withCredentials: false,
});

API.interceptors.request.use(async (req) => {
  req = await requestInterceptor(req);
  return req;
});

API.interceptors.response.use(
  responseInterceptor,
  async (error: AxiosError) => {
    return errorInterceptor(error);
  }
);

export const callApi = (
  endpoint: string,
  method: HttpMethod,
  payload?: any | null,
  urlParams?: UrlParams | null,
  queryParams?: QueryParams | null,
  headers?: AxiosHeaders | any | null,
  responseType?: ResponseType | null,
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
): Promise<AxiosResponse<any>> => {
  let url = endpoint;

  // Replace placeholders in the URL with actual values from urlParams
  if (urlParams) {
    Object.keys(urlParams).forEach((param) => {
      const placeholder = `:${param}`;
      if (url.includes(placeholder)) {
        url = url.replace(placeholder, urlParams[param]);
      }
    });
  }
  // If no urlParams provided or there is urlParams not replaced, remove all placeholders
  url = url.replace(/\/:\w+/g, "");

  // Create the Axios request configuration
  const requestConfig: AxiosRequestConfig = {
    method,
    url,
    params: queryParams,
    headers, // Add headers to the request configuration
    onUploadProgress, // Add onUploadProgress to the request configuration
  };

  // Only include the payload if it's not null or undefined
  if (payload !== null && payload !== undefined) {
    requestConfig.data = payload;
  }

  if (responseType) {
    requestConfig.responseType = responseType;
  }

  return API(requestConfig);
};
