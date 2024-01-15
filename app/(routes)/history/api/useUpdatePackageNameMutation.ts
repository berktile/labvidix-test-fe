import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import axiosInstance from "@/app/interceptor/axiosInstance";
import {PackageData } from "@/app/_components/collapsible-package";
import { useRouter } from "next/navigation";

interface HttpResponse {
    message:string;
}

const updatePackageName = async(id:string, newName:string): Promise<HttpResponse> => {
    const response = await axiosInstance.patch(`/package/edit-package-name/${id}`, 
    {
        packageName: newName
    }
        );

    if (!response.data) {
        throw new Error("Error updating package name");
    }
    return response.data as HttpResponse;


}

export const useUpdatePackageNameMutation = () => {
    const queryClient = useQueryClient();
    const router = useRouter();
    return useMutation({
    mutationFn: (data: any) => updatePackageName(data.id, data.packageName),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["packages"] });
     
    },
    onError: (error: Error) => {
      console.log(error);
    },
  })
}

