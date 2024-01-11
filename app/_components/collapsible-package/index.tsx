import React, { useState, useCallback, useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import EditIcon from "../../_assets/history/edit.svg";
import CaretUpIcon from "../../_assets/history/chevron.svg";
import FileIcon from "../../_assets/history/file.svg";
import DownloadIcon from "../../_assets/history/download.svg";
import Arrow from "../../_assets/history/arrow.svg";
import { motion, AnimatePresence } from "framer-motion";
import moment from "moment";
import Divider from "../../_assets/history/divider.svg";
import { useUpdatePackageNameMutation } from "@/app/(routes)/history/api/useUpdatePackageNameMutation";
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CSVLink } from "react-csv";

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
}

export interface RawDocument {
  _id: string;
  documentName: string;
  documentUrl: string;
  uploadDate: string;
  extractedFile: ExtractedFile;
}

export interface PackageData {
  _id: string;
  createdAt: string;
  packageName: string;
  rawDocuments: RawDocument[];
}

export interface CollapsiblePackageProps {
  packages: PackageData[];
}

const generateCSVData = (rawDocument: RawDocument) => {
  const csvData = rawDocument.extractedFile.extractedData.map((data) => ({
    DocumentName: rawDocument.documentName,
    DocumentURL: rawDocument.documentUrl,
    Text: data.Text,
    Type: data.Type,
    
  }));

  const headers = [
    { label: "DocumentName", key: "DocumentName" },
    { label: "DocumentURL", key: "DocumentURL" },
    { label: "Text", key: "Text" },
    { label: "Type", key: "Type" },
    
  ];

  return [headers, ...csvData];
};

const CollapseBody = ({ rawDocuments }: { rawDocuments: RawDocument[] }) => {
  return (
    <motion.ul
      className={styles.collapseBodyWrapper}
      initial={{ height: 0, opacity: 0, y: -10 }}
      animate={{ height: "auto", opacity: 1, y: 0 }}
      exit={{ height: 0, opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      {rawDocuments.map((rawDocument) => (
        <motion.li
          className={styles.collapseBody}
          key={rawDocument._id}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.fileNameWrapper}>
            <div className={styles.icon}>
              <Image src={FileIcon} alt="file" width={0} height={0} />
            </div>
            <p>{rawDocument.documentName}</p>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.icon}>
              <Image src={DownloadIcon} alt="edit" width={0} height={0} />
            </div>
            <div className={styles.icon}>
              <Image src={Arrow} alt="arrow" width={0} height={0} />
            </div>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
};

interface CollapseHeaderProps {
  packageName: string;
  date: string;
  rawDocuments: RawDocument[];
  onViewAll: () => void;
  onEdit: () => void;
  isCollapsed: boolean;
  onCollapse: () => void;
  id: string;
}

const CollapseHeader = ({
  packageName,
  date,
  rawDocuments,
  onViewAll,
  onEdit,
  isCollapsed,
  id,
  onCollapse,
}: CollapseHeaderProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPackageName, setEditedPackageName] =
    useState<PackageData["packageName"]>(packageName);
  const { mutateAsync, isSuccess, isError, error } =
    useUpdatePackageNameMutation();
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadAll = () => {
    rawDocuments.forEach((rawDocument) => {
      const csvData = generateCSVData(rawDocument);
      const csvString = csvData
        .map((row) => Object.values(row).join(","))
        .join("\n");
      const csvBlob = new Blob([csvString], { type: "text/csv" });
      const csvUrl = URL.createObjectURL(csvBlob);
      const link = document.createElement("a");
      link.href = csvUrl;
      link.target = "_blank";
      link.download = `${rawDocument.documentName}_data.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(csvUrl);


    });

    

  };

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
      id: id,
      packageName: editedPackageName,
    });
  }, [editedPackageName]);

  const handleEdit = () => {
    onEdit();
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

  const formattedDate = moment(date, "DD/MM/YYYY HH:mm").format(
    "DD/MM/YYYY HH:mm"
  );

  return (
    <div className={styles.collapseHeader}>
      <div className={styles.packageName}>
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
            <h2>{editedPackageName}</h2>
            <div className={styles.icon} onClick={handleEdit}>
              <Image src={EditIcon} alt="edit" width={0} height={0} />
            </div>
          </>
        )}
        {isLoading && (
          <div className={styles.icon}>
            <ClipLoader color="#3A3A49" size={24} />
          </div>
        )}
      </div>
      <div className={styles.dateWrapper}>
        <p>{formattedDate.split(" ")[0]}</p>
        <Image src={Divider} alt="divider" width={0} height={0} />
        <p>{formattedDate.split(" ")[1]}</p>
      </div>
      <button className={styles.downloadButton} onClick={handleDownloadAll}>
        Download all
      </button>
      <Link className={styles.viewAll} href={`/results/${id}`}>
        View all
      </Link>
      <button
        className={`
          ${styles.caret} 
          ${isCollapsed ? styles.up : styles.down}
        `}
        onClick={onCollapse}
      >
        <Image src={CaretUpIcon} alt="caret" width={0} height={0} />
      </button>
    </div>
  );
};

const CollapsiblePackage: React.FC<CollapsiblePackageProps> = ({
  packages,
}) => {
  const sortedPackages = packages?.sort((a, b) =>
    moment(a.createdAt, "DD/MM/YYYY HH:mm").isBefore(
      moment(b.createdAt, "DD/MM/YYYY HH:mm")
    )
      ? 1
      : -1
  );

  const [collapsedStates, setCollapsedStates] = useState(
    sortedPackages.map(() => false)
  );

  const getIdIndex = useCallback(
    (_id: string) => {
      return sortedPackages.findIndex((packageData) => packageData._id === _id);
    },
    [sortedPackages]
  );

  const handleCollapse = (_id: string) => {
    const index = getIdIndex(_id);
    setCollapsedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <section className={styles.container}>
      {sortedPackages?.map((packageData) => (
        <React.Fragment key={packageData._id}>
          <CollapseHeader
            packageName={packageData.packageName}
            id={packageData._id}
            date={packageData.createdAt}
            rawDocuments={packageData.rawDocuments}
            onViewAll={() => {}}
            onEdit={() => {}}
            isCollapsed={collapsedStates[getIdIndex(packageData._id)]}
            onCollapse={() => handleCollapse(packageData?._id)}
          />
          {!collapsedStates[getIdIndex(packageData._id)] && (
            <CollapseBody rawDocuments={packageData.rawDocuments} />
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default CollapsiblePackage;
