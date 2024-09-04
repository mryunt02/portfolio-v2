import Image from 'next/image';
import styles from './favorites.module.css';
import airdrop from '/images/image.svg';
import time from '/images/time-time-4.svg';
import app from '/images/app-store-35.svg';
import hammer from '/images/hammer.svg';

// Define the type for the props
interface FavoritesProps {
  onClose: () => void; // onClose is a function that takes no arguments and returns void
}

const Favorites: React.FC<FavoritesProps> = ({ onClose }) => {
  return (
    <div className={styles.div}>
      <div className={styles.ul}>
        <span className={styles.circle} onClick={onClose}>
          <p className={styles.p}>X</p>
        </span>
        <span className={styles.circle}>
          <p className={styles.p}>—</p>
        </span>
        <span className={styles.circle}></span>
      </div>
      <div className={styles.secondDiv}>
        <p>Favoriler</p>
        <div className={styles.listItems}>
          <Image
            src={airdrop}
            alt='airdrop'
            width={30}
            height={30}
            className={styles.image}
          />
          <p>AirDrop</p>
        </div>
        <div className={styles.listItems}>
          <Image
            src={time}
            alt='time'
            width={30}
            height={30}
            className={styles.image}
          />
          <p>Son Kullanılanlar</p>
        </div>
        <div className={styles.listItems}>
          <Image
            src={app}
            alt='app'
            width={30}
            height={30}
            className={styles.image}
          />
          <p>App Store</p>
        </div>
        <div className={`${styles.listItems} ${styles.developer}`}>
          <Image
            src={hammer}
            alt='hammer'
            width={30}
            height={30}
            className={styles.image}
          />
          <p>Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
