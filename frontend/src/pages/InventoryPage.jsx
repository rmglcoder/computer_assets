import { useEffect } from "react";
import { useAssetContext } from "../hooks/useAssetContext";
import Navbar from "../components/Navbar"
import Modal from "../components/Modal";
import AssetCard from "../components/AssetCard"; // Import the AssetCard component
import '../css/Dashboard.css';
import '../css/Modal.css';
import '../css/AssetCard.css'; // Import the CSS for the AssetCard

const InventoryPage = () => {
  const { assets, dispatch} = useAssetContext();

  useEffect (() => {
    const fetchAssets = async () => {
        try {
            const response = await fetch("/api/inventory/")
            const json = await response.json();

            if (response.ok) {
                dispatch({type: "SET_ASSETS", payload: json});
            } else {
                console.error("Error fetching assets:", json);
            }
        } catch (error) {
            console.error("Error fetching assets")
        }
    };

    fetchAssets();
  }, [dispatch]);

  return (
    <div>
    <div>
        <Navbar />
      </div>
      <div className="inventory-page">
      <h2 className="title">Inventory Assets</h2>
      <Modal /> {/* Render the Modal component */}
      <div className="asset-list">
        {assets &&
        assets.map((asset) => <AssetCard key={asset._id} asset={asset} />)}
      </div>
      </div>
    </div>
  );
};

export default InventoryPage;
