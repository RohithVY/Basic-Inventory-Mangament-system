const asyncHandler = require('express-async-handler')

// @desc - get all customer details, @route - /customerDetails
const getCustomerDetails = asyncHandler(async (req, res) => {
    res.status(200).json({message : "all customer details"})
})

const createCustomer = asyncHandler(async (req, res) => {
    res.status(200).json({message : "craeted Customer"})
})

module.exports = { 
    getCustomerDetails,
    createCustomer
}
