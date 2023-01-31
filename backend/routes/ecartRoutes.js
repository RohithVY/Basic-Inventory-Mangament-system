const express = require('express');
const router = express.Router();
const { getInventory, getSpecificInventoryType, createInventory } = require('../controllers/inventory')
const { getCustomerDetails, createCustomer} = require('../controllers/customerDetails')
const { getOrders, createOrders, getAvailableQuantity } = require('../controllers/orders');


router.get('/getOrders', getOrders)

router.get('/inventory', getInventory)

router.get('/customerDetails', getCustomerDetails)

router.get('/:itemName/:availableQuantity', getAvailableQuantity)

router.get('/inventory/:inventoryType', getSpecificInventoryType)

router.post('/createOrders', createOrders)

router.post('/createCustomer', createCustomer)

router.post('/createInventory', createInventory)

module.exports = router