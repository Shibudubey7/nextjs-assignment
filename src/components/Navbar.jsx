import React, { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">MyStore</Link>
      </div>
      <div
        className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
