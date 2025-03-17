import React from "react";
import styles from "../styles/components/Title.module.scss";
import { useUploadData } from "./utils/UploadData";

const ContactUsTitle: React.FC = () => {
  const { seo } = useUploadData();
  const {
    title: { backgroundText, foregroundText },
  } = seo!.component.contact;

  return (
    <div className={styles.headingContainer}>
      <span className={styles.backgroundText}>{backgroundText}</span>
      <h1 className={styles.foregroundText}>{foregroundText}</h1>
    </div>
  );
};

export default ContactUsTitle;
