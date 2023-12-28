import axios from 'axios'

const API_URL = 'https://threew-apis.onrender.com/api/auth/'

// Register user
const register = async (userData) => {
  const response = await axios.post('https://threew-apis.onrender.com/api/auth/signup', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data.token))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post('https://threew-apis.onrender.com/api/auth/login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify({token : response.data.token, id : response.data._id}))
  }

  return response.data
}

//get current user 
const getCurrentUser = async(userID) => {
  const response = await axios.get(API_URL + userID)
  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
  getCurrentUser
}

export default authService
