"use client";

import { useSearchParams, useRouter } from "next/navigation";

const useQueryParams = () => {
   const searchParams = useSearchParams();
   const router = useRouter();

   const setSearchParams = (keyOrQueries: string | Record<string, string>, value?: string) => {
      const newParams = new URLSearchParams(searchParams.toString());

      if (typeof keyOrQueries === "string" && value !== undefined) {
         newParams.set(keyOrQueries, value);
      } else if (typeof keyOrQueries === "object") {
         Object.entries(keyOrQueries).forEach(([key, val]) => {
            newParams.set(key, val);
         });
      }

      router.replace(`?${newParams.toString()}`, { scroll: false });
   };

   const getSearchParams = (key: string) => {
      return searchParams.get(key);
   };

   const deleteSearchParams = (key: string) => {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.delete(key);
      router.replace(`?${newParams.toString()}`, { scroll: false });
   };

   return { setSearchParams, getSearchParams, deleteSearchParams };
};

export default useQueryParams;
