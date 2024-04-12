import React from "react";
import logo from "./images/logo4.png";
import { Link } from "react-router-dom";
import { House, Journal } from "react-bootstrap-icons";

const Sidebar = () => {
  return (
    <ul class="nav flex-column vh-100" style={{ backgroundColor: "#F3F3F3" }}>
      <img
        src={logo}
        alt="Logo"
        style={{ width: "250px", height: "auto", paddingTop: "60px" }}
      />
      <br />
      <h6>
        &nbsp;&nbsp;
        <House />
        &nbsp;Home
      </h6>
      <li class="nav-item">
        <Link class="nav-link active" to="/">
          &nbsp;&nbsp;Home
        </Link>
      </li>
      <br />
      <h6>
        &nbsp;&nbsp;
        <Journal />
        &nbsp;Get Started
      </h6>
      <li class="nav-item">
        <Link class="nav-link active" to="/high-level-vision">
          &nbsp;&nbsp;Craft Your Vision
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active" to="/year-view">
          &nbsp;&nbsp;Track Your Goals
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
