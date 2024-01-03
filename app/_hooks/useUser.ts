'use client';
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import { useEffect } from "react";


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface UserProfile {
    id: string;
    iat: number;
    email: string;
    exp: number;
}



const fetchUser = async ():Promise<UserProfile> => {
    const token = localStorage.getItem('token');
    
    if (!token) {
        
        throw new Error('No token found');

    }

    const response = await fetch(`${baseUrl}/auth/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Unable to fetch user');
    }

    return response.json();
} 



const useProfile = () => {
    const router = useRouter();
          
    const { data, isLoading, error,refetch,status,isError } = useQuery(
        {
            queryKey: ['user'],
            queryFn: () => fetchUser(),
            retry: false,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            enabled: true
        
        },

    );  
    return {
      data,
      isLoading,
      error,
      refetch,
      status,
        isError,
    };
  };

export default useProfile;

