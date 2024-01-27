const mongoose= require('mongoose');
const { Schema } = mongoose;

const shopSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    
    shopName:{
        type:String,
        required:true

    },
    category:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    shopLicNo:{
        type:Number,
        required:true,
    },
    gstNo:{
        type:Number,

    },
    nameOnAccount:{
        type:String,
    },
    AccountNo:{
        type:Number,
        
    },
    ifscCode:{
        type:Number
    }    


});

module.exports=mongoose.model('shops',shopSchema);