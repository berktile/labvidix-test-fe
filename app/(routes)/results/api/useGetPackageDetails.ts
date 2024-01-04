'use client';
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/app/interceptor/axiosInstance";
import { SinglePackageData } from "../[id]/page";
import useProfile from "@/app/_hooks/useUser";
import { useRouter } from "next/router";

const fetchPackageDetails = async (id: string | string[]): Promise<SinglePackageData> => {
  const response = await axiosInstance.get<SinglePackageData>(`/package/get-package/${id}`);
  if (!response.data) {
    throw new Error("Error fetching package details");
  }
  return response.data as SinglePackageData;
};

export const useGetPackageDetailsQuery = (id: string | string[]
  ) => {
  const { data, isLoading, error, refetch, status, isError } = useQuery({
    queryKey: ["packageDetails", id],
    queryFn: () => fetchPackageDetails(id),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    enabled: !!useProfile()?.data?.id,
  });

  return {
    data,
    isLoading,
    error,
    refetch,
    status,
    isError,
    
  };
};
