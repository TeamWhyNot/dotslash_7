var jwt = require('jsonwebtoken');
require("dotenv").config();

const jwt_shop = "toyash#123";

const fetchShop = (req, res, next) => {

    try {
        const token = req.header('shop-token');
        if (!token) {
            res.status(401).json({ Error: "Please enter correct auth token" });
        }
        const data = jwt.verify(token, jwt_shop);
        req.shop = data;
        next();
    } catch (error) {
        console.error(error);
    }

}

module.exports = fetchShop;