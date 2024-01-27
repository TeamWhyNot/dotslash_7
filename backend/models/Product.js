const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    shop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'shops'
    },

    productName: {
        type: String,
        required: true

    },
    productPrize: {
        type: String,
        required: true
    },
    productType: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    inStock: {
        type: Boolean,
        required: true,
    }


});

module.exports = mongoose.model('products', productSchema);