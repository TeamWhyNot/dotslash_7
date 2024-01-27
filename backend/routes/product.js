const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const router = express.Router();
const User = require('../models/User')
const Shop = require('../models/Shop')
const jwt = require('jsonwebtoken');
const fetchShop = require('../middleware/fetchShop');
const Product=require('../models/Product')


router.post('/addproduct', fetchShop, async (req, res) => {

    try {
        const products = new Product({
            shop: req.shop.id,
            productName: req.body.productName,
            productPrize: req.body.productPrize ,
            productType: req.body.productType ,
            description: req.body.description ,
            inStock: req.body.inStock,
        })
        const savedproduct = await products.save()
        console.log(savedproduct)
        // const data = {
        //     id: savedShop.id

        // }
        // const shoptoken = jwt.sign(data, jwt_shop);
        // res.json({ success: true, shoptoken });
        
    } catch (error) {
        console.log(error)
    }

})

module.exports = router;