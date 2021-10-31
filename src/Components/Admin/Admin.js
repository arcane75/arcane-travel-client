import React, { useState } from 'react';
import AboutUs from '../AboutUs/AboutUs';
import AddPackage from '../AddPackage/AddPackage';
import ContactUs from '../ContactUs/ContactUs';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import './Admin.css';
const Admin = () => {
  const [control, setControl] = useState("addPackage");

  return (
    <div className="admin-container">

      <div className="row admin-container">
        <div className="col-md-3 ">
          <div className="admin-area p-1">
            <h1>Dashboard</h1>
            <div className="all-menu mt-5">
              <li
                onClick={() => setControl("addPackage")}
                className="admin-menu p-2"
              >
                <h3>Add Package </h3>
              </li>
              <li
                onClick={() => setControl("manageAllOrder")}
                className="admin-menu p-2"
              >
                <h3>Manage all Order</h3>
              </li>

              <li
                onClick={() => setControl("about")}
                className="admin-menu p-2"
              >
                <h3>About Us</h3>
              </li>

              <li
                onClick={() => setControl("contact")}
                className="admin-menu p-2"
              >
                <h3>Contact</h3>
              </li>
              
            </div>
          </div>
        </div>
        <div className="col-md-9 text-center">
          {control === "addPackage" && <AddPackage></AddPackage>}
          {control === "manageAllOrder" && <ManageAllOrder></ManageAllOrder>}
          {control === "about" && <AboutUs></AboutUs>}
          {control === "contact" && <ContactUs></ContactUs>}
        </div>
      </div>
    </div>
  );
};

export default Admin;