import React from "react";
import Image from "next/image";
import mail from "/images/mail.png";
import styles from "./mydoc.module.css";

function MyOtherDocument({ onClick }) {
  return (
    <div className={styles.mainDiv}>
      <Image src={mail} alt="pdf" width={90} height={90} onClick={onClick} />
      <p style={{ marginLeft: "30px" }}>mail</p>
    </div>
  );
}

export default MyOtherDocument;
