import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { createCategory } from "./helper/adminapicall";

const AddCategory = () => {
  const [name, setname] = useState("");
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const handleChange = (event) => {
    seterror("");
    setname(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    seterror("");
    setsuccess(false);

    //Backend request fired
    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        seterror(true);
      } else {
        seterror("");
        setsuccess(true);
        setname("");
      }
    });
  };

  const successMessage = () => {
    if (success) {
      return (
        <div className="alert alert-success text-center">
          <button type="button" class="close" data-dismiss="alert">
            &times;
          </button>
          <h4>Category created successfully</h4>
        </div>
      );
    }
  };

  const warningMessage = () => {
    return (
      <div className="alert alert-danger text-center">
        <button type="button" class="close" data-dismiss="alert">
          &times;
        </button>
        <h4>Failed!</h4>
      </div>
    );
  };

  const myCategoryForm = () => {
    return (
      <div className="form-group card shadow p-4">
        <p className="lead">Enter the category</p>
        <input
          type="text"
          className="form-control my-3 shadow"
          onChange={handleChange}
          value={name}
          autoFocus
          required
          placeholder="For ex:Summer"
        />
        <button onClick={onSubmit} className="btn btn-outline-info">
          create category
        </button>
      </div>
    );
  };

  return (
    <Base
      title="Create a category here"
      description="Add a category for new T-shirt"
      className="container bg-white p-4"
    >
      <Link to="/admin/dashboard" className="btn btn-sm btn-info mb-3 px-3">
        <i class="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </Link>
      <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {warningMessage()}
          {myCategoryForm()}
        </div>
      </div>
    </Base>
  );
};
export default AddCategory;
