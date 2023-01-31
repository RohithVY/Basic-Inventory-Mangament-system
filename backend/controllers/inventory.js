const asyncHandler = require('express-async-handler')

// @desc - get all Inventory, @route - /inventory
const getInventory = asyncHandler(async (req, res) => {
    res.status(200).json({message : "all inventory"})
})

// @desc - get all inventory specific type, @route - /inventory/:inventoryType
const getSpecificInventoryType = asyncHandler(async (req, res) => {
    res.status(200).json({message : `all inventory of type ${req.params.inventoryType}`})
})

const createInventory = asyncHandler(async (req, res) => {
    res.status(200).json({message : "craeted indventory"})
})


module.exports = { 
    getInventory,
    getSpecificInventoryType,
    createInventory
}