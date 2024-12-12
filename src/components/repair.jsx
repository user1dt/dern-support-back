import React, { useState } from "react";
import "./repair.css";
import { GrHostMaintenance } from "react-icons/gr";
import axios from "axios";

const RepairForm = () => {
  
  const [description, setDescription] = useState("");
  const [device, setDevice] = useState("");
  // const [image, setImage] = useState(null);
  const [serial, setSerial] = useState("");
  const [issue, setIssue] = useState("");
  // const [selectedFiles, setSelectedFiles] = useState([]);
  

  const getToken  = localStorage.getItem('Acesstoken');
  const handleSubmit = async (e) => {
    e.preventDefault();
    
     try {
      const response = await axios.post(
        "http://localhost:3000/repair", { device, serial, issue, description },{
          headers:{
            Authorization:`Bearer ${getToken} `
          }
        }
      )
      console.log("Repair request submitted successfully:", response.data);

      setDevice("");
      setIssue("");
      setSerial("");
      setDescription("");
      // setImage(null);
      // setSelectedFiles([]);
    } catch (error) {
      console.error("Error submitting repair request:", error);
      
    }
  };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setImage(file);
  //   setSelectedFiles(Array.from(event.target.files));
  // }
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
              value={device}
              onChange={(e) => setDevice(e.target.value)}
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
              value={serial}
              onChange={(e) => setSerial(e.target.value)}
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
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
            ></input>
          </div>

          <div>
            <label>Description</label>
            <textarea
              className="repair-textarea"
              placeholder="Leave a message... Example: I need the Dell vostro 3300 repaired. Require an upgrade. Add SSD, 4gb RAM and install latetst windows."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          {/* <div>
            <label for="upload">Upload Picture </label>{" "}
          </div>
          <div>
            <input className="repair-input" type="file" onChange={handleFileChange}></input>
          </div> */}
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
