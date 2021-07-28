import React from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import Menu from "./Menu";


const Base = ({
  title = "My Title",
  description = "My desription",
  className = "bg-white text-dark p-4",
  children
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron text-dark text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer card-header border mt-auto py-3">
      <div className="container-fluid bg-info text-white text-center py-3">
        <h4>If you got any questions, feel free to reach out!</h4>
        <Link to="/contact" className="btn btn-outline-warning">Contact Us</Link>
      </div>
      <div className="container">
        <span className="text-muted">
          An Amazing <span className="text-dark">MERN</span> Bootcamp
        </span>
      </div>
    </footer>
  </div>
);

export default Base;
