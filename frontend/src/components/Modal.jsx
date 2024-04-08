import React, { useState, useEffect } from 'react';
import { useAssetContext } from "../hooks/useAssetContext";
import '../css/Dashboard.css';
import '../css/Modal.css';

const Notification = ({ message }) => {
  return (
    <div className="notification success">
      {message}
    </div>
  );
};

const Modal = ({ isOpen, onClose }) => {
  const { dispatch } = useAssetContext();
  const initialFormData = {
    serialNumber: "",
    brand: "",
    inUse: "", // Keep this as an empty string initially
    model: "",
    processor: "",
    ram: "",
    storage: "",
    datePurchased: "",
    currentOwner: "",
    company: "",
    department: "",
    dateIssued: "",
    accounts: "",
    notes: "",
    remarks: ""
  };
  const [formData, setFormData] = useState({ ...initialFormData });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess("");
        onClose(); // Close modal on success
      }, 1000); // Adjust the duration as needed
      return () => clearTimeout(timer);
    }
  }, [success, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Convert the inUse value to a boolean
    const inUseBoolean = formData.inUse === "Yes";

    try {
      const response = await fetch("/api/inventory", {
        method: "POST",
        body: JSON.stringify({ ...formData, inUse: inUseBoolean }), // Pass the converted value to the backend
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit the asset information.");
      }

      setSuccess("Information successfully added!");
      console.log("New computer asset added:", data);
      dispatch({ type: "CREATE_ASSET", payload: data });

    } catch (error) {
      setErrors({ submit: error.message });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ""
    }));
  };

  const clearForm = () => {
    setFormData({ ...initialFormData });
    setSubmitted(false);
    setErrors({});
  };

  const modal = isOpen ? (
    <div className="modal">
      <div className="modal-content">
        <h2>Enter Asset Information</h2>
        <span className="close" onClick={() => { onClose(); clearForm(); }}>&times;</span>
        <div className="modal-wrapper">
          <form onSubmit={handleSubmit}>
            {Object.keys(formData).map(key => (
              <div key={key} className="form-group">
                <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                {key === "inUse" && (
                  <select
                    id={key}
                    name={key}
                    value={formData[key]} // Display selected value here
                    onChange={handleInputChange}
                    className='select'
                  >
                      <option value=""></option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                )}
                {key === "company" && (
                  <select
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleInputChange}
                    className='select'
                  >
                    <option value=""></option>
                    <option value="i-cube Digital Solutions">i-cube Digital Solutions</option>
                    <option value="EZY lifestyle">EZY lifestyle</option>
                    <option value="PROPER">PROPER</option>
                    <option value="APEX">APEX</option>
                  </select>
                )}
                {key === "department" && (
                  <select
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleInputChange}
                    className='select'
                  >
                    <option value=""></option>
                    <option value="Accounting and Finance">Accounting and Finance</option>
                    <option value="HR">HR</option>
                    <option value="IT">IT</option>
                    <option value="Marketing & Sales">Marketing & Sales</option>
                  </select>
                )}
                {key !== "inUse" && key !== "company" && key !== "department" && (
                  <input
                    type={key === 'datePurchased' || key === 'dateIssued' ? 'date' : 'text'}
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleInputChange}
                  />
                )}
                {errors[key] && submitted && <small className="inline-error">{errors[key]}</small>}
                {key !== "inUse" && key !== "company" && key !== "department" && !formData[key] && submitted && (
                  <small className="inline-error">This field is required</small>
                )}
              </div>
            ))}
            <br />
            <button type="submit" className="center">Submit</button>
          </form>
        </div>
        {errors.submit && <div className="error">{errors.submit}</div>}
      </div>
    </div>
  ) : null;

  return (
    <>
      {modal}
      {success && <Notification message={success} />}
    </>
  );
}

export default Modal;
