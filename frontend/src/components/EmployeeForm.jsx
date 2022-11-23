import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createEmployee } from '../features/goals/goalSlice'

function EmployeeForm() {
 const [text, setText] = useState('')
const [dateOfBirth, setDateOfBirth] = useState('')
const [gender, setGender] = useState('')
const [salary, setSalary] = useState('')

//   const [information, setInformation] = useState({
//     text: '',
//     date_of_birth: '',
//     gender: '',
//     salary: '',
//   })

// const {text, date_of_birth, gender, salary} = information


  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createEmployee({ text, dateOfBirth, gender, salary }))
    setText('')
    setDateOfBirth('')
    setGender('')
    setSalary('')
  }

  // dispatch(createGoal({information}))
  // setInformation('')
  // }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Name</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='text'>Date of birth</label>
          <input
            type='text'
            name='dateOfBirth'
            id='dateOfBirth'
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='text'>gender</label>
          <select name="Gender" required 
            id='gender'
            value={gender}
            onChange={(e) => setGender(e.target.value)}>
            <option value="" disabled selected hidden>Choose  Gender</option>
            <option value="male">male</option>
            <option value="tea">female</option>
           
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='text'>Salary</label>
          <input
            type='text'
            name='salary'
            id='salary'
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add 
          </button>
        </div>
      </form>
    </section>
  )
}

export default EmployeeForm