"use client";

import Queries from "@/lib/query";
import { useQuery } from "@tanstack/react-query";

function useImage(query: string) {
  const { key: queryKey, fn: queryFn } = Queries.getImageUrl(query);

  const response = useQuery({
    queryKey,
    queryFn,
  });

  return response;
}

export default useImage;
