/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 10 * 60 * 1000,
      retry: (failureCount, error) => {
        if (error instanceof AxiosError && error.status && error.status >= 400 && error.status < 500) {
          return false
        } 
        return failureCount < 3
      },
      refetchOnWindowFocus: false,
      refetchOnReconnect: true
    }
  }
})

export type ApiFnReturnType<FnType extends (...args: any) => Promise<any>> =
  Awaited<ReturnType<FnType>>;

export type QueryConfig<T extends (...args: any[]) => any> = Omit<
  ReturnType<T>,
  'queryKey' | 'queryFn'
>;