const express = require('express');
const router = express.Router();
const { getInventory, getSpecificInventoryType, createInventory, updateAvailableInventory } = require('../controllers/inventory')
const { getCustomerDetails, createCustomer} = require('../controllers/customerDetails')
const { getOrders, createOrders } = require('../controllers/orders');


router.get('/getOrders', getOrders)

router.get('/inventory', getInventory)

router.get('/customerDetails', getCustomerDetails)

router.get('/inventory/:inventoryType', getSpecificInventoryType)

router.post('/createOrders', createOrders)

router.post('/createCustomer', createCustomer)

router.post('/createInventory', createInventory)

router.put('/:itemName', updateAvailableInventory)

module.exports = router