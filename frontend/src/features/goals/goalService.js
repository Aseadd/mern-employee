import axios from 'axios'

const API_URL = '/api/goals/'

// Create new user
const createEmployee = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, goalData, config)

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
const deleteEmployee = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + goalId, config)

  return response.data
}

// Update user
const updateEmployee = async (goalId, goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL + goalId, goalData, config)

  return response.data
}


const goalService = {
  createEmployee,
  getEmployees,
  deleteEmployee,
  updateEmployee,
}

export default goalService
