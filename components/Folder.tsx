import Image from 'next/image';
import folder from '/images/folder.webp';
import styles from './folder.module.css';

// Define the type for the props
interface FolderProps {
  onClick: () => void; // onClick is a function that takes no arguments and returns void
}

const Folder: React.FC<FolderProps> = ({ onClick }) => {
  return (
    <div className={styles.folder} onClick={onClick}>
      <Image
        src={folder}
        width={87}
        height={56}
        alt='folder'
        className={styles.image}
      />
      <p className={styles.p}>Folder</p>
    </div>
  );
};

export default Folder;
