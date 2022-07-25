const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String, minLength: 2, maxLength: 255 },
    description: { type: String, default: "no description", maxLength: 600 },
    image: { type: String, default: 'no image' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Product', Product)