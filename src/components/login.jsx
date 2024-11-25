import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";
import { MdEmail } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Navbar from "./navbar/navbar";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [inputType, setInputType] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e)=> {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/user/login', {  email, password });
      console.log("Login successful:", response.data);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard"); 
   
    } catch (error) {
      setError(error.response.data.msg || 'An error occurred during login');
    }
  } 

  return (
    <>
    <Navbar/>
    <div className="main">
        <div className="signUpBox">
    <h3 className="head">Sign in</h3>
      <form onSubmit={handleSubmit}>
          <div className="input">
            <MdEmail className="icon" />
            <input
              type="text"
              className="input-field"
              placeholder="Enter your email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required              
              />
          </div>

          <div className="input">
            <FaLock className="icon" />
            <input
              type={inputType ? "text" : "password"}
              className="input-field"
              placeholder="Enter Password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              ></input>
            <button type="submit" className="eye-icon" onClick={() => setInputType(!inputType)}>
              {inputType ? <IoEye /> : <FaEyeSlash />}
            </button>
          </div>

          <a href="">Forgrt Password?</a>

          <button type="submit" className="but">Login</button>

          <div>
            <span>Don't have an account? </span>
            <a href="/register">Create account here</a>
          </div>
      </form>
        </div>
              </div>
    </>
  );
}
export default Login;
