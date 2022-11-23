import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import EmployeeForm from '../components/EmployeeForm'
import Employee from '../components/Employee'
import Spinner from '../components/Spinner'
import { getEmployees, reset } from '../features/goals/goalSlice'
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 80vw;
  background: #c2c2c2;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  text-align: center;
  color: #333;
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Table = styled.table`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-collapse: collapse;
  thead {
    background: #333;
    color: #fff;
    th {
      padding: 0.5rem;
    }
  }
  tbody {
    tr {
      border-bottom: 3px solid #fff;
      &:last-child {
        border-bottom: 0;
      }
      td {
        padding: 0.5rem;
      }
    }
  }
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
        <p>Dashboard</p>
      </Section>

      <EmployeeForm/>

      <section className='content'>
        {goals.length > 0 ? (
          <div>
            {goals.map((employee) => (
              <Employee key={employee._id} employee={employee} />
            ))}
          </div>
        ) : (
          <h3>No Employee Data Yet</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
