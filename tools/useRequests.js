import useSWR from "swr";

import { getFetcher } from "@/utils/fetchers";

export const useRequests = () => {
  const { data, error } = useSWR(`/api/request`, getFetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
