const express = require('express')
const {getEmployees, setEmployee, updateEmployee, deleteEmployee}= require('../controller/employeesController')
const {protect} = require('../middleware/authMiddleware')

const router = express.Router()


router.route('/').get(protect, getEmployees).post(protect, setEmployee)
router.route('/:id').put(protect, updateEmployee).delete(protect, deleteEmployee)

module.exports = router