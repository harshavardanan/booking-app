import React, { useState } from "react";
import axios from "axios";
import "./AddVehicle.css";

export default function AddVehicle() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [wheels, setWheels] = useState("");

  const url = "http://localhost:5000/vehicles";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!brand || !model || !wheels) {
      alert("Enter all fields");
    } else {
      axios.post(url, { brand, model, wheels });
      alert("Successfully submitted Data");
    }
  };
  return (
    <div className="outercontainer">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Add New Vehicle</h2>
          <label>Vehicle Brand</label>
          <br />
          <input
            className="text-input"
            placeholder="example: Audi"
            onChange={(e) => setBrand(e.target.value)}
          />
          <br />
          <label>Model</label>
          <br />
          <input
            className="text-input"
            placeholder="example: A6"
            onChange={(e) => setModel(e.target.value)}
          />
          <br />
          <label>4 Wheeler :</label>
          <input
            type="radio"
            value={4}
            onChange={(e) => setWheels(e.target.value)}
          />
          <label>2 Wheeler :</label>
          <input
            type="radio"
            value={2}
            onChange={(e) => setWheels(e.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
