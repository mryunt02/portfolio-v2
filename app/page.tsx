'use client';
import Image from 'next/image';
import styles from './page.module.css';
import bg from '/images/bg.png';
import Folder from '../components/Folder';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFolderClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div style={{ backgroundImage: `url(${bg.src})` }} className={styles.main}>
      <Folder onClick={handleFolderClick} />
      <Footer />
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}
