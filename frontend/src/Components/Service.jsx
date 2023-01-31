import "./Service.css";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

function Service({ displayName, description, goLiveTimestamp, id }) {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleButtonClick = () => {
    navigate(`/services/${id}`);
  };

  return (
    <div className={`item-service-card-${theme}`}>
      <h2>{displayName}</h2>
      <p>{description}</p>
      <p>{goLiveTimestamp}</p> {/* TODO: print ISO*/}
      <button onClick={handleButtonClick}>View more</button>
    </div>
  );
}

export default Service;
