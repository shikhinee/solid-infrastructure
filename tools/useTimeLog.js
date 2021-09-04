import useSWR from "swr";

import { getFetcher } from "@/utils/fetchers";

export const useTimeLog = (userId) => {
  const { data, error } = useSWR(`/api/timelog/${userId}`, getFetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
