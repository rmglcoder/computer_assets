const Inventory = require('../models/inventoryModel.jsx')
const mongoose = require('mongoose')


const getAssets = async (req, res) => {
    const assets = await Inventory.find({}).sort({createdAt: -1})

    res.status(200).json(assets)
}

const getAsset = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such computer asset'})
    }

    const asset = await Inventory.findById(id)

    if (!asset) {
        return res.status(404).json ({error: 'No such computer asset'})
    }
    res.status(200).json(asset)
}
const { validationResult } = require('express-validator');

const createAsset = async (req, res) => {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { serialNumber, brand, inUse, model, processor, ram, storage, datePurchased, currentOwner, company, department, dateIssued, accounts, notes, remarks } = req.body;

    try {
        const asset = await Inventory.create({
            serialNumber,
            brand,
            inUse: inUse === "Yes",
            model,
            processor,
            ram,
            storage,
            datePurchased,
            currentOwner,
            company,
            department,
            dateIssued,
            accounts,
            notes,
            remarks
        });
        res.status(200).json(asset);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};


const deleteAssets = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such computer assets'})
    }

    const asset = await Inventory.findOneAndDelete({_id: id})

    if (!asset) {
        return res.status(400).json ({error: 'No such goal'})
    }

res.status(200).json(asset)

}

const updateAsset = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such computer assets'})
    }

    const asset = await Inventory.findOneAndUpdate({_id: id}, {
        ...req.body 
    })
    if (!asset) {
        return res.status(400).json ({error: 'No such goal'})
    }

    res.status(200).json(asset)

}

module.exports = {
    getAssets,
    getAsset,
    createAsset,
    deleteAssets,
    updateAsset
}