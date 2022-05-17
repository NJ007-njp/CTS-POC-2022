const express = require('express');
let router = express.Router();
const {loggedIn} = require('../controller/login.controller');

router.get('/',(req,res)=>{
    const user = req.body?.userName;
    const password = req.body?.password;
    const valid = loggedIn(user,password);
});

module.exports = router