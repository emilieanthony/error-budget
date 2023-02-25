import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button/Button";
import "./CreateServiceForm.css";

function ServiceForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch("http://localhost:8081/services", {
      method: "POST",
      body: JSON.stringify({
        displayName: name,
        description: description,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name of service:
          <input
            className="input-field"
            type="text"
            value={name}
            onChange={handleNameChange}
            name="name"
            placeholder="My first API"
          />
        </label>
        <label>
          Description:
          <input
            className="input-field"
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            name="description"
            placeholder="An API for setting protocols, routines, and tools for building software applications."
          />
        </label>
        <Button type="submit" variant="primary">
          Save
        </Button>
      </form>
    </div>
  );
}

export default ServiceForm;
