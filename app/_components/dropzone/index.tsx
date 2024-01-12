"use client";
import React, { useCallback, useMemo, useState } from "react";
import {
  useDropzone,
  DropzoneRootProps,
  DropzoneInputProps,
} from "react-dropzone";
import styles from "./styles.module.scss";
import Image from "next/image";
import DropLogo from "../../_assets/homepage/converter1.png";
import Remove from "../../_assets/homepage/remove.svg";
import { useFileUploadMutation } from "./api/useFileUploadMutation";
import Loading from "../custom-spinner/Loading";
import Success from "../../_assets/homepage/success.svg";
import { motion, AnimatePresence } from "framer-motion";

const Extracting: React.FC = () => {
  return (
    <section className={styles.extractingStatusWrapper}>
      <div className={styles.spinner}>
        <Loading />
      </div>
      <p>Files extracting...</p>
    </section>
  );
};

const SuccessStatus: React.FC = () => {
  return (
    <section className={styles.extractingStatusWrapper}>
      <div className={styles.spinner}>
        <Image src={Success} alt="Success" width={0} height={0} />
      </div>
      <p>Extraction completed successfully!</p>
    </section>
  );
};

const Dropzone: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const fileUploadMutation = useFileUploadMutation();
  const [isLoading, setIsLoading] = useState(false);

  const maxFileLimit = process.env.MAX_FILE_LIMIT
    ? parseInt(process.env.MAX_FILE_LIMIT)
    : 5;

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (files.length + acceptedFiles.length > maxFileLimit) {
        return;
      }

      const validFiles = acceptedFiles.filter((file) =>
        /\.(jpg|jpeg|png|pdf)$/i.test(file.name)
      );

      setFiles([...files, ...validFiles]);
    },
    [files]
  );

  const { getRootProps, getInputProps } =
    useDropzone({
      onDrop,
      accept: {
        "image/jpeg": [],
        "application/pdf": [],
        "image/png": [],
        "image/jpg": [],
      },
    });

  const removeFile = (index: number,event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleStartExtraction = async () => {
    setIsLoading(true);
    try {
      await fileUploadMutation.mutateAsync(files);
    } catch (error) {
      console.error("An error occurred while uploading the file", error);
    } finally {
      setFiles([]);
      setIsLoading(false);
    }
  };

  const fileList = useMemo(
    () => (
      <AnimatePresence mode="popLayout">
        {files.map((file, index) => (
          <motion.li
            key={file.name}
            className={styles.fileBox}
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: 50,
            }}
            transition={{
              duration: 0.03,
              delay: index * 0.075,
              ease: "easeInOut",
            }}
          >
            <p className={styles.fileName}>{file.name}</p>
           
            <button className={styles.remove}  onClick={(event) => removeFile(index, event)}>
              <Image src={Remove} alt="Remove" width={0} height={0} />
            </button>
          </motion.li>
        ))}
      </AnimatePresence>
    ),
    [files]
  );

  if (isLoading) {
    return <Extracting />;
  }
  if (fileUploadMutation.isError) {
    return <p>An error occurred while uploading the file</p>;
  }

  if (fileUploadMutation.isSuccess) {
    return <SuccessStatus />;
  }

  return (
    <section className={styles.wrapper}>
      <div
        className={styles.container} 
     
        {...(getRootProps() as DropzoneRootProps)}
      >
        <div className={styles.logo}>
          <Image src={DropLogo} alt="Logo" width={0} height={0} />
        </div>

        <button
          disabled={files.length >= maxFileLimit}
        
          className={`${styles.selectButton} ${
            files.length >= 5 ? styles.disabled : styles.enabled
          }`}
          
        >
          Select file
        </button>
        <div className={styles.dropZone}>
          <input {...(getInputProps() as DropzoneInputProps)} />
          <p className={styles.desc}>
            Drag and drop a PDF, JPEG, and PNG file to extract.
          </p>
        </div>
        <ul className={styles.fileList}>
          <li
            className={`${styles.maxFile} ${
              files.length >= maxFileLimit ? styles.visible : styles.hidden
            }`}
          >
            You&apos;ve reached the{" "}
            <span>maximum {maxFileLimit}-file limit</span> for extraction.
          </li>

          {fileList}
        </ul>
      </div>
      <button
        disabled={files.length === 0}
        onClick={handleStartExtraction}
        className={`${styles.extractButton} ${
          files.length === 0 ? styles.disabled : styles.enabled
        }`}
      >
        Start text extraction
      </button>
    </section>
  );
};

export default Dropzone;
