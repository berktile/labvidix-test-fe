import { useMutation,useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/app/interceptor/axiosInstance";

const updateRating = async(processedDocumentId:string, rating:number): Promise<any> => {
    const response = await axiosInstance.put(`results/update-rating/${processedDocumentId}`,
        {
            rating: rating
        }
        );

    if (!response.data) {
        throw new Error("Error updating rating");
    }
    return response.data;

}

export const useRatingMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
    mutationFn: (data: any) => updateRating(data.processedDocumentId, data.rating),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["packageDetails"] });
    },
    onError: (error: Error) => {
      console.log(error);
    },
  })


}

