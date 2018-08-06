'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Hotels', TaskSchema);


// {
//     "id": "249942",
//     "name": "Hotel Stefanos",
//     "stars": 3,
//     "price": 994.18,
//     "image": "4900059_30_b.jpg",
//     "amenities": [
//     "safety-box",
//     "nightclub",
//     "deep-soaking-bathtub",
//     "beach",
//     "business-center"
// ]
// },