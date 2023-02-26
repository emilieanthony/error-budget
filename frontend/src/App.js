import "./App.css";
import Service from "./Components/Service/Service";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./Components/ThemeProvider";
import { useNavigate } from "react-router-dom";
import Button from "./Components/Button/Button";
import Header from "./Components/Header/Header";

function App() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await getServices();
      if (!error) {
        setServices(data);
      } else {
        setError(error);
      }
    };
    fetchData();
  }, []);

  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleNewServiceClick = () => {
    navigate(`/services/new`);
  };

  return (
    <div className="App theme">
      <Header className="header">
        <nav className="navbar">
          <a href="/" className="logo">
            My Site
          </a>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </Header>
      <Button onClick={handleNewServiceClick} variant="primary">
        Add service
      </Button>
      <Button onClick={toggleTheme} variant="secondary">
        Toggle Theme
      </Button>
      <div className="service-overview">
      {services.map((service) => (
        <Service
          displayName={service.displayName}
          description={service.description}
          goLiveTimestamp={service.go_live_ts}
          id={service.id}
          key={service.id}
        />
      ))}
      </div>
      {error && (
        <p>Error - could not return services - have you started the backend?</p>
      )}
    </div>
  );
}

const getServices = async () => {
  try {
    const response = await fetch("http://localhost:8081/services");
    const data = await response.json();
    return {
      data: data,
      error: undefined,
    };
  } catch (error) {
    console.log(error);
    return {
      error: error,
      data: undefined,
    };
  }
};

export default App;
