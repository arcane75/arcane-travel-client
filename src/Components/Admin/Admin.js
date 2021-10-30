import React, { useState } from 'react';
import AddPackage from '../AddPackage/AddPackage';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import './Admin.css';
const Admin = () => {
    const [control, setControl] = useState("addPackage");

    return (
        <div className="admin-container">
        <div className="dashboard">
          <div className="admin-box">
            <div className="row admin-container">
              <div className="col-md-3 ">
                <div className="admin-area p-1">
                  <h6>Dashboard</h6>
                  <div className="all-menu mt-5">
                    <li
                      onClick={() => setControl("addPackage")}
                      className="admin-menu p-2"
                    >
                      Add Package
                    </li>
                    <li
                      onClick={() => setControl("manageAllOrder")}
                      className="admin-menu p-2"
                    >
                      Manage all Order
                    </li>
                  </div>
                </div>
              </div>
              <div className="col-md-9 text-center">
                {control === "addPackage" && <AddPackage></AddPackage>}
                {control === "manageAllOrder" && <ManageAllOrder></ManageAllOrder>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Admin;