import React, { useState } from "react";
import styles from "./Modal.module.css";
import Favorites from "./Favorites";
import LastUse from "./LastUse";
import MyDocument from "./MyDocument";
import Image from "next/image";
import vector from "/images/vector-intelligent-object-2.svg";
import three from "/images/three.png";
import Footer from "./Footer";
import CvModal from "./CvModal";
import FeedbackModal from "./FeedbackModal";
import MyOtherDocument from "./MyOtherDocument";

const Modal = ({ onClose }) => {
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const handleDocumentClick = () => {
    setIsNewModalOpen(true);
  };

  const handleCloseNewModal = () => {
    setIsNewModalOpen(false);
  };
  const handleCloseFeedbackModal = () => {
    setIsFeedbackModalOpen(false);
  };
  const handleFeedbackClick = () => {
    setIsFeedbackModalOpen(true);
  };

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.favorite}>
          <Favorites onClose={onClose} />
        </div>
        <div className={styles.second}>
          <div className={styles.lastuse}>
            <LastUse />
          </div>
          <div style={{ display: "flex" }}>
            <MyDocument onClick={handleDocumentClick} />
            <MyOtherDocument onClick={handleFeedbackClick} />
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles.header}>
          <div className={styles.firstDiv} onClick={onClose}>
            <Image
              src={vector}
              alt="vector"
              width={30}
              height={30}
              className={styles.vector}
            />
            <p style={{ alignSelf: "center" }}>Geri çık</p>
          </div>
          <p>Developer</p>
          <Image
            src={three}
            alt="vector"
            width={30}
            height={30}
            style={{
              alignSelf: "center",
              filter: "invert(1)",
              alignSelf: "center",
            }}
          />
        </div>
        <div style={{ display: "flex" }}>
          <MyDocument onClick={handleDocumentClick} />
          <MyOtherDocument onClick={handleFeedbackClick} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
      {isNewModalOpen && <CvModal onClose={handleCloseNewModal} />}
      {isFeedbackModalOpen && (
        <FeedbackModal onClose={handleCloseFeedbackModal} />
      )}
    </>
  );
};

export default Modal;
