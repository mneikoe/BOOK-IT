//import { UserDataContext } from "../context/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// This is a higher order component (HOC)
const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token"); // Here we will use the token to check if a user is existing or not
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  if (!token) {
    // Optionally, you could return a loading spinner or message here
    return null;
  }

  return <>{children}</>;
};

UserProtectedWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProtectedWrapper;
