import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../pages/Home/Home";
import category from "../pages/Categories/category";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AboutSection from "../pages/About/About";
import Team from "../pages/Team/Team";
import Footer from "../pages/Footer/Footer";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [{
        index: true,
        Component: Home
    },
    {
      path: "/about",
      Component: AboutSection
    },
    {
      path: "/team",
      Component: Team
    },
    {
      path: "/footer",
      Component: Footer
    },
    {
      path: "/category/:categories",
      Component: category
    },
    {
      path: "/register",
      Component: Register
    },
    {
      path: "/login",
      Component: Login
    }
  ]
  },
]);