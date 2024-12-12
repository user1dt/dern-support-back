import "./registerko.css";
import Navbar from "../components/navbar/navbar"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] =useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone]= useState("")
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/user/register', {name, email, phone, password});
    console.log("Registration successful:", response.data);
    localStorage.setItem("token", response.data.accessToken);
    navigate("/login");
      
      
    } catch (err) {
      console.error("Registration error:", err.response?.data || err.message);
      setError(
        err.response.data.msg || "An error occurred during registration"
      );
    }
  }
  return (
    <>
    <Navbar/>
      <div className="main">
        <div className="register">
          <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <div>
              <label for="Name">Name: </label>{" "}
            </div>
            <div>
              <input
                className="inputbox"
                type="text"
                placeholder="Name"
                name="Name"
                id="name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                required
              ></input>
            </div>

           
            <div>
              <label for="email">E-mail Address</label>
            </div>
            <div>
              <input
                className="inputbox"
                type="email"
                placeholder="E-mail"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label for="phone"> Phone no. </label>{" "}
            </div>
            <div>
              <input
                className="inputbox"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label for="password">Password </label>{" "}
            </div>
            <div>
              <input
                className="inputbox"
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
            </div>
           
            
            <div>
              <button type="submit" className="button">Register</button>
            </div>
            <div>
              <span>Have an account?</span>
              <a href="/login">Sign in</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
