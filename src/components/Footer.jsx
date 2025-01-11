import React from "react";
import styles from "@/styles/Home.module.css";
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
