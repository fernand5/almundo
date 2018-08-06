'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String,
  },
  stars: {
    type: Number
  },
  price: {
    type: Number
  },
  image: {
    type: String
  },
  amenities: {
    type: Array
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
