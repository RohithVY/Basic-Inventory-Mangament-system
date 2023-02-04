const asyncHandler = require('express-async-handler')
const Order = require('../models/ordersModel')
const Inventory = require('../models/inventoryModel')


// @desc - get all orders, @route - /getOrders
const getOrders = asyncHandler(async (req, res) => {

    const orders = await Order.find()

    res.status(200).json(orders)
})

const createOrders = asyncHandler(async (req, res) => {

    if (!req.body.customer_id || !req.body.inventory_id || !req.body.item_name || !req.body.quantity) {
        res.status(400)
        throw new Error('Please input all fields')
    }

    const order = await Order.create({
        customer_id: req.body.customer_id,
        inventoryItemID: await Inventory.find({
            inventory_id: req.body.inventory_id
        })
        ,
        item_name: req.body.item_name,
        quantity: req.body.quantity
    })

    res.status(200).json(order)
})

const getAvailableQuantity = asyncHandler(async (req, res) => {
    let orderQuantity = await Inventory.findOne({
        item_name: req.params.itemName
    });

    // Now from this statement, i understood it this way, "for updating the available quantity"
    if (orderQuantity) {
        if (parseInt(req.params.availableQuantity) > orderQuantity.available_quantity) {
            res.status(404).json({ message: "ITEM IS OUT OF STOCK" });
        } else {
            let updatedQuantity = orderQuantity.available_quantity - parseInt(req.params.availableQuantity);
            const updatedItemInventory = await Inventory.findOneAndUpdate({
                _id: orderQuantity._id
            }, {
                $set: { available_quantity: updatedQuantity }
            }, { new: true }).exec();

            res.status(200).json(updatedItemInventory);
        }
    } else {
        res.status(404).json({ message: "ITEM IS NOT FOUND IN THE INVENTORY" });
    }
});






module.exports = {
    getOrders,
    createOrders,
    getAvailableQuantity
}