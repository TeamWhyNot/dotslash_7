const express = require('express');
const app = express();
const cors=require('cors');
const connectTOMongo=require('./db')

app.use(cors());
app.use(express.json());
connectTOMongo();


app.use('/api/auth',require('./routes/auth'))
app.use('/api/shop',require('./routes/shop'))



const PORT = 5000;

app.listen(PORT,()=>{
    console.log("Server started on Port: " + PORT)
})