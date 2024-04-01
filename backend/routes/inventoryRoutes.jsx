const express = require('express')
const {
    getAssets,
    getAsset,
    createAsset,
    deleteAssets,
    updateAsset
} = require('../controllers/inventoryControllers.jsx')

const router = express.Router()

router.get("/", getAssets)
router.get('/:id', getAsset)
router.post('/', createAsset)
router.delete('/:id', deleteAssets)
router.patch('/:id', updateAsset)

module.exports = router