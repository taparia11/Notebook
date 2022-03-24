const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult} = require('express-validator');
const { request } = require('express');
const { exists } = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'nikhilji';

// Create a user using POST "/api/auth/createuser" No Login required
router.post('/createuser',[
    body('name', 'Enter a valid Name').isLength({min: 3}),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Enter a valid Password').isLength({min: 3}),

] , async (req, res)=>{
    // if there are error return bad request and error
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try{
    //  check whether the user with this email exists already
    let user = await User.findOne({email:req.body.email});
    if (user) {
        return res.status(400).json({error: "Sorry a user with this email already exists"})
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt)
    // Create a new user
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
    });

    const data = {
        user:{
            id: user.id
        }
    }
    const  authtoken = jwt.sign(data,JWT_SECRET);

    res.json({authtoken})

    // res.json(user)

    // .then(user => res.json(user))
    // .catch(err => {console.log(err)
    // res.json({error: 'This Email is already used', message: err.message})})
    

    // console.log(req.body);
    // const user = User(req.body);
    // user.save()
    // res.send(req.body)
    // res.json({"Status" : "Account created in DB Successfully"})
} catch(error){
    console.error(error.message);
    res.status(500).send("Some error occured");
}
})

module.exports = router