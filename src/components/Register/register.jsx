import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="register-container">
      <h5>New User ? Create an Account</h5>
      <br />
      <form noValidate>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            noValidate
            id="firstname"
            type="firstname"
            name="firstname"
            placeholder="First Name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            noValidate
            id="lastname"
            type="lastname"
            name="lastname"
            placeholder="Last Name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            noValidate
            id="username"
            type="username"
            name="username"
            placeholder="Username"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email1">Email Address</label>
          <input
            noValidate
            id="email1"
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password1">Password</label>
          <input
            noValidate
            id="passsword1"
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword1">Confirm Password</label>
          <input
            noValidate
            id="confirmpasssword1"
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary mr-4">
          Register | <i className="fas fa-user-plus"></i>
        </button>
      </form>
    </div>
  );
};

export default Register;
