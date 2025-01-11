import Head from "next/head";
import React, { useState } from "react";
import styles from "@/styles/Products.module.css";
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/products`);
  const products = await res.json();
  return { props: { products } };
}
const Products = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.data?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Product Page:Our Products</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Our Products</h1>
        <div className={styles.filters}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.productGrid}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={100}
              />
              <h2>{product.name}</h2>
              <p>Category: {product.category}</p>
              <p>Price: ₹{product.price.toFixed(2)}</p>
              <Link
                href={`/products/${product.id}`}
                className={styles.viewButton}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Products;
