import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createEmployee } from '../features/employees/employeeSlice'
import styled from 'styled-components'

const Sectiontwo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
  `;


  const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 70vh;
  max-width: 500px;
  background: #ccc;
  padding: 2rem;
  margin-top: 3rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  text-align: center;
`;

  const Input = styled.input`
  width: 400px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 400px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

function EmployeeForm() {
 const [name, setName] = useState('')
const [dateOfBirth, setDateOfBirth] = useState('')
const [gender, setGender] = useState('')
const [salary, setSalary] = useState('')


  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createEmployee({ name, dateOfBirth, gender, salary }))
    setName('')
    setDateOfBirth('')
    setGender('')
    setSalary('')
  }

  return (
    <Sectiontwo>
      <Form onSubmit={onSubmit}>
        <div>
          <label htmlFor='text'>Name</label>
          <Input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor='text'>Date of birth</label>
          <Input
            type='date'
            name='dateOfBirth'
            id='dateOfBirth'
            value={dateOfBirth.toString()}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor='text'>gender</label>
          <Select name="Gender" required 
            id='gender'
            value={gender}
            onChange={(e) => setGender(e.target.value)}>
            <option value="" disabled selected hidden>Choose  Gender</option>
            <option value="male">male</option>
            <option value="tea">female</option>
           
          </Select>
        </div>

        <div>
          <label htmlFor='text'>Salary</label>
          <Input
            type='number'
            name='salary'
            id='salary'
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        </div>
        <div>
          <button className='btn btn-block' type='submit'>
            Add 
          </button>
        </div>
      </Form>
    </Sectiontwo>
  )
  
}

export default EmployeeForm
