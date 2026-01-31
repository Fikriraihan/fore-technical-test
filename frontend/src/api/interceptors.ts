/* eslint-disable @typescript-eslint/no-explicit-any */
import type { HttpMethod, QueryParams, UrlParams } from "@/types/types";
import axios, {
  AxiosHeaders,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";



export const responseInterceptor = (res: AxiosResponse) => {
  return res;
};

const API = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
  withCredentials: false,
});

export const callApi = (
  endpoint: string,
  method: HttpMethod,
  payload?: any,
  urlParams?: UrlParams | null,
  queryParams?: QueryParams | null,
  headers?: AxiosHeaders,
): Promise<any> => {
  let url = endpoint;

  if (urlParams) {
    Object.keys(urlParams).forEach((param) => {
      const placeholder = `:${param}`;
      if (url.includes(placeholder)) {
        url = url.replace(placeholder, urlParams[param]);
      }
    });
  }
  url = url.replace(/\/:\w+/g, "");

  const requestConfig: AxiosRequestConfig = {
    method,
    url,
    params: queryParams,
    headers, 
  };

  if (payload !== null && payload !== undefined) {
    requestConfig.data = payload;
  }


  return API(requestConfig);
};
