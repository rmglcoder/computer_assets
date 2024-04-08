import React, { useState, useEffect } from "react";
import { TrashIcon, PencilIcon, EyeIcon } from '@heroicons/react/outline';
import "../css/AssetCard.css";
import AssetDetailsModal from "./AssetDetailsModal";
import { useAssetContext } from '../hooks/useAssetContext';

const AssetCard = ({ asset, onClose }) => { 
  const { dispatch } = useAssetContext();
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedAsset, setEditedAsset] = useState({ ...asset });
  const [notification, setNotification] = useState("");
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    setEditedAsset({ ...asset });
  }, [asset]);

  const handleView = () => {
    setShowDetailsModal(true);
  };

  const handleCloseDetailsModal = () => {
    setShowDetailsModal(false);
  };

  const handleUpdate = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setNotification("");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "inUse" ? value === "Yes" : value;
    
    setEditedAsset(prevAsset => ({
      ...prevAsset,
      [name]: newValue
    }));
  };
  

  const handleSaveEdit = async (e) => {
    e.preventDefault();
  
    const inUseBoolean = editedAsset.inUse === "Yes";
  
    try {
      const response = await fetch(`/api/inventory/${editedAsset._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...editedAsset, inUse: inUseBoolean }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update the asset information.");
      }
  
      const updatedData = await response.json();
  
      // Update the edited asset directly in the component state
      setEditedAsset(prevAsset => ({
        ...prevAsset,
        ...updatedData // Merge updated fields with existing ones
      }));
  
      // Dispatch an action to update the asset globally
      dispatch({ type: 'UPDATE_ASSET', payload: { _id: editedAsset._id, updatedFields: updatedData } });
  
      setNotification("Asset updated successfully!");
      setShowEditModal(false);
  
      setTimeout(() => {
        setNotification("");
      }, 3000);
  
    } catch (error) {
      console.error("Error updating asset:", error);
    }
  };
  
  

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (passcode === 'delete') {
      try {
        const response = await fetch(`/api/inventory/${asset._id}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          throw new Error('Failed to delete the asset.');
        }
  
        dispatch({ type: 'DELETE_ASSET', payload: { _id: asset._id } });
        setShowDeleteModal(false); // Close the delete modal
      } catch (error) {
        console.error('Error deleting asset:', error);
      }
    } else {
      setPasscodeError('Incorrect passcode. Please try again.');
    }
  };


  return (
    <div className="asset-card">
      <div className="asset-detail serial">
        {asset.serialNumber}
      </div>
      <div className="asset-detail">
        <strong>Brand:</strong> {asset.brand}
      </div>
      <div className="asset-detail">
        <strong>In Use:</strong> {asset.inUse ? "Yes" : "No"}
      </div>
      <div className="button-group">
        <button onClick={handleView}><EyeIcon className="icon" /></button>
        <button onClick={handleUpdate}><PencilIcon className="icon" /></button>
        <button onClick={handleDelete}><TrashIcon className="icon" /></button>
      </div>
      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseEditModal}>&times;</span>
            <h2>Edit Asset</h2>
            <form onSubmit={handleSaveEdit}>
              <div className="form-group">
                <label>Serial Number:</label>
                <input
                  type="text"
                  name="serialNumber"
                  value={editedAsset.serialNumber}
                  onChange={handleChange}
                />
                <label>Brand:</label>
                <input
                  type="text"
                  name="brand"
                  value={editedAsset.brand}
                  onChange={handleChange}
                />
               <label>In Use:</label>
                <select
                  name="inUse"
                  value={editedAsset.inUse}
                  onChange={handleChange}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <label>Model:</label>
                <input
                  type="text"
                  name="model"
                  value={editedAsset.model}
                  onChange={handleChange}
                />
                <label>Processor:</label>
                <input
                  type="text"
                  name="processor"
                  value={editedAsset.processor}
                  onChange={handleChange}
                />
                <label>RAM:</label>
                <input
                  type="text"
                  name="ram"
                  value={editedAsset.ram}
                  onChange={handleChange}
                />
                <label>Storage:</label>
                <input
                  type="text"
                  name="storage"
                  value={editedAsset.storage}
                  onChange={handleChange}
                />
                <label>Date Purchased:</label>
                <input
                  type="date"
                  name="datePurchased"
                  value={editedAsset.datePurchased}
                  onChange={handleChange}
                />
                <label>Current Owner:</label>
                <input
                  type="text"
                  name="currentOwner"
                  value={editedAsset.currentOwner}
                  onChange={handleChange}
                />
                <label>Company:</label>
                <select
                  name="company"
                  value={editedAsset.company}
                  onChange={handleChange}
                >
                  <option value=""></option>
                  <option value="i-cube Digital Solutions">i-cube Digital Solutions</option>
                  <option value="EZY lifestyle">EZY lifestyle</option>
                  <option value="PROPER">PROPER</option>
                  <option value="APEX">APEX</option>
                </select>
                <label>Department:</label>
                <select
                  name="department"
                  value={editedAsset.department}
                  onChange={handleChange}
                >
                  <option value=""></option>
                  <option value="Accounting and Finance">Accounting and Finance</option>
                  <option value="HR">HR</option>
                  <option value="IT">IT</option>
                  <option value="Marketing & Sales">Marketing & Sales</option>
                </select>
                <label>Date Issued:</label>
                <input
                  type="date"
                  name="dateIssued"
                  value={editedAsset.dateIssued}
                  onChange={handleChange}
                />
                <label>Accounts:</label>
                <input
                  type="text"
                  name="accounts"
                  value={editedAsset.accounts}
                  onChange={handleChange}
                />
                <label>Notes:</label>
                <input
                  type="text"
                  name="notes"
                  value={editedAsset.notes}
                  onChange={handleChange}
                />
                <label>Remarks:</label>
                <input
                  type="text"
                  name="remarks"
                  value={editedAsset.remarks}
                  onChange={handleChange}
                />
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showDeleteModal && (
        <div className="modal">
          <div className="delete-content">
            <span className="close" onClick={() => setShowDeleteModal(false)}>&times;</span>
            <h2>Delete Asset</h2>
            <div className="passcode-input">
              <label>Enter Passcode:</label>
              <input className="delete-input" type="password" value={passcode} onChange={(e) => setPasscode(e.target.value)} />
              {passcodeError && <div className="passcode-error">{passcodeError}</div>}
            </div>
            <button className="delete-button" onClick={confirmDelete}>Confirm Delete</button>
          </div>
        </div>
      )}
      {notification && (
        <div className="notification success">
          {notification}
        </div>
      )}
      {showDetailsModal && (
        <AssetDetailsModal asset={editedAsset} onClose={handleCloseDetailsModal}/>
      )}
    </div>
  );
};

export default AssetCard;