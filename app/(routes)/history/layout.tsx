"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styles from "../../_layouts/history.module.scss"
import { useEffect } from "react";
import React from "react";

const queryClient = new QueryClient();

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showing, setShowing] = React.useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  

  if (typeof window == "undefined") {
    return <></>;
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        
        
            {children}
       
      </QueryClientProvider>
       
       
   
    );
  }
}
