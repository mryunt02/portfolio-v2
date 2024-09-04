import React from 'react';
import Image from 'next/image';
import mail from '/images/mail.png';
import styles from './mydoc.module.css';

// Define the type for the props
interface MyOtherDocumentProps {
  onClick: () => void;
}

const MyOtherDocument: React.FC<MyOtherDocumentProps> = ({ onClick }) => {
  return (
    <div className={styles.mainDiv}>
      <Image
        src={mail}
        alt='mail'
        width={90}
        height={90}
        onClick={onClick}
        style={{ cursor: 'pointer' }} // Optional: add cursor pointer style
      />
      <p style={{ marginLeft: '30px' }}>mail</p>
    </div>
  );
};

export default MyOtherDocument;
