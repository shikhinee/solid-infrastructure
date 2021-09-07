import useSWR from "swr";

import { getFetcher } from "@/utils/fetchers";

export const useProject = () => {
  const { data, mutate, error } = useSWR(`/api/project`, getFetcher);

  return {
    data: data,
    mutate: mutate,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useProjectById = (id) => {
  const { data, error } = useSWR(id ? `/api/project/${id}` : null, getFetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
