"use client";
import React from "react";
import Navbar from "./_components/navbar";
import Dropzone from "./_components/dropzone";
import styles from "./_layouts/Home.module.scss";

export default function Home() {
  return (
    <div className = {styles.container}>
      <Dropzone />
    </div>
  );
}
