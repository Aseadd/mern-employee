const asyncHander = require('express-async-handler')

const Goal = require('../model/goalModel')
const User = require('../model/userModel')

const getGoals = asyncHander (async (req, res) => {
    const goals = await Goal.find({user: req.user._id})
    res.json(goals)
})

const setGoals = asyncHander(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("Please provide a text")
    }


    const goal = await Goal.create({
        text: req.body.text,
        user: req.user._id
})
    res.status(201).json(goal)
})

const updateGoal =asyncHander( async (req, res) => {
    const goal = await Goal.findById(req.params.id)

   if(!goal){
       res.status(404)
       throw new Error("Goal not found")
   }

   const user = await User.findById(req.user._id)

   if(!user){ 
         res.status(404)
         throw new Error("User not found")
   }

    if(goal.user.toString() !== user._id.toString()){
        res.status(401)
        throw new Error("Not authorized")

    }

   const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
         new: true,
   })

   res.json(updatedGoal)
})

const deleteGoal = asyncHander( async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(404)
        throw new Error("Goal not found")
    }

        const user = await User.findById(req.user._id)

        if(!user){ 
            res.status(404)
            throw new Error("User not found")
        }

        if(goal.user.toString() !== user._id.toString()){
            res.status(401)
            throw new Error("Not authorized")
        }
        
    await goal.remove()
    res.json({id: req.params.id})

})

module.exports = {
    getGoals, setGoals, updateGoal, deleteGoal
}