'use client';
import React from "react";
import CollapsiblePackage from "@/app/_components/collapsible-package";
import styles from "../../_layouts/history.module.scss"
import { useGetPackagesWithResultsQuery } from "./api/useGetPackagesWithResultsQuery";
import Loading from "@/app/_components/custom-spinner/Loading";

const dummyPackage = [
  {
  _id: "1",
  packageName: "Dummy Package",
  rawDocuments: [
    {
      _id: "1",
      documentName: "Dummy Document 1",
      documentUrl: "https://labvidix-images-bucket.s3.us-east-1.amazonaws.com/IMG_6596.jpeg",
      uploadDate: "2023-12-31T00:06:58.993Z",
      extractedFile: {
        _id: "1",
        extractedData: [],
        extractionDate: "2023-12-31T00:06:59.784Z",
        status: "completed",
      },
    },
    {
      _id: "2",
      documentName: "Dummy Document 2",
      documentUrl: "https://labvidix-images-bucket.s3.us-east-1.amazonaws.com/IMG_6596.jpeg",
      uploadDate: "2023-12-31T00:06:58.993Z",
      extractedFile: {
        _id: "2",
        extractedData: [],
        extractionDate: "2023-12-31T00:06:59.784Z",
        status: "completed",
      },
    },
    {
      _id: "3",
      documentName: "Dummy Document 3",
      documentUrl: "https://labvidix-images-bucket.s3.us-east-1.amazonaws.com/IMG_6596.jpeg",
      uploadDate: "2023-12-31T00:06:58.993Z",
      extractedFile: {
        _id: "3",
        extractedData: [],
        extractionDate: "2023-12-31T00:06:59.784Z",
        status: "completed",
      },
    },
  ]
},
{ 
  _id: "2",
  packageName: "Dummy Package 2",
  rawDocuments: [
    {
      _id: "4",
      documentName: "Dummy Document 4",
      documentUrl: "https://labvidix-images-bucket.s3.us-east-1.amazonaws.com/IMG_6596.jpeg",
      uploadDate: "2023-12-31T00:06:58.993Z",
      extractedFile: {
        _id: "4",
        extractedData: [],
        extractionDate: "2023-12-31T00:06:59.784Z",
        status: "completed",
      },
    },
    {
      _id: "5",
      documentName: "Dummy Document 5",
      documentUrl: "https://labvidix-images-bucket.s3.us-east-1.amazonaws.com/IMG_6596.jpeg",
      uploadDate: "2023-12-31T00:06:58.993Z",
      extractedFile: {
        _id: "5",
        extractedData: [],
        extractionDate: "2023-12-31T00:06:59.784Z",
        status: "completed",
      },
    },
    {
      _id: "6",
      documentName: "Dummy Document 6",
      documentUrl: "https://labvidix-images-bucket.s3.us-east-1.amazonaws.com/IMG_6596.jpeg",
      uploadDate: "2023-12-31T00:06:58.993Z",
      extractedFile: {
        _id: "6",
        extractedData: [],
        extractionDate: "2023-12-31T00:06:59.784Z",
        status: "completed",
      },
    },
  ]
},
{ 
  _id: "3",
  packageName: "Dummy Package 3",
  rawDocuments: [
    {
      _id: "7",
      documentName: "Dummy Document 7",
      documentUrl: "https://labvidix-images-bucket.s3.us-east-1.amazonaws.com/IMG_6596.jpeg",
      uploadDate: "2023-12-31T00:06:58.993Z",
      extractedFile: {
        _id: "7",
        extractedData: [],
        extractionDate: "2023-12-31T00:06:59.784Z",
        status: "completed",
      },
    },

  ]
},

];

export default function History() {
  const { data, isLoading, isError, error, } = useGetPackagesWithResultsQuery();

  if (isLoading) {
    return <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    
    }}>
      <Loading />
    </div>
  }

  if (isError) {
    return <div>{error?.message}</div>;
  }



  return (
    <div className = {styles.container}>
       {
        data && <CollapsiblePackage packages={
          data
        } />
       }
    </div>
  );
}
