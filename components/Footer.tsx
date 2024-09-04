import Image from 'next/image';
import styles from './footer.module.css';
import trash from '/images/trash.webp';
import chrome from '/images/chrome.png';
import system from '/images/system.png';
import vscode from '/images/vscode.png';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.ul}>
        <li>
          <Image src={chrome} width={80} height={80} alt='gmail' />
        </li>
        <li>
          <Image src={system} width={80} height={80} alt='system' />
        </li>
        <li>
          <Image src={vscode} width={80} height={80} alt='vscode' />
        </li>
        <li>
          <Image
            src={trash}
            width={80}
            height={80}
            alt='rubbish'
            className={styles.rubbish}
          />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
