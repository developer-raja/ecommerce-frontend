import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";

const AdminDashBoard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header text-dark">Admin Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/create/category" className="nav-link text-dark">
              Create categories
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/categories" className="nav-link text-dark">
              Manage categories
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/create/product" className="nav-link text-dark">
              Create Product
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/products" className="nav-link text-dark">
              Manage Products
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/orders" className="nav-link text-dark">
              Manage Orders
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">Admin Info</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge mr-2">Name:</span>
            {name}
          </li>
          <li className="list-group-item">
            <span className="badge mr-2">Email:</span>
            {email}
          </li>
          <li className="list-group-item">
            <span className="badge">Admin area</span>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Base
      title="Welcome to Admin"
      description="Manage all of your products here!"
      className="container bg-white card shadow p-4 mb-2"
    >
      <div className="row">
        <div className="col-md-3 col-sm-3">{adminLeftSide()}</div>
        <div className="col-md-9 col-sm-9">{adminRightSide()}</div>
      </div>
    </Base>
  );
};
export default AdminDashBoard;
