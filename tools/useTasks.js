import useSWR from "swr";

import { getFetcher } from "@/utils/fetchers";

export const useRequests = () => {
  const { data, error } = useSWR(`/api/task`, getFetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
