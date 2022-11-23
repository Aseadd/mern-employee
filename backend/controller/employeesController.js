const asyncHander = require('express-async-handler')

const Goal = require('../model/employeeModel')
const User = require('../model/userModel')

const getEmployees = asyncHander (async (req, res) => {
    const goals = await Goal.find({user: req.user._id})
    res.json(goals)
})

const setEmployee = asyncHander(async (req, res) => {
    const { name, dateOfBirth, gender, salary } = req.body

    if(!name || !dateOfBirth || !gender || !salary){
        res.status(400)
        throw new Error("Please provide a name, date of birth and salary")
    }
    
      const goal = await Goal.create({
        name: name,
        dateOfBirth: dateOfBirth,
        gender: gender,
        salary: salary,
        user: req.user.id,
      })
    
      res.status(200).json(goal)
})

const updateEmployee =asyncHander( async (req, res) => {
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

   const updatedEmployee = await Goal.findByIdAndUpdate(req.params.id, req.body, {
         new: true,
   })

   res.json(updatedEmployee)
})

const deleteEmployee = asyncHander( async (req, res) => {
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
    getEmployees, setEmployee, updateEmployee, deleteEmployee
}