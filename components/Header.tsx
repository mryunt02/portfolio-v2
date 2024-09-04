import Image from 'next/image';
import styles from './header.module.css';
import logo from '/images/logo.png';
import bluetooth from '/images/bluetooth.png';
import charge from '/images/low-battery.png';
import wifi from '/images/wi-fi.png';
import moment from 'moment-timezone';
import 'moment/locale/tr';

const Header: React.FC = () => {
  moment.locale('tr');
  const day = moment().tz('Europe/Istanbul').format('ddd');
  const dateString = moment().tz('Europe/Istanbul').format('DD MMMM, HH:mm');

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.ul}>
          <li>
            <Image src={logo} width={15} height={18} alt='logo' />
          </li>
          <li>Dosya</li>
        </ul>
        <ul className={styles.ul}>
          <li>
            <Image src={bluetooth} width={20} height={18} alt='bt' />
          </li>
          <li>
            <Image
              src={charge}
              width={27}
              height={20}
              alt='charge'
              style={{ marginTop: '2px' }}
            />
          </li>
          <li>
            <Image src={wifi} width={20} height={20} alt='wifi' />
          </li>
          <li>{dateString}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
