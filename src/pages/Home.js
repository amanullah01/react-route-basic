import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <h1>Hello Home Page</h1>
      <p>
        <Link to="/product">Go to product page</Link>
      </p>
    </>
  );
};

export default HomePage;
