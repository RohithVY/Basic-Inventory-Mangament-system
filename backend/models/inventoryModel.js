const mongoose = require('mongoose')

const inventorySchema = mongoose.Schema({
    inventory_id: {
        type: String,
        required : [true, 'inventory_id not Sent']
    },
    inventory_type: {
        type: String,
        required : [true, 'inventory_type not Sent']
    }, 
    item_name:{
        type: String,
        required : [true, 'item_name not Sent'],
        unique : true
    }, available_quantity: {
        type: Number,
        required : [true, 'available_quantity not Sent']
    }
},
{
    timestamps : true
})

module.exports = mongoose.model("Inventory", inventorySchema)