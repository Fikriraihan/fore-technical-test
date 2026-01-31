/* eslint-disable @typescript-eslint/no-explicit-any */
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export type UrlParams = Record<string, string>;
export type QueryParams = Record<string, any>;

export type ResponseType =
  | "arraybuffer"
  | "blob"
  | "document"
  | "json"
  | "text"
  | "stream"
  | "formdata";

