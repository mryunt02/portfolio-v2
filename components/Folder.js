import Image from "next/image";
import folder from "/images/folder.webp";
import styles from "./folder.module.css";
export default function Folder({ onClick }) {
  return (
    <div className={styles.folder} onClick={onClick}>
      <Image
        src={folder}
        width={87}
        height={56}
        alt="folder"
        className={styles.image}
      ></Image>
      <p className={styles.p}>Folder</p>
    </div>
  );
}
