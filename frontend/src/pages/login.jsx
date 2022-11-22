import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background: #ccc;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  .form-group {
    width: 100%;
    margin-bottom: 1rem;
    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      outline: none;
    }
  }
  .form-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .checkbox {
      display: flex;
      align-items: center;
      input {
        margin-right: 0.5rem;
      }
    }
  }
`;

const Formgroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  .form-group {
    width: 100%;
    margin-bottom: 1rem;
    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      outline: none;
    }
  }
  .form-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .checkbox {
      display: flex;
      align-items: center;
      input {
        margin-right: 0.5rem;
      }
    }
  }
`;


const Button = styled.button`
  width: 300px;
  height: 40px;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background: #333;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: #555;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0.5rem;
  border: 3px solid #ccc;
  border-radius: 0.25rem;
  outline: none;
`;



function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Section>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login to add Employees</p>
      </Section>

      <section className='form'>
        <Form onSubmit={onSubmit}>
          <Formgroup>
            <Input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </Formgroup>
          <Formgroup>
            <Input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </Formgroup>

          <div>
            <Button type='submit' >
              Submit
            </Button>
          </div>
        </Form>
      </section>
    </>
  )
}

export default Login
