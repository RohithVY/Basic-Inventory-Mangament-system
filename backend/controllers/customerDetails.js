const asyncHandler = require('express-async-handler')
const Customer = require('../models/customerModel')

// @desc - get all customer details, @route - /customerDetails
const getCustomerDetails = asyncHandler(async (req, res) => {
    const customers = await Customer.find()

    res.status(200).json(customers)
})

const createCustomer = asyncHandler(async (req, res) => {
    let cusID = "OD" + Math.floor(Math.random()*1000)
    req.body.customer_id = cusID

    const newCustomer = await Customer.create(req.body)
    
    res.status(200).json(newCustomer)
})

module.exports = { 
    getCustomerDetails,
    createCustomer
}
