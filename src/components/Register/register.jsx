import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerInitiate } from "../../redux/Actions/userActions";
import "./register.css";
import { toast } from "react-toastify";

const Register = () => {
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      registerInitiate(
        first_name,
        last_name,
        username,
        email,
        password,
        password_confirmation
      )
    );
    toast.success("Account registration successful");
  };

  return (
    <div className="register-container">
      <h5>New User ? Create an Account</h5>
      <br />
      <form noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            noValidate
            id="firstname"
            value={first_name}
            onChange={(e) => setFirstname(e.target.value)}
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
            value={last_name}
            onChange={(e) => setLastname(e.target.value)}
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            value={password_confirmation}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
