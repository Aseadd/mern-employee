import axios from 'axios'

const API_URL = '/api/goals/'

// Create new user
const createEmployee = async (employeeData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, employeeData, config)

  return response.data
}

// Get user 
const getEmployees = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user 
const deleteEmployee = async (employeeId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + employeeId, config)

  return response.data
}

// Update user
const updateEmployee = async (employeeId, employeeData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL + employeeId, employeeData, config)

  return response.data
}


const employeeService = {
  createEmployee,
  getEmployees,
  deleteEmployee,
  updateEmployee,
}

export default employeeService
