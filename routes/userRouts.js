const express= require('express');
const router= express.Router();
// creating post API routes for registration 
router.post("/register", (req, res) => {
       res.json({Message: 'User Successfully Registered'});
});

// login users
router.post("/login", (req, res) => {
    res.json({Message: 'User Successfully Login'});
});

// status of the user 
router.get("/status", (req, res) => {
    res.json({Message: 'User Status'});
});
module.exports = router;