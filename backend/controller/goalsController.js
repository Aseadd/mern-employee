const asyncHander = require('express-async-handler')

const Goal = require('../model/goalModel')

const getGoals = asyncHander (async (req, res) => {
    const goals = await Goal.find({})
    res.json(goals)
})

const setGoals = asyncHander(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("Please provide a text")
    }


    const goal = await Goal.create({
        text: req.body.text
})
    res.status(201).json(goal)
})

const updateGoal =asyncHander( async (req, res) => {
    const goal = await Goal.findById(req.params.id)

   if(!goal){
       res.status(404)
       throw new Error("Goal not found")
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

    await goal.remove()
    res.json({id: req.params.id})

})

module.exports = {
    getGoals, setGoals, updateGoal, deleteGoal
}