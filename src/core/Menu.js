import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles.css";
import { isAuthenticated, signout } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#3498DB" };
  } else {
    return { color: "#000000" };
  }
};

const Menu = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-white text-dark ">
      <li className="nav-item ">
        <Link style={currentTab(history, "/")} className="nav-link " to="/">
          <i class="fa fa-home" aria-hidden="true"></i> Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/cart")}
          className="nav-link"
          to="/cart"
        >
          <i class="fa fa-shopping-cart" aria-hidden="true"></i> cart
        </Link>
      </li>
      {isAuthenticated() && isAuthenticated().user.role === 0 && (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/user/dashboard")}
            className="nav-link"
            to="/user/dashboard"
          >
            <i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard
          </Link>
        </li>
      )}
      {isAuthenticated() && isAuthenticated().user.role === 1 && (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/admin/dashboard")}
            className="nav-link"
            to="/admin/dashboard"
          >
            <i class="fa fa-tachometer" aria-hidden="true"></i> AdminDashboard
          </Link>
        </li>
      )}
      {!isAuthenticated() && (
        <Fragment>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signup")}
              className="nav-link"
              to="/signup"
            >
              <i class="fa fa-user-plus" aria-hidden="true"></i> Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signin")}
              className="nav-link"
              to="/signin"
            >
              <i class="fa fa-sign-in" aria-hidden="true"></i> Sign In
            </Link>
          </li>
        </Fragment>
      )}
      {isAuthenticated() && (
        <li className="nav-item">
          <span
            className="nav-link text-secondary"
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            <i class="fa fa-sign-out" aria-hidden="true"></i> signout
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);
