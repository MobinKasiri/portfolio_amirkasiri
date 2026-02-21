import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

interface ApiCallOptions<T> {
   baseUrl?: string;
   url: string;
   params?: Record<string, unknown>;
   data?: T;
   method?: "get" | "post" | "put" | "delete" | "patch";
   formDataIsNeeded?: boolean;
   tokenIsNeeded?: boolean;
}

interface ApiResponse<T> {
   data: T | null;
   error: AxiosError | null;
   isLoading: false;
}

export async function apiCall<T>({
   baseUrl,
   url,
   params = {},
   data = {} as T,
   method = "get",
   // tokenIsNeeded = true,
   formDataIsNeeded = false,
}: ApiCallOptions<T>): Promise<ApiResponse<T>> {
   const headers: Record<string, string> = {
      Accept: "application/json",
      "Content-Type": formDataIsNeeded ? "multipart/form-data" : "application/json",
   };

   const token = null;
   if (token) headers.Authorization = `Bearer ${token}`;

   let completeUrl = baseUrl || process.env.NEXT_PUBLIC_BASE_URL || "";
   completeUrl += url;

   const config: AxiosRequestConfig = {
      method,
      url: completeUrl,
      headers,
      params,
      data,
   };

   try {
      const response: AxiosResponse<T> = await axios(config);
      return { data: response.data, error: null, isLoading: false };
   } catch (error) {
      const axiosError = error as AxiosError;
      return {
         data: null,
         error: axiosError,
         isLoading: false,
      };
   }
}
