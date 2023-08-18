import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Product 1",
  },
  {
    id: "p2",
    title: "Product 2",
  },
  {
    id: "p3",
    title: "Product 3",
  },
  {
    id: "p4",
    title: "Product 4",
  },
];
const ProductPage = () => {
  return (
    <>
      <h1>Product Page</h1>
      <ul>
        {DUMMY_PRODUCTS.map((prod) => (
          <li>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductPage;
