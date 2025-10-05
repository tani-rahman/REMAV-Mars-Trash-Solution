import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Category from "../pages/Categories/category";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AboutSection from "../pages/About/About";
import Team from "../pages/Team/Team";
import Footer from "../pages/Footer/Footer";
import TrashItem from "../pages/Trash/TrashItem";
import Solution from "../components/Solution";
import OurSolution from "../pages/OurSolution/OurSolution";
import Faqs from "../pages/FAQs/FAQs";
import PrivateRoute from "../provider/PrivateRoute";
import ErrorPage from "../components/ErrorPage";
import Contact from "../components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: AboutSection,
      },
      {
        path: "/team",
        Component: Team,
      },
      {
        path: "/footer",
        Component: Footer,
      },
      {
        path: "/category/:categories",
        Component: Category,
      },
      {
        path: "/trash",
        Component: TrashItem,
      },
      {
         path: "/solution",
          Component: () => (
             <PrivateRoute>
              <Solution />
             </PrivateRoute>
          ),
      },
      {
        path: "/resolve",
        Component: OurSolution,
      },
      {
        path: "/faqs",
        Component: Faqs,
      },
      {
        path: "/contact",
        Component : Contact
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
