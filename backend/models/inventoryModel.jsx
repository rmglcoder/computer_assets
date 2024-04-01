const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const inventorySchema = new Schema(
  {
    serialNumber: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    inUse: {
        type: Boolean,
        required: true,
        default: false
    },
    model: {
        type: String,
        required: true
    },
    processor: {
        type: String,
        required: true
    },
    ram: {
        type: String,
        required: true
    },
    storage: {
        type: String,
        required: true
    },
    datePurchased: {
        type: Date,
        required: true
    },
    currentOwner: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    dateIssued: {
        type: Date,
        required: true
    },
    accounts: {
        type: Array,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    remarks: {
        type: String,
        required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inventory", inventorySchema);
