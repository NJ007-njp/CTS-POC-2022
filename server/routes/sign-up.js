const express = require('express');
let router = express.Router();
const {signup} = require('../controller/signup.controller');

router.post('/',(req,res)=>{
   const {userName,password} = req.body?.param?.details;
    // const {password} = req.body?.details?.password;
    console.log(userName,password);
    const valid = signup(userName,password);
    res.json({success:'sucess'});
});

module.exports = router;