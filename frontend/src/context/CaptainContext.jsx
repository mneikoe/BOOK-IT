import PropTypes from "prop-types";
import { createContext, useState } from "react";

// Create the context
export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };
  const value = {
    captain,
    setCaptain,
    isLoading,
    setLoading,
    error,
    setError,
    updateCaptain,
  };

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};
CaptainContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CaptainContext;
