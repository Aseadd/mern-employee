import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import EmployeeForm from '../components/EmployeeForm'
import Employee from '../components/Employee'
import Spinner from '../components/Spinner'
import { getEmployees, reset } from '../features/employees/employeeSlice'
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 15vh;
  width: 80vw;
  background: #c2c2c2;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  text-align: center;
  color: #333;
  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: darkblue;
  }
`;

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
  background: #011C27;
  color: #fff;
  margin-bottom: 2rem;
  `;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20px;
  max-width: 700px;
  background: tomato;
  padding: 2rem;
  border-radius: 0.3rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  `;



function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getEmployees())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Register your Employees</p>
      </Section>

      <EmployeeForm/>

      <Sectiontwo>
        <h2>Employees</h2>
        <Div>
          <span>Name </span>
          <span>Gender </span>
          <span>Salary </span>
          <span>Date of Birth</span>
          <span>Action </span>
          
        </Div>
        {goals.length > 0 ? (
          <div>
            {goals.map((employee) => (
              <Employee key={employee._id} employee={employee} />
            ))}
          </div>
        ) : (
          <h3>No Employee Data Yet</h3>
        )}
      </Sectiontwo>
    </>
  )
}

export default Dashboard
