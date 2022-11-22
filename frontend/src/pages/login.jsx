import React from 'react'
import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})


  return (
    <div className='login'>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'><FaSignInAlt/> Sign Into Your Account</p>
      <form className='form' action='dashboard.html'>
        <div className='form-group'>
          <input type='email' placeholder='Email Address' name='email' value={email} onChange={e => onChange(e)} required />
        </div>
        <div className='form-group'>
          <input

            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <a href='register.html'>Sign Up</a>
      </p>
    </div>
    
  )
}

export default Login