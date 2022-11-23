import { useDispatch } from 'react-redux'
import { deleteEmployee } from '../features/goals/goalSlice'
import { FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components'


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
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  text-align: center;
  color: #333;
  `;


function Employee({ employee }) {
  const dispatch = useDispatch()

  return (
    <DivContainer>
    <Div>
    
         <span> {employee.text} </span>
          <span>{employee.gender}</span>
          <span>{employee.salary}</span>

          <button onClick={() => dispatch(deleteEmployee(employee._id))} className='close'>
            <FaTrashAlt />
     </button>

         
    </Div>
    </DivContainer>
    //   <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
    //   <h2>{goal.text}</h2>
    //   <h2>{goal.gender}</h2>
    //   <h2>{goal.salary}</h2>
    //   <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
    //     X
    //   </button>
    // </Table>
  )
}

export default Employee
