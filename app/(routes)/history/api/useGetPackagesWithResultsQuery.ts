import {useQuery, useQueryClient} from "@tanstack/react-query";
import axiosInstance from "@/app/interceptor/axiosInstance";
import {PackageData } from "@/app/_components/collapsible-package";
import useProfile from "@/app/_hooks/useUser";
import { useRouter } from "next/navigation";


const fetchPackagesWithResults = async () => {
    const response = await axiosInstance.get("/package/get-packages");
    if (!response.data) {
        throw new Error("Error fetching packages");
    }

    return response.data as PackageData[];
}


export const useGetPackagesWithResultsQuery = () => {

    const { data, isLoading, error,refetch,status,isError } =  useQuery(
        {
            queryKey:["packages"],
            queryFn: fetchPackagesWithResults,
            refetchOnWindowFocus:false,
            refetchOnMount:true,
             enabled: useProfile()?.data?.id ? true : false,
            
        },        
    )

    return {
        data,
        isLoading,
        error,
        refetch,
        status,
        isError
        
    }

}