const express = require('express');
const router = express.Router();
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const fetchUser = require('../middleware/fetchUser')


const accountSid = "ACcb21d81de93a24ae2cbfcf91574e07f3";
const authToken = "7aef3cfa683774cfa80ab06d8a7f65bd";
const verifySid = "VAb4ac387d33d2b3d58cb624c3387ccf82";
const client = require("twilio")(accountSid, authToken);



const JWT_token = "toyash#123"

router.post('/createuser', async (req, res) => {

    try {
        let user = await User.findOne({ 'phone': req.body.phone });
        if (user) {
            return res.status(400).json({ success: false, Error: "User already exist" })
        }
        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            phone: req.body.phone,
            category: req.body.category,
        })
        const data = {
            id: user.id
        }

        const token = jwt.sign(data, JWT_token);
        res.json({ success: true, token });
        // client.verify.v2
        //     .services(verifySid)
        //     .verifications.create({ to: "+919098162141", channel: "sms" })
        //     .then((verification) => console.log(verification.status))



    } catch (error) {
        console.log(error)
    }


})


router.post('/login', async (req, res) => {

    let user = await User.findOne({ 'phone': req.body.phone })
    if (!user) {
        res.status(400).json({ success: false, Error: "Please Login with proper credentials" })
    }

    const data = {
        id: user.id
    }
    const token = jwt.sign(data, JWT_token);
    res.status(200).json({ success: true, token });
})


router.post('/verify', (req, res) => {
    const { code } = req.body
    // client.verify.v2
    //     .services(verifySid)
    //     .verificationChecks.create({ to: "+919098162141", code: code })
    //     .then((verification_check) => console.log(verification_check.status))
    // res.status(200).json({sucess:true,})


})

router.post('/getuser',fetchUser,async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select('-password');
        res.json(user);
    } catch (error) {
        console.error(error);
    }
})




module.exports = router;