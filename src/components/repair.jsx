import React, { useState } from "react";
import "./repair.css";
import { GrHostMaintenance } from "react-icons/gr";

const RepairForm = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) {
      alert("Please enter a description");
    } else {
      console.log("Quotation requested:", message);
    }
  };

  return (
    <>
      <div className="repair-form">
        <h2>
          Repair Job Details <GrHostMaintenance />
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label for="device-model">Device Model </label>{" "}
          </div>
          <div>
            <input
              className="repair-input"
              type="text"
              placeholder="  Dell vostro 3300"
              required
            ></input>
          </div>
          <div>
            <label for="serial-number">Serial-number </label>{" "}
          </div>
          <div>
            <input
              className="repair-input"
              type="text"
              placeholder="  A12345"
              required
            ></input>
          </div>
          <div>
            <label for="issue">Issue type</label>{" "}
          </div>
          <div>
            <input
              className="repair-input"
              type="text"
              placeholder="  Hardwre issue, software issue"
            ></input>
          </div>

          <div>
            <label>Description</label>
            <textarea
              className="repair-textarea"
              placeholder="Leave a message... Example: I need the Dell vostro 3300 repaired. Require an upgrade. Add SSD, 4gb RAM and install latetst windows."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <label for="upload">Upload Picture </label>{" "}
          </div>
          <div>
            <input className="repair-input" type="file"></input>
          </div>
          <button className="buttons" type="submit">
            Submit
          </button>
          {/* {!message && <p className="error">Please enter a description</p>} */}
        </form>
      </div>
    </>
  );
};

export default RepairForm;
