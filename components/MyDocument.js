import React from "react";
import Image from "next/image";
import pdfimage from "/images/pdf.png";
import styles from "./mydoc.module.css";

function MyDocument({ onClick }) {
  return (
    <div className={styles.mainDiv}>
      <Image
        src={pdfimage}
        alt="pdf"
        width={70}
        height={90}
        onClick={onClick}
      />
      <p className={styles.p}>cv.pdf</p>
    </div>
  );
}

export default MyDocument;
