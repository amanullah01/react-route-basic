import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <>
      <h1>Product details page for {params.productId}</h1>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
};
export default ProductDetails;
