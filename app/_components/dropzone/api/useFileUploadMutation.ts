import {
  useMutation,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import axiosInstance from "@/app/interceptor/axiosInstance";

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

  return response.data;
};

export const useFileUploadMutation = () => {
  return useMutation({
 
    onError: (error, files, rollback) => {
      console.log("Error:", error);
    },

    mutationFn: uploadFile,
  });
};
