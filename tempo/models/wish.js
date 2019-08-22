const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Wish = new Schema({
    wishItem: {
        type: String
    },
    wishPrice: {
        type: String
    },
    wishWage: {
        type: String
    }
});
module.exports = mongoose.model('Wish', Wish);