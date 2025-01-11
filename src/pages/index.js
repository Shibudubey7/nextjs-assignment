import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="This is home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to Our Home Page</h1>
          <p className={styles.description}>
            Discover amazing products in our store!
          </p>
          <Link href="/products" className={styles.cta}>
            View Products
          </Link>
        </main>
      </div>
    </>
  );
}
