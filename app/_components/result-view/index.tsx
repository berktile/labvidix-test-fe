"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import FileIcon from "../../_assets/history/file.svg";
import { SinglePackageData } from "@/app/(routes)/results/[id]/page";
import { SinglePackageRawDocument } from "@/app/(routes)/results/[id]/page";
import BackIcon from "../../_assets/results/back.svg";
import { useUpdatePackageNameMutation } from "@/app/(routes)/history/api/useUpdatePackageNameMutation";
import { useRouter } from "next/navigation";
import { PackageData } from "../collapsible-package";
import ClipLoader from "react-spinners/ClipLoader";
import Rating from "../rating";

const EditIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      id="Vector"
      d="M21.3103 6.87768L17.1216 2.688C16.9823 2.54867 16.8169 2.43815 16.6349 2.36275C16.4529 2.28735 16.2578 2.24854 16.0608 2.24854C15.8638 2.24854 15.6687 2.28735 15.4867 2.36275C15.3047 2.43815 15.1393 2.54867 15 2.688L3.43969 14.2492C3.2998 14.388 3.18889 14.5532 3.11341 14.7353C3.03792 14.9173 2.99938 15.1125 3.00001 15.3096V19.4992C3.00001 19.8971 3.15804 20.2786 3.43935 20.5599C3.72065 20.8412 4.10218 20.9992 4.50001 20.9992H8.6897C8.88675 20.9999 9.08197 20.9613 9.26399 20.8858C9.44602 20.8104 9.61122 20.6995 9.75001 20.5596L21.3103 8.99925C21.4496 8.85995 21.5602 8.69458 21.6356 8.51257C21.711 8.33056 21.7498 8.13548 21.7498 7.93846C21.7498 7.74145 21.711 7.54637 21.6356 7.36436C21.5602 7.18235 21.4496 7.01698 21.3103 6.87768ZM8.6897 19.4992H4.50001V15.3096L12.75 7.05956L16.9397 11.2492L8.6897 19.4992ZM18 10.188L13.8103 5.99925L16.0603 3.74925L20.25 7.938L18 10.188Z"
      fill="#3A3A49"
    />
  </svg>
);

const ResultView: React.FC<{ rawDocument: SinglePackageRawDocument }> = ({
  rawDocument,
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <div className={styles.docPreview}>
          <Image
            src={rawDocument.documentUrl}
            alt="image"
            width={0}
            height={0}
            layout="responsive"
            priority
          />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.header}>
          <div className={styles.fileNameWrapper}>
            <div className={styles.icon}>
              <Image src={FileIcon} alt="file" width={0} height={0} />
            </div>
            <span className={styles.fileName}>{rawDocument.documentName}</span>
          </div>
          <div className={styles.editResultsWrapper}>
            <div className={styles.icon}>
              <EditIcon />
            </div>
            <button className={styles.editResults}>Edit results</button>
          </div>
        </div>

        <ul className={styles.results}>
          {rawDocument.extractedFile.extractedData.map((item, index) => (
            <li key={index} className={styles.result}>
              <span className={styles.title}>{item.Type}</span>
              <span className={styles.content}>{item.Text}</span>
            </li>
          ))}

          <li className={styles.result}>
            <Rating
              processedDocumentId={rawDocument.extractedFile._id}
              ratingValue={rawDocument.extractedFile.rating}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

const ResultsViewList: React.FC<{ packageData: SinglePackageData }> = ({
  packageData,
}) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [editedPackageName, setEditedPackageName] = useState<
    PackageData["packageName"]
  >(packageData.packageName);
  const { mutateAsync, isSuccess, isError, error } =
    useUpdatePackageNameMutation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setIsEditing(false);
      setIsLoading(false);
    }

    if (isError) {
      console.log(error);
      setIsLoading(false);
    }
  }, [isSuccess, isError, error]);

  const handleUpdate = useCallback(async () => {
    setIsLoading(true);
    await mutateAsync({
      id: packageData._id,
      packageName: editedPackageName,
    });
  }, [editedPackageName]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedPackageName(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleUpdate();
    }
  };

  const handleBlur = () => {
    handleUpdate();
  };

  

  return (
    <div className={styles.wrapper}>
      <div className={styles.upperSection}>
        <button
          className={styles.backButton}
          onClick={() => {
            router.back();
          }}
        >
          <Image src={BackIcon} alt="back" width={0} height={0} />
        </button>

        <div className={styles.packageNameContainer}>
          {isEditing ? (
            <input
              type="text"
              value={editedPackageName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          ) : (
            <>
              <h1 className={styles.packageName}>{editedPackageName}</h1>
              <div className={styles.icon} onClick={handleEdit}>
                <EditIcon />
              </div>
            </>
          )}
          {isLoading && (
            <div className={styles.icon}>
              <ClipLoader color="#3A3A49" size={24} />
            </div>
          )}
        </div>
      </div>

      <section className={styles.resultsViewsContainer}>
        <div className={styles.resultsHeader}>
          <span className={styles.headerItem}>Uploaded file</span>
          <span className={styles.headerItem}>Text extraction result</span>
        </div>

        {packageData.rawDocument.map((rawDocument, index) => (
          <ResultView key={index} rawDocument={rawDocument} />
        ))}
      </section>
    </div>
  );
};

export default ResultsViewList;
