// import { url } from '../Constants/Url'
import { Link } from 'react-router-dom'

const UserRow = ({ user }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td> {user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.phoneNo}</td>
    
    </tr>
  )
}

export default UserRow
