const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    customer_id :{
        type: String,
        required: true
    }, 
    inventory_id :{
        type: String,
        required: true
    },
    item_name :{
        type: String,
        required: true
    },
    quantity :{
        type: Number,
        required: true
    }
},
{
    timestamps : true
})

module.exports = mongoose.model("Order", orderSchema)