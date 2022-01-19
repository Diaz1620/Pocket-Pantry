const mongoose = require('mongoose');


const GrocerySchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Name of item is required"]
    },
    amount:{
        type: Number,
        min: [1, 'Must have minimum of 1']
    },
    unit:{
        type: String,
        required:[true,"Please select the unit of measurement"]
    },
    category:{
        type: String
    },
    user_id:{
        type: String,
    }
},{timestamps:true})

// required:[true,"ID error"]

const Grocery = mongoose.model("Grocery",GrocerySchema);

module.exports = Grocery;