import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUserAlt} from 'react-icons/fa'
import {useState, useEffect} from 'react'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })


  const {name, email, password, password2} = formData

  const onChange = e => {setFormData(prevState => ({...prevState, [e.target.name]: e.target.value}))}

  return (
    <div className='register'>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'><FaUserAlt/> Create Your Account</p>
      <form className='form' action='create-profile.html'>
        <div className='form-group'>
          <input type='text' placeholder='Name' name='name' value={name} onChange={e => onChange(e)} required />
        </div>
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
        <div className='form-group'>
          <input

            type='password'
            placeholder='Confirm Password'
            name='password2'
            minLength='6'
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <a href='login.html'>Sign In</a>
      </p>
    </div>
  )
}

export default Register