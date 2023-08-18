import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   createRoutesFromElements,
//   Route,
// } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductPage from "./pages/ProductPage";

// const routeDefination = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefination);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
