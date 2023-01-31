const asyncHandler = require('express-async-handler')

// @desc - get all orders, @route - /getOrders
const getOrders = asyncHandler(async (req, res) => {
    res.status(200).json({message : "all orders"})
})

const createOrders = asyncHandler(async (req, res) => {
    res.status(200).json({message : "craeted orders"})
})

const getAvailableQuantity = asyncHandler(async (req, res) => {
    res.status(200).json({message : `the available quantity for ${req.params.itemName} is ${req.params.availableQuantity}`})
})

module.exports = {
    getOrders,
    createOrders,
    getAvailableQuantity
}