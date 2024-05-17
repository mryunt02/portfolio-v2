import React from "react";
import styles from "./NewModal.module.css";
import Image from "next/image";
import closeIcon from "/images/vector-intelligent-object-2.svg";
import developer from "/images/hammer.svg";
import Infos from "./Infos";

const CvModal = ({ onClose }) => {
  return (
    <div className={styles.newModal}>
      <div className={styles.main}>
        <Image
          src={closeIcon}
          alt="close"
          width={30}
          height={30}
          onClick={onClose}
          style={{ cursor: "pointer", transform: "rotate(180deg)" }}
        />
        <div>
          <h1 className={styles.h1}>Bugrahan Yunt</h1>
          <p className={styles.p}>Software Engineer</p>
        </div>
        <Image src={developer} alt="developer" width={30} height={30} />
      </div>
      <div>
        <Infos
          title={"Objective"}
          description={
            "Software Engineer with 2 years of experience in JavaScript and React.js"
          }
        />
        <Infos
          title={"Education"}
          description={
            "Computer Engineering Undergrad, Sivas Cumhuriyet Üniversitesi"
          }
        />
        <Infos
          title={"Skills"}
          description={"JavaScript, React.js, Next.js, TypeScript, HTML, CSS "}
        />
      </div>
    </div>
  );
};

export default CvModal;
