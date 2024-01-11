import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { UseMutationOptions } from "@tanstack/react-query";


interface User {
  token: string;
  message: string;
  user: {
    id: number;
    email: string;
  };
}

interface ErrorResponse {
  statusCode: number;
  message: string;
  error: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function signUp(email: string, password: string): Promise<User> {

  const response = await fetch(`${baseUrl}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    const errorResponse: ErrorResponse = await response.json();
    throw new Error(errorResponse.message);
  }

    const data: User = await response.json();
    return data;
}

interface UseSignupProps {
  email: string;
  password: string;
}



export default function useSignup() {
    const router = useRouter();
  
    
 
    const options: UseMutationOptions<User, Error, UseSignupProps> = {
        mutationFn: (data: UseSignupProps) => signUp(data.email, data.password),
        onSuccess: (data: User) => {
          localStorage.setItem("token", data.token);
          router.push("/");

        },
        onError: (error: Error) => {
            console.log(error);
            }
        
      };
    
      const signUpMutation = useMutation(options);
    
      return { signUpMutation };


  }