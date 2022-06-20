<<<<<<< HEAD
const { getEmailSend } = require("../service/service");

var func = {
    getLoginPost:(req, res, next)=>{
        getEmailSend(req)

        res.json({ "Name": req.body,"natty":"is nitya"})
    }
}

module.exports = func; 
=======
const req = require("express/lib/request");
var express = require('express');

var func = {
    getLoginPost:(req,res,next) => {
        res.json({"Name":req.body});
    }
}
module.exports =func;
>>>>>>> first commit
