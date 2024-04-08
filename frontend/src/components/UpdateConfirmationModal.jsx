import React from "react";

const UpdateConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
    return (
        <div className={`modal ${isOpen ? 'is-open' : ''}`}>
            <div className="modal-content">
                <h2>Confirm Update</h2>
                <p>Are you sure you want to update this asset?</p>
                <div className="modal-actions">
                    <button onClick={onConfirm}>Update</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateConfirmationModal;
