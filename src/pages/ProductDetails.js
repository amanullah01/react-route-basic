import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <>
      <h1>Product details page for {params.productId}</h1>
    </>
  );
};
export default ProductDetails;
