const router = require('express').Router()
const User = require("../model/User")

//REGISTER
router.post('/register' , async (req,res) => {
    console.log(req.body)
    const user = new User({
        username: req.body.username,
        email : req.body.email,
        password : req.body.password
    })

    try{
        await user.save()
        res.status(200).json(user)
    }catch(err){
        console.log(err)
    }
})

module.exports = router