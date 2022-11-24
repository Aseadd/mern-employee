import { useDispatch } from 'react-redux'
import { deleteEmployee } from '../features/employees/employeeSlice'
import { FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components'

const FaTrash = styled(FaTrashAlt)`
  color: red;
  font-size: 1.5rem;
  cursor: pointer;
`;




const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid cyan;
  `;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vh;
  max-width: 700px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  text-align: center;
  color: #fff;
  `;


function Employee({ employee }) {
  const dispatch = useDispatch()

  const date = new Date(employee.dateOfBirth).toLocaleDateString()


  return (
    <DivContainer>
    <Div>
      <span> {employee.name} </span>
      <span>{employee.gender}</span>
      <span>{employee.salary}</span>
      <span>{date}</span>

      <button onClick={() => dispatch(deleteEmployee(employee._id))} className='close'>
        <FaTrash />
  </button> 
    </Div>
    </DivContainer>
  )
}

export default Employee
