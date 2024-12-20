import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const apiUrl = "http://localhost:4000/users/logout";

  useEffect(() => {
    if (token) {
      axios
        .get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.removeItem("token");
            navigate("/login");
          }
        })
        .catch((error) => {
          console.error("Logout failed:", error);
        });
    } else {
      navigate("/login"); // If there's no token, navigate to login
    }
  }, [token, navigate]);

  return <div>UserLogout</div>;
};

export default UserLogout;
