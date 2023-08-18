import { Link, useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/product");
  };
  return (
    <>
      <h1>Hello Home Page</h1>
      <p>
        <Link to="/product">Go to product page</Link>
      </p>
      <button onClick={navigateHandler}>useNavigate</button>
    </>
  );
};

export default HomePage;
