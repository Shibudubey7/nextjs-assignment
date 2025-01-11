import { productData } from ".";

export default function handler(req, res) {
  const { slug } = req.query;

  const product = productData.find((p) => p.id === Number(slug));

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
}
