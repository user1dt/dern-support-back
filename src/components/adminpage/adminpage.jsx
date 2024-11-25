import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar";
import "./adminpage.css"
import React from 'react'

function Adminpage  () {
  return (
    <>
    <Navbar/>
    <div className="admin-dash">

    
    <Sidebar/>

           <div class="requests-container">
            <div class="requests-header">
                <h2>Recent Requests</h2>
                
            </div>
            <table class="requests-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Issue</th>
                        <th>Description</th>
                        
                        {/* <th>Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#1234</td>
                        <td>John Doe</td>
                        <td>Laptop</td>
                        <td>Screen not working</td>
                        
                        
                        <td><button class="action-button button-Delete">Delete</button></td>
                    </tr>
                    <tr>
                        <td>#1235</td>
                        <td>Jane Smith</td>
                        <td>Desktop PC</td>
                        <td>Not booting</td>
                        
                        <td><button class="action-button button-Delete">Delete</button></td>
                    </tr>
                    <tr>
                        <td>#1236</td>
                        <td>Bob Johnson</td>
                        <td>Printer</td>
                        <td>Paper jam</td>
                        
                       
                        <td><button class="action-button button-Delete">Delete</button></td>
                    </tr>
                    <tr>
                        <td>#1237</td>
                        <td>Alice Brown</td>
                        <td>Smartphone</td>
                        <td>Battery issues</td>
                        
                        
                        <td><button class="action-button button-Delete">Delete</button></td>
                    </tr>
                    <tr>
                        <td>#1238</td>
                        <td>Charlie Wilson</td>
                        <td>Tablet</td>
                        <td>Charging port damaged</td>
                        
                        
                        <td><button class="action-button button-Delete">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    
    </>
  );
};

export default Adminpage
