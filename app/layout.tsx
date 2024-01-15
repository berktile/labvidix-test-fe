"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import styles from "./_layouts/Home.module.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const inter = Inter({ subsets: ["latin"] });
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let token: string | null = null;
    if (typeof window !== "undefined") {
      token = localStorage?.getItem("token");
    }

    if (!token && pathname !== "/login" && pathname !== "/signup") {
      router.push("/login");
    }


  }, [pathname, router]);

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={inter.className}>
          {pathname == "/login" || pathname == "/signup" ? null : <Navbar />}

          {children}
        </body>
      </html>
    </QueryClientProvider>
  );
}
