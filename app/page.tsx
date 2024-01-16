"use client";
import React, {useEffect} from "react";
import Navbar from "./_components/navbar";
import Dropzone from "./_components/dropzone";
import styles from "./_layouts/Home.module.scss";
import useSinglePackageStore from "./_stores/useSinglePackageStore";
import CollapsiblePackage from "./_components/collapsible-package";
import historyLayout from "./_layouts/history.module.scss";


export default function Home() {
  const singlePackage = useSinglePackageStore((state) => state.singlePackage);
  

  useEffect(() => {
    console.log("singlePackage", singlePackage);
  }, [singlePackage]);

  if (singlePackage) {
    return <section className={historyLayout.container}>
    <CollapsiblePackage packages = {[singlePackage]} />
    </section>
    
    
  }

  return (
    <div className = {styles.container}>
      <Dropzone />
      {

      }
    </div>
  );
}
