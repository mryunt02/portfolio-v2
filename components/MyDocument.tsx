import React from 'react';
import Image from 'next/image';
import pdfimage from '/images/pdf.png';
import styles from './mydoc.module.css';

// Define the type for the props
interface MyDocumentProps {
  onClick: () => void;
}

const MyDocument: React.FC<MyDocumentProps> = ({ onClick }) => {
  return (
    <div className={styles.mainDiv}>
      <Image
        src={pdfimage}
        alt='pdf'
        width={70}
        height={90}
        onClick={onClick}
        style={{ cursor: 'pointer' }} // Optional: add cursor pointer style
      />
      <p className={styles.p}>cv.pdf</p>
    </div>
  );
};

export default MyDocument;
