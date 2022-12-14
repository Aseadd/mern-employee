const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHander = require('express-async-handler')
const User = require('../model/userModel')


const registerUser =asyncHander( async(req, res) => {
    const {name, email, password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please provide a name, email and password")
    }

    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error("User already exist")
    }

    // password encryption

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("Invalid user data")
    }
})

const loginUser = asyncHander( async(req, res) => {
    const {email, password} = req.body

    if(!email || !password){
        res.status(400)
        throw new Error("Please provide an email and password")
    }

    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(401)
        throw new Error("Invalid email or password")
    }
})


const getUserProfile =asyncHander( async(req, res) => {
  res.status(200).json(req.user)
})


const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })
}

module.exports = {
    registerUser, loginUser, getUserProfile
}