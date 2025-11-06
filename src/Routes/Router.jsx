import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";
import UpdateCoffeeDetails from "../Pages/UpdateCoffeeDetails";
import AddNewCoffee from "../Pages/AddNewCoffee";
import Error_404 from "../Error/Error_404";
import Loading from "../Loader/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error_404 />,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/productDetails/:id",
        hydrateFallbackElement: <Loading />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-espresso-emporium-server-1yc0.onrender.com/productDetails/${params.id}`
          ),
        element: <ProductDetails />,
      },
      {
        path: "/updateCoffeeDetails/:productId",
        element: <UpdateCoffeeDetails />,
        hydrateFallbackElement: <Loading />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-espresso-emporium-server-1yc0.onrender.com/updateCoffeeDetails/${params.productId}`
          ),
      },
      {
        path: "/addNewCoffee",
        element: <AddNewCoffee />,
      },
    ],
  },
]);

export default router;
