import React, { useState } from "react";
import { PersonCircle } from "react-bootstrap-icons";
import { Dropdown } from "react-bootstrap";
import ConfirmModal from "./ConfirmModal";

const Header = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleSignOut = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmSignOut = () => {
    setShowConfirmModal(false);
  };

  return (
    <nav class="navbar fixed-top navbar-light bg-dark">
      <Dropdown
        className="d-inline mx-2 col d-flex justify-content-end"
        autoClose="outside"
      >
        <Dropdown.Toggle as="a" bsPrefix="p-0" id="dropdown-autoclose-outside">
          <h2>
            <PersonCircle />
          </h2>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/construction">Profile</Dropdown.Item>
          <Dropdown.Item href="/construction">Preferences</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <ConfirmModal
        show={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={() => handleConfirmSignOut()}
        message="This is the sign out confirm modal. Neither option will sign you out, as login/logout functionality has not been set up for this application."
      />
    </nav>
  );
};

export default Header;
