const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult} = require('express-validator');
const { request } = require('express');
const { exists } = require('../models/User');

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
//  check whether the user with this email exists already
    let user = User.findOne({email:req.body.email});
    if (user) {
        return res.status(400).json({error: "Sorry a user with this email already exists"})
    }
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user => res.json(user))
    .catch(err => {console.log(err)
    res.json({error: 'This Email is already used', message: err.message})})
    

    // console.log(req.body);
    // const user = User(req.body);
    // user.save()
    // res.send(req.body)
})

module.exports = router