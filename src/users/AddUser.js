import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;
  
  //e.target.name here name is the name of the field; name="name" name="username" name="email"
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();//prevents the appearing of value in the url
   await axios.post("http://localhost:8080/user", user);
   navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded mt-2 p-4 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="name" className="from-label">
              Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="from-label">
              Username
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="from-label">
              Email Address
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your email address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
          <Link className="btn btn-danger mx-2" to="/">
            Cancel
          </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
