import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { createCategory, getCategories, updateCategory } from "./helper/adminapicall";

const UpdateCategory = ({ match }) => {
  const [name, setname] = useState("");
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const handleChange = (event) => {
    seterror("");
    setname(event.target.value);
  };

  useEffect(() => {
    preload(match.params.categoryId);
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    seterror("");
    setsuccess(false);
    setname({ ...name, error: "", loading: true });

    //Backend request fired
    updateCategory(match.params.categoryId, user._id, token, { name }).then(
      (data) => {
        if (data.error) {
          seterror(true);
        } else {
          seterror("");
          setsuccess(true);
          setname("");
        }
      }
    );
  };

  const preload = (categoryId) => {
    getCategories(categoryId).then((data) => {
      if (data.error) {
        setname({ ...name, error: data.error });
      } else {
        setname({
          ...name,
          name: data.name,
        });
      }
    });
  };

  const successMessage = () => {
    if (success) {
      return (
        <div className="alert alert-success text-center">
          <h4>Category created successfully</h4>
        </div>
      );
    }
  };

  const warningMessage = () => {
    return (
      <div className="alert alert-danger text-center">
        <h4>Failed!</h4>
      </div>
    );
  };

  const myCategoryForm = () => {
    return (
      <div className="form-group">
        <p className="lead">Enter the category</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange}
          value={name}
          autoFocus
          required
          placeholder="For ex:Summer"
        />
        <button onClick={onSubmit} className="btn btn-outline-info">
          Update category
        </button>
      </div>
    );
  };

  return (
    <Base
      title="Update category here"
      description="Add a category for new T-shirt"
      className="container bg-white p-4"
    >
      <Link to="/admin/dashboard" className="btn btn-sm btn-info mb-3">
        Admin Home
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
export default UpdateCategory;
