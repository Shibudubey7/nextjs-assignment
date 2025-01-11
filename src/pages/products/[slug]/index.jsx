import React from "react";
import styles from "@/styles/ProductDetails.module.css";
import Image from "next/image";
import Head from "next/head";

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`
  );
  const products = await res.json();

  const paths = products.data?.map((product) => ({
    params: { slug: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/products/${params.slug}`);
  const product = await res.json();
  return { props: { product } };
}
const ProductDetails = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.metaTitle}</title>
        <meta name="description" content={product.metaDescription} />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.productDetails}>
            <div className={styles.productImage}>
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
              />
            </div>
            <div className={styles.productInfo}>
              <h1>{product.name}</h1>
              <p className={styles.category}>Category: {product.category}</p>
              <p className={styles.price}>₹{product.price.toFixed(2)}</p>
              <p className={styles.description}>{product.description}</p>
              {/* <button className={styles.addToCartButton} disabled={true}>
                Add to Cart
              </button> */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProductDetails;
