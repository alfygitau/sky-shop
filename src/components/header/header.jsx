import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { BsCart4 } from "react-icons/bs";
import { FiLogIn } from 'react-icons/fi';
import { FiUserPlus } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <h1>SKY</h1>
        </Link>
      </div>
      <div className="header-links">
        <ul className="links">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/services">services</a>
          </li>
        </ul>
      </div>
      <div className="header-links">
        <ul className="links">
          <li>
            <Link to="/login">
              <button type="submit" className="btn btn-primary mr-4">
                Login | <FiLogIn/>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <button type="submit" className="btn btn-primary mr-4">
                Register | <FiUserPlus/>
              </button>
            </Link>
          </li>
          <li>
              <Link to='/cart'>
            <span>
              <BsCart4 className="cart" />
            </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
