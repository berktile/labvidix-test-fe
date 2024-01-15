'use client';
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useLogout} from "@/app/(routes)/(auth)/login/api/useLogin";

const SignOutPage = () => {
  const router = useRouter();
  const { signOutMutation } = useLogout();

  useEffect(() => {
    const signOut = async () => {
      try {
    
        const token = localStorage.getItem('token');
        if (!token) {
      
          router.replace('/login');
          return;
        }

        await signOutMutation.mutateAsync();
        router.replace('/login');
      } catch (error) {
        console.error(error);
      }
    };

    signOut();
  }, [router, signOutMutation]);

  return null;
};

export default SignOutPage;
