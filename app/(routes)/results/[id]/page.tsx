'use client';
import React from "react";
import styles from "../../../_layouts/results.module.scss";
import ResultsViewList from "@/app/_components/result-view";
import { useGetPackageDetailsQuery } from "../api/useGetPackageDetails";
import { useParams } from "next/navigation";
import StatusMessage, { Status } from "@/app/_components/status";


export interface ExtractedData {
  Text: string;
  Type: string;
  Score: number;
}

export interface ExtractedFile {
  _id: string;
  extractedData: ExtractedData[];
  extractionDate: string;
  status: string;
  rating: number;
}

export interface SinglePackageRawDocument {
  _id: string;
  documentName: string;
  documentUrl: string;
  uploadDate: string;
  extractedFile: ExtractedFile;
}

export interface SinglePackageData {
  _id: string;
  packageName: string;
  createdAt: string;
  rawDocuments: SinglePackageRawDocument[];
}

export default function Results() {
  const { id } = useParams();
console.log("id", id)
  const { isLoading, isError, error, data } = useGetPackageDetailsQuery(id);

  console.log(data);
  
  if (isLoading) {
    return <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    
    }}>
      <StatusMessage status={Status.Loading} />
    </div>
  }
      if (isError) {
        return <div>Error: {error?.message}</div>;
      }

  return (
    <div className={styles.container}>
      {data && <ResultsViewList packageData={data} />}
    </div>
  );
}
