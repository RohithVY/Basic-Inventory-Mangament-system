const asyncHandler = require('express-async-handler')
const Inventory = require('../models/inventoryModel')

// @desc - get all Inventory, @route - /inventory
const getInventory = asyncHandler(async (req, res) => {
    const inventory = await Inventory.find()

    res.status(200).json(inventory)
})

// @desc - get all inventory specific type, @route - /inventory/:inventoryType
const getSpecificInventoryType = asyncHandler(async (req, res) => {

    console.log(req.params.inventoryType)
    const specificInventory = await Inventory.find({
        inventory_type: req.params.inventoryType
    })

    res.status(200).json(specificInventory)
})

const createInventory = asyncHandler(async (req, res) => {
    let inv_id = "INTD" + Math.floor(Math.random() * 1000);
    req.body.inventory_id = inv_id

    let invModelData = await Inventory.create(req.body)
    res.status(200).json(invModelData)
})

const updateAvailableInventory= asyncHandler(async (req, res) => {
    const item = await Inventory.findOne({ item_name: req.params.itemName });
    if (!item) {
        let inv_id = "INTD" + Math.floor(Math.random() * 1000);
        const newItem = {
            item_name: req.params.itemName,
            available_quantity: req.body.available_quantity,
            inventory_id: inv_id,
            ...req.body // include any other properties you want to set for the new item
        };
        const createdItem = await Inventory.create(newItem);
        res.status(201).json(createdItem);
    } else {
        item.available_quantity = req.body.available_quantity;
        const updatedItem = await item.save();
        res.status(200).json(updatedItem);
    }
});


module.exports = { 
    getInventory,
    getSpecificInventoryType,
    createInventory,
    updateAvailableInventory
}