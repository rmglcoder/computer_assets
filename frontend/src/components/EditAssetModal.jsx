import React, { useState } from "react";
import Modal from "./Modal";
import '../css/AssetCard.css'

const EditAssetModal = ({ asset, onClose, onUpdate }) => {
  const [editedAsset, setEditedAsset] = useState({ ...asset });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedAsset((prevAsset) => ({
      ...prevAsset,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    onUpdate(editedAsset);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <h2>Edit Asset</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Serial Number:</label>
          <input
            type="text"
            name="serialNumber"
            value={editedAsset.serialNumber}
            onChange={handleChange}
          />
        </div>
        {/* Add input fields for other asset details */}
        <button type="submit">Update</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </Modal>
  );
};

export default EditAssetModal;
