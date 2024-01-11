"use client";
import React from "react";
import CollapsiblePackage from "@/app/_components/collapsible-package";
import styles from "../../_layouts/history.module.scss";
import { useGetPackagesWithResultsQuery } from "./api/useGetPackagesWithResultsQuery";
import Loading from "@/app/_components/custom-spinner/Loading";

export default function History() {
  const { data, isLoading, isError, error } = useGetPackagesWithResultsQuery();

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Loading />
      </div>
    );
  }

  if (isError) {
    return <div>{error?.message}</div>;
  }

  return (
    <div className={styles.container}>
      {data && <CollapsiblePackage packages={data} />}
      {data?.length == 0 && <p>No data found</p>}
    </div>
  );
}
