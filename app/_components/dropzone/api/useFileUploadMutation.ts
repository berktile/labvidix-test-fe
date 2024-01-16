import {
  useMutation,
} from "@tanstack/react-query";
import axiosInstance from "@/app/interceptor/axiosInstance";
import useSinglePackageStore from "@/app/_stores/useSinglePackageStore";
import { SinglePackageData } from "@/app/(routes)/results/[id]/page";
export type FileUploadDTO = {
  files: File[];

};

const uploadFile = async (files: File[]) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("files", file);
  });

  const response = await axiosInstance.post("/upload/file", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (!response.data) {
    throw new Error("Error uploading file");
  }

  return response.data 
};

export const useFileUploadMutation = () => {
  const setSinglePackage = useSinglePackageStore(
    (state) => state.setSinglePackage
  );


  return useMutation({
 
    onError: (error, files, rollback) => {
      console.log("Error:", error);
    },
   onSettled: (data, error, files) => {
  if (!error) {
    let packageData;
    for (const item of data) {
      if (item.package) {
        packageData = item.package as SinglePackageData;
        break;
      }
    }

    if (packageData) {
      setSinglePackage(packageData);
      console.log("Success:", packageData);
    } else {
      console.error("Error: Package property not found in the response");
    }
  }
},


    mutationFn: uploadFile,
  });
};
