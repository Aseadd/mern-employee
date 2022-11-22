import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'
import { FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components'

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


function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <Table>
      <tbody>
        <tr>
          <td>{goal.text}</td>
          <tb> {goal.gender}</tb>
          <td>{goal.salary}</td>
          <td>
          <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
            <FaTrashAlt />
     </button>
          </td>
        </tr>
      </tbody>
    </Table>
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

export default GoalItem
