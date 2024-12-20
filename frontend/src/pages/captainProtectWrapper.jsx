import axios from "axios";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { captain, setCaptain, isLoading, setLoading } =
    useContext(CaptainDataContext);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
      return;
    }

    const fetchData = async () => {
      try {
        const apiUrl = "http://localhost:4000/captains/profile";
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setCaptain(response.data);
          console.log(response.data);
          console.log("data fetch successfully");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching captain data:", error);
        localStorage.removeItem("token");
        navigate("/captain-login");
      }
    };

    fetchData();
  }, [token, navigate, setCaptain, setLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

CaptainProtectWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CaptainProtectWrapper;
