import React from "react";

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
    return (
        <div className={`modal ${isOpen ? 'is-open' : ''}`}>
            <div className="modal-content">
                <h2>Confirm Deletion</h2>
                <p>Are you sure you want to delete this asset?</p>
                <div className="modal-actions">
                    <button onClick={onConfirm}>Delete</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;
