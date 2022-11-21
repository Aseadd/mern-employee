const asyncHander = require('express-async-handler')

const getGoals = asyncHander (async (req, res) => {
    res.status(200).json({
        message: "Get Goals"
    })
})

const setGoals = asyncHander(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("Please provide a text")
    }


    res.status(200).json({
        message: "Set Goals"
    })
})

const updateGoal =asyncHander( async (req, res) => {
    res.status(200).json({
        message: `Update Goal ${req.params.id}`
    })
})

const deleteGoal = asyncHander( async (req, res) => {
    res.status(200).json({
        message: `Delete Goal ${req.params.id}`
    })
})

module.exports = {
    getGoals, setGoals, updateGoal, deleteGoal
}