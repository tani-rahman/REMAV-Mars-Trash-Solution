import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthContext";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-success text-4xl"></span>
      </div>
    );
  }

  if (!user) {
    Swal.fire({
      icon: "warning",
      title: "Oops!",
      text: "You must log in to access this page.",
    });
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;