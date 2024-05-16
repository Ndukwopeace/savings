
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    'name': {
        type: String,
        required: true,  
    },

    'description': {
        type: String,
        required: true,
        min: [20 , "should not be less than 20 characters"],
        max: [80 , "should not be greater than 80 characters"],
    }
},{timeStamp: true})


const savings = mongoose.model('Savings',schema);

module.exports = savings;
