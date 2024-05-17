import Image from "next/image";
import styles from "./header.module.css";
import logo from "/images/logo.png";
import earphone from "/images/earphone.png";
import bluetooth from "/images/bluetooth.png";
import charge from "/images/low-battery.png";
import wifi from "/images/wi-fi.png";
export default function Header() {
  const today = new Date();
  const options = {
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  };
  const dateString = today.toLocaleDateString("tr-TR", options);
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.ul}>
          <li>
            <Image src={logo} width={15} height={18} alt="logo"></Image>
          </li>
          <li>Dosya</li>
        </ul>
        <ul className={styles.ul}>
          <li>
            <Image src={bluetooth} width={20} height={18} alt="bt"></Image>
          </li>
          <li>
            <Image
              src={charge}
              width={27}
              height={20}
              alt="charge"
              style={{ marginTop: "2px" }}
            ></Image>
          </li>
          <li>
            <Image src={wifi} width={20} height={20} alt="wifi"></Image>
          </li>
          <li>{dateString}</li>
        </ul>
      </nav>
    </header>
  );
}
