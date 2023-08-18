import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
    <>
      <h1>Product Page</h1>
      <ul>
        <Link to="/products/1">Product 1</Link>
        <Link to="/products/2">Product 2</Link>
        <Link to="/products/3">Product 3</Link>
        <Link to="/products/4">Product 4</Link>
        <Link to="/products/5">Product 5</Link>
      </ul>
    </>
  );
};

export default ProductPage;
