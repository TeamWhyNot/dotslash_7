const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const router = express.Router();
const User = require('../models/User')
const Shop = require('../models/Shop')
const jwt = require('jsonwebtoken');
const fetchShop = require('../middleware/fetchShop');


const jwt_shop = "shop#123"

router.post('/addshop', fetchUser, async (req, res) => {

    try {
        const shops = new Shop({
            user: req.user.id,
            shopName: req.body.shopName,
            category: req.body.category ,
            location: req.body.location ,
            description: req.body.description ,
            shopLicNo: req.body.shopLicNo,
            gstNo: req.body.gstNo ,
            nameOnAccount: req.body.nameonAccount ,
            AccountNo: req.body.AccountNo ,
            ifscCode: req.body.ifscCode ,

        })
        const savedShop = await shops.save()
        const data = {
            id: savedShop.id

        }
        const shoptoken = jwt.sign(data, jwt_shop);
        res.json({ success: true, shoptoken });
        
    } catch (error) {
        console.log(error)
    }

})

router.post('/getshop',fetchUser,fetchShop, async (req, res) => {
    try {
        const shopId = req.shop.id;
        const user = await Shop.findById(shopId);
        res.json(user);
    } catch (error) {
        console.error(error);
    }
})


module.exports = router;