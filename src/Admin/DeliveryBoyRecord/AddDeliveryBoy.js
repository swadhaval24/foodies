import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
 //import { url } from '../Constants/Url'

const AddDeliveryBoy = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [role,setRole]=useState('')
  let [data , setData] = useState(undefined)

  const navigate = useNavigate();
  useEffect(()=>{
   
      console.log(`first name = ${firstName}`)
      if(data !== undefined){
        axios.post("http://localhost:8080/user/add_deliveryBoy" ,{'firstName':firstName,'lastName':lastName,'email':email,'phoneNo': phoneNo ,'password':password,'role':role},{"Content-Type": "application/json"}).then((Response)=>{
          
         navigate("/DeliveryBoyList");
        })
      }
    
  },[data]) 

  const AddDeliveryBoy= (e) => {
    e.preventDefault();
    console.log(`first name = ${firstName}`)
    console.log(`last name = ${lastName}`)
    console.log(`email = ${email}`)
    console.log(`password = ${password}`)
    console.log(`phoneNo= ${phoneNo}`)

    data = {}
    data.firstName = firstName;
    data.lastName = lastName;
    data.email = email;
    data.password = password;
    data.phoneNo = phoneNo;
    setData(data);
    
    console.log(data.email)
  }






  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [phoneNo, setPhoneNo] = useState('')
  // const [role, setRole] = useState('')

  // const history = useHistory()

  // const addDeliveryBoy = () => {
  //   if (firstName.length === 0) {
  //     alert('select first name')
  //   } else if (lastName.length === 0) {
  //     alert('select last name')
  //   } else if (email.length===0) {
  //     alert('select email')
  //   } else if(password.length===0){
  //       alert('select password')
  //   }else if(phoneNo.length===0){
  //       alert('select Phone No')
  //   }else if(role.length===0){
  //       alert('select role ')
  //   }else {
     
  //     const data = new FormData()

  //     data.append('firstName', firstName)
  //     data.append('lastName', lastName)
  //     data.append('email', email)
  //     data.append('password', password)
  //     data.append('phoneNo', phoneNo)
  //     data.append('role', role)
      
     

  //     axios.post(url + '/user/register', data).then((response) => {
  //       const result = response.data
  //       if (result.status === 'success') {
  //         alert('successfully added an deliveryBoy')

  //         history.push('/users')
  //       } else {
  //         alert('error while adding deliveryBoy')
  //       }
  //     })
  //   }
  // }








  return (
    <div class="col-md-5 mx-auto py-3 text-black" >
      <h1 className="page-title">Add DeliveryBoy</h1>

      <div className="mb-3">
        <label htmlFor="">First Name</label>
        <input
          onChange={(e) => {
            setFirstName(e.target.value)
          }}
          type="text"
          placeholder="Enter the first name"
          className="form-control"
        />
      </div>
      <div  className="mb-3">
        <label htmlFor="">Last Name</label>
        <input
          onChange={(e) => {
            setLastName(e.target.value)
          }}
          type="text"
          placeholder="Enter the last name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="">Email</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          type="text"
          placeholder="Enter the email"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="">password</label>
        <input 
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          type="password"
          placeholder="Enter the password"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="">phoneNo</label>
        <input
          onChange={(e) => {
            setPhoneNo(e.target.value)
          }}
          type="text"
          placeholder="Enter Phone No"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="">role</label>
        <input
          onChange={(e) => {
            setRole(e.target.value)
          }}
          type="text"
          placeholder="Enter the role"
          className="form-control"
        />
      </div>

      <div className="mb-3" >
        <button onClick={AddDeliveryBoy} className="btn btn-success me-3">
          Add
        </button>

        <Link to="/deliveryBoyList">
          <a className="btn btn-warning">Back</a>
        </Link>
      </div>
    </div>
  )
}

export default AddDeliveryBoy
