import useSWR from "swr";

import { getFetcher } from "@/utils/fetchers";

export const useProject = () => {
  const { data, error } = useSWR(`/api/project`, getFetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
