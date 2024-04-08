import React from "react";

const AssetDetailsModal = ({ asset, onClose }) => {
  const handleClose = () => {
    onClose(); // Call the onClose function provided by the parent component
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Asset Details</h2>
        <div className="asset-detail">
          <p><strong>Serial Number:</strong> {asset.serialNumber}</p>
          <p><strong>Brand:</strong> {asset.brand}</p>
          <p><strong>In Use:</strong> {asset.inUse ? "Yes" : "No"}</p>
          <p><strong>Brand:</strong> {asset.brand}</p>
          <p><strong>Model:</strong> {asset.model}</p>
          <p><strong>Processor:</strong> {asset.processor}</p>
          <p><strong>RAM:</strong> {asset.ram}</p>
          <p><strong>Storage:</strong> {asset.storage}</p>
          <p><strong>Date Pruchased:</strong> {asset.datePurchased}</p>
          <p><strong>Current Owner:</strong> {asset.currentOwner}</p>
          <p><strong>Company:</strong> {asset.company}</p>
          <p><strong>Department:</strong> {asset.department}</p>
          <p><strong>Date Issued:</strong> {asset.dateIssued}</p>
          <p><strong>Accounts:</strong> {asset.accounts}</p>
          <p><strong>Notes:</strong> {asset.notes}</p>
          <p><strong>Remarks:</strong> {asset.remarks}</p>
        </div>
      </div>
    </div>
  );
};

export default AssetDetailsModal;
