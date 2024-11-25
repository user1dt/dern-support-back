import Register from "./components/register";
import "./App.css";
import Login from "./components/login";
import { Routes, Route} from "react-router-dom";
import Dashboard from "./components/dashboard";
import Homepage from "./components/homepage/homepage";
import RepairForm from "./components/repair";
import Navbar from "./components/navbar/navbar";
import Adminpage from "./components/adminpage/adminpage";
// import Clientpage from "./components/clientpage/clientpage";

function App(){
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Homepage/>}></Route>
      <Route path = "/home" element = {<Homepage/>}></Route>
      <Route path = "/login" element = {<Login/>}></Route>
      <Route path = "/register" element = {<Register/>}></Route>
      <Route path = "/dashboard" element = {<Dashboard/>}></Route>
      {/* <Route path = "/repair" element = {<Clientpage/>}></Route> */}
      <Route path = "/admin" element = {<Adminpage/>}></Route>

    </Routes>
  
    </>
    
    


  )
}
export default App;






