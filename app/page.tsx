"use client";
import React, {useEffect, useState} from "react";
import Navbar from "./_components/navbar";
import Dropzone from "./_components/dropzone";
import styles from "./_layouts/Home.module.scss";
import useSinglePackageStore from "./_stores/useSinglePackageStore";
import CollapsiblePackage from "./_components/collapsible-package";
import historyLayout from "./_layouts/history.module.scss";
import { SuccessStatus } from "./_components/dropzone";


export default function Home() {
  const singlePackage = useSinglePackageStore((state) => state.singlePackage);
  const isSuccess = useSinglePackageStore((state) => state.isSuccess);
  const setIsSuccess = useSinglePackageStore((state) => state.setIsSuccess);
  const [showCollapsiblePackage, setShowCollapsiblePackage] = useState(false);

  useEffect(() => {
    if (isSuccess) {
     
      setTimeout(() => {
        setIsSuccess(false);
        setShowCollapsiblePackage(true);
      }, 3000);
    }
  }, [isSuccess]);

  if (showCollapsiblePackage && singlePackage) {

    return (
      <section className={historyLayout.container}>
        <CollapsiblePackage packages={[singlePackage]} />
      </section>
    );
  }

  if (isSuccess) {

    return <SuccessStatus />;
  }

  return (
    <div className={styles.container}>
      <Dropzone />
    </div>
  );
}
