import React from "react";
// Import Link from react-router-dom if you're using React Router for navigation
import { Link } from "react-router-dom";
import { CCircle } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className="footer mt-auto py-3 bg-dark">
      <div className="text-center">
        <div>
          <Link to="/construction" className="text-light">
            About
          </Link>
          <Link
            to="/construction"
            className="text-light"
            style={{
              marginLeft: "10px",
            }}
          >
            Contact
          </Link>
          <Link
            to="/construction"
            className="text-light"
            style={{
              marginLeft: "10px",
            }}
          >
            FAQ
          </Link>
        </div>
        <CCircle className="text-light" />
      </div>
    </div>
  );
};

export default Footer;
