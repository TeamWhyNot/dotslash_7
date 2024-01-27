const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://toyashpatil17:X0LcIGc4JDlabiu6@cluster0.rsqdccn.mongodb.net/';

const connectTOMongo = async () => {
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongodb")

}

module.exports = connectTOMongo;