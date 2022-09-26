const mongoose = require('mongoose');
const { stringify } = require('querystring');


const DataSchema = new mongoose.Schema({
         client: String,
        delivery_date: { type: Date, default: Date.now },
        target_start: String,
        target_end: String,
    
},{
    timestamps:true
});

const deliveries = mongoose.model('Deliveries', DataSchema);
module.exports = deliveries;