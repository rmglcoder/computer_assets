import React, { useState } from 'react';
import '../css/Dashboard.css';
import '../css/Modal.css';
import Modal from '../components/Modal';

function Card({ title, description, imageUrl, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

function CardContainer() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="card-container">
        <Card
          title="CREATE"
          description="Add information for the asset."
          imageUrl={require("../img/create.png")}
          onClick={openModal}
        />
        <Card
          title="EMPLOYEES"
          description="List of employees with computer assets"
          imageUrl={require("../img/employee.png")}
        />
        <Card
          title="INVENTORY"
          description="List of inventory of computer assets"
          imageUrl={require("../img/inventory.png")}
        />
        <Card
          title="Card 3"
          description="This is the description for Card 3."
          imageUrl="https://example.com/image3.jpg"
          onClick={openModal} // Added onClick handler to open modal
        />
      </div>
      {/* Render the Modal component with isOpen and onClose props */}
      <Modal isOpen={showModal} onClose={closeModal} />
    </div>
  );
}

export default CardContainer;
