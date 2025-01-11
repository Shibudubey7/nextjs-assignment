export const productData = [
  {
    id: 1,
    name: "Product A",
    description:
      "A premium quality product that offers excellent performance and durability.",
    price: 8200,
    category: "Electronics",
    image:
      "https://cdn.pixabay.com/photo/2017/11/01/09/00/wireless-microphone-2907453_1280.png",
    metaTitle: "Buy Product A - Premium Electronics",
    metaDescription:
      "Discover Product A, a premium quality electronic product offering excellent performance and durability. Shop now for the best price!",
    keywords: ["electronics", "premium product", "durable electronics"],
  },
  {
    id: 2,
    name: "Product B",
    description: "A stylish and functional product perfect for daily use.",
    price: 12300,
    category: "Electronics",
    image:
      "https://cdn.pixabay.com/photo/2017/11/01/09/00/wireless-microphone-2907453_1280.png",
    metaTitle: "Product B - Stylish Accessories for Daily Use",
    metaDescription:
      "Product B is a stylish and functional accessory perfect for daily use. Add elegance and convenience to your routine.",
    keywords: ["accessories", "stylish product", "daily use accessories"],
  },
  {
    id: 3,
    name: "Product C",
    description:
      "An affordable product with great features and value for money.",
    price: 4100,
    category: "Electronics",
    image:
      "https://cdn.pixabay.com/photo/2017/11/01/09/00/wireless-microphone-2907453_1280.png",
    metaTitle: "Affordable Product C - Home & Kitchen",
    metaDescription:
      "Product C is an affordable home & kitchen product with great features and excellent value for money. Get yours today!",
    keywords: ["home & kitchen", "affordable", "value for money"],
  },
  {
    id: 4,
    name: "Product D",
    description:
      "A top-of-the-line product designed for professionals who demand the best.",
    price: 16400,
    category: "Electronics",
    image:
      "https://cdn.pixabay.com/photo/2017/11/01/09/00/wireless-microphone-2907453_1280.png",
    metaTitle: "Product D - Top Sports Gear for Professionals",
    metaDescription:
      "Product D is a top-of-the-line sports product designed for professionals. Unmatched performance and durability.",
    keywords: ["sports", "professional gear", "durable"],
  },
];

export default function handler(req, res) {
  if (!productData) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.status(200).json({ data: productData, success: true });
}
