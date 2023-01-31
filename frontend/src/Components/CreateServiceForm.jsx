import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
            type="text"
            value={name}
            onChange={handleNameChange}
            name="name"
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            name="description"
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default ServiceForm;
