const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/dotslash';

const connectTOMongo = async () => {
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongodb")

}

module.exports = connectTOMongo;