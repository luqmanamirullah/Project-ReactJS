import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Missing = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, [navigate]);

  return (
    <main>
      <h1>404 NotFound Page</h1>
    </main>
  );
};

export default Missing;
