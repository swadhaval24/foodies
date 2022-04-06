import { url } from "../../Constants/Url";
import axios from "axios";
//import { useHistory } from 'react-router'
import "../DeliveryBoyRecord/css/list.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const DeliveryBoyRow = ({ user }) => {
  //const history = useHistory()
  const deleteDeliveryBoy = async (id) => {
    await axios.delete(url + `/user/delete/${user.id}`);
    alert("successfully deleted an deliveryBoy");
    //  history.push("/DeliveryBoyList");
  };
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td> {user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.phoneNo}</td>

      <td>
        <button
          onClick={() => deleteDeliveryBoy(user.id)}
          class="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DeliveryBoyRow;
