const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true,
    },
    category: {
        type: String,
        require: true
    }

});
const User = mongoose.model('user', userSchema);
User.createIndexes();
module.exports = User;