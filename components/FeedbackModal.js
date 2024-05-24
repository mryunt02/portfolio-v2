"use client";
import React, { useState } from "react";
import styles from "./NewModal.module.css";
import Image from "next/image";
import closeIcon from "/images/vector-intelligent-object-2.svg";
import developer from "/images/hammer.svg";

const FeedbackModal = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setMessage("Mesajınız başarılı bir şekilde gönderildi...");
    } catch (error) {
      setMessage("Mesaj gönderilirken bir hata oluştu...");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.newModal}>
      <div className={styles.main}>
        <Image
          src={closeIcon}
          alt="close"
          width={30}
          height={30}
          onClick={onClose}
          style={{ cursor: "pointer", transform: "rotate(180deg)" }}
        />
        <div>
          <h1 className={styles.h1}>Bugrahan Yunt</h1>
          <p className={styles.p}>Software Engineer</p>
        </div>
        <Image src={developer} alt="developer" width={30} height={30} />
      </div>
      <div>
        <h2 style={{ borderBottom: "1px solid", width: "180px" }}>
          İletişim Formu
        </h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            İsim:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <br />
          <label htmlFor="email" className={styles.label}>
            E-posta:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <br />
          <label htmlFor="message" className={styles.label}>
            Mesaj:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.textarea}
          ></textarea>
          <br />
          <section>
            <button type="submit" className={styles.buttonload}>
              {isLoading ? (
                <i className="fa fa-circle-o-notch fa-spin">Gönderiliyor</i>
              ) : (
                "Gönder"
              )}
            </button>
          </section>
        </form>
        <p
          className={
            message === "Mesajınız başarılı bir şekilde gönderildi..."
              ? `${styles.success}`
              : `${styles.notsuccess}`
          }
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default FeedbackModal;
