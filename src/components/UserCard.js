import React, { useState } from "react";
import Modal from "./Modal";
import ModalContent from "./ModalContent";

function UserCard({ name, image, phone, email, website, username, index, rest }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const buildHandleEnterKeyPress = (onClick) => ({ key }) => {
    if (key === 'Enter') { 
      onClick(); 
    }
  };
  const usersList = (
    <div className="card" onClick={toggleModal} tabIndex={index} onKeyPress={ buildHandleEnterKeyPress(toggleModal) }>
      <div className="card-img-container">
        <img src={image} className="card-img" />
      </div>
      <div className="card-info-container">
        <h3 id="name" className="card-name cap">
          {name}
        </h3>
        <p className="card-text media">&#128231; {email}</p>
        <p className="card-text cap">&#9742;{phone}</p>
        <p className="card-text">&#9744; nickname:{username}</p>
        <p className="card-text media">&#128797; {website}</p>
      </div>

      <Modal show={isOpen} onClose={toggleModal}>
        <ModalContent data={rest} />
      </Modal>
    </div>
  );
  return (
    <div id="user-gallery" className="user-gallery">
      {usersList}
    </div>
  );
}

export default UserCard;
