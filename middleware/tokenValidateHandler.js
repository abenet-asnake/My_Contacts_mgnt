const asyncHandler = require('express-async-handler');
const jwt= require('jsonwebtoken');
const tokenHandler= asyncHandler(async(req, res, next)=>{
    let token=req.headers;
    jwt.sign(token,process.env.ACCESS_TOKE_SECRET_KEY,(err,decoded)=>{
        if (err){
            res.status(401);
            throw new Error ('User not authenticated');
        }
        req.thisUser=decoded.thisUser;
        next();
    });
    if(!token){
        res.status(401);
        throw new Error ('token is required');
    }
});

module.exports =tokenHandler;