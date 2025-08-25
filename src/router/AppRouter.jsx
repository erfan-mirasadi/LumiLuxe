import { createBrowserRouter } from "react-router-dom";
// pages
import Home from "../pages/Home";
import Products from "../pages/Products";
import MainLayout from "../ui/MainLayout";
import ErrorPage from "../ui/ErrorPage";
import ContactUs from "../pages/ContactUs";

const basename = "/LumiLuxe/";
const appRouter = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/contact", element: <ContactUs /> },
    ],
  },
  { basename },
]);

export default appRouter;
