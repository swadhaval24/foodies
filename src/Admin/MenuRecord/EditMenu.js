import axios from 'axios'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as notification from "../../Constants/notification"
const EditMenu = () => {
  const navigate = useNavigate();
    const [menuId,setMenuId]=useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [menu, setMenu] = useState([])
    const changeMenu = () => {
        if (price.length === 0) {
           notification.info('please enter price')
        } else if (description.length === 0) {
          notification.info('Enter new description')
        } else {
           
         const menuId=sessionStorage.getItem("menuId");
            const body = new FormData()
            body.append('price', price)
           
            body.append('description', description)
         

            axios.post(`http://localhost:8080/menu/edit/${menuId}`,{'price':price,'description':description} , {"Content-Type": "application/json"}).then((response) => {
               

               console.log(response);
                const result = response.data
                // sessionStorage.setItem("userId" , result.data.id)
                if (result.status === 'success') {
                    console.log("update Successfull!!!!!")
                    notification.success("Your Menu changed Successfully !!!")
                       navigate('/menuList') 
                } else {
                  notification.danger('Edit menu failed')
                }
            }
            )
        }


    }
    return(
        <section className="vh-100" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="row g-0">
                  <div className="flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
      
                      <form class="mx-1 mx-md-4">
                        <h2 className="fw-normal mb-3 pb-3"><b>Update Menu</b> </h2>
      
                        <div className="form-outline mb-4">
                          <input className="text" id="form2Example17" class="form-control form-control-lg" 
                          onChange={(e)=>{
                            setPrice(e.target.value);
                        }} />
                          <label className="form-label" for="form2Example17" 
                                  ><b>Price</b></label>
                        </div>
                        
      
                        <div className="form-outline mb-4">
                          <input type="text" id="form2Example27" class="form-control form-control-lg" 
                           onChange={(e)=>{
                           setDescription(e.target.value);
                            }}/>
                          <label className="form-label" for="form2Example27" 
                          ><b>Description</b></label>
                        </div>
      
                        <div className="pt-1 mb-4">
                          <button onClick={changeMenu} className="btn btn-success" type="button">Save Changes</button>
                          
                        </div>
                        <div className="pt-1 mb-4">
                            <Link to="/menuList">
                          <button className="btn btn-dark" type="button">Back To MenuList</button>
                          </Link>
                        </div>
                      </form>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default EditMenu


// import React from 'react';
// import axios from 'axios';
// import { useState , useEffect  } from 'react'
// import { useHistory } from 'react-router-dom';

// const EditMenu=()=>{
//     const [price, setPrice] = useState('')
//   const [description, setDescription] = useState('')
//   const [menu,setMenu]=useState('')
  
//  const[newprice , setNewPrice] = useState(false)
//  const[newdescription , setNewDescription] = useState(false)
//  let [data , setData] = useState(undefined)

//   const history = useHistory();
  
//   useEffect(()=>{
   
//           const id = sessionStorage.getItem("userId");
//         axios.get(`http://localhost:8080/user/${id}` ).then((Response)=>{

         
//             menu.price = Response.data.data.price;
//             menu.description = Response.data.data.description;
          
          
//          setMenu(menu);
       
//         })

//         if(data != undefined){
//             console.log("----->>>>>>>>>")
//             console.log(data)
//             axios.put(`http://localhost:8080/user/edit/${id}` ,{'price':data.price,'description':data.description},{"Content-Type": "application/json"}).then((Response)=>{
              
//               })
//         }
    
//   },[data])

//   const updateMenu = () => {
  
//     console.log(`price = ${price}`)
//     console.log(`description = ${description}`)
    
//     data = {}
    
//     console.log(menu);
//      const newprice = newprice?price:menu.price;
//      const newdescription = newdescription?description:menu.description;

//     data.price = newprice;
//     data.description = newdescription;
//     setData(data);
   
//   }


//     return(
//         <div class="container rounded bg-white mt-5 mb-5">
//     <div class="row">
//       <div class="col-md-3 border-right">
        
//       </div>
//             <div class="col-md-5 border-right">
//                <div class="p-3 py-5">
//                   <div class="d-flex justify-content-between align-items-center mb-3">
//                     <h4 class="text-right">Menu Update</h4>
//                   </div>
//                <div class="row mt-2">
//                   <div class="col-md-6"><label class="labels">Price</label>
//                      <input type="text" class="form-control" placeholder="new Price" value={price}
//                      onChange={(e) => {
//                         setPrice(e.target.value);
//                         setNewPrice(true)
//                      }}
//                      />
//                   </div>
//                      <div class="col-md-6"><label class="labels">Description</label>
//                      <input type="text" class="form-control" value={description} placeholder="Description"
//                      onChange={(e) => {
//                         setDescription(e.target.value);
//                         setNewDescription(true)
//                      }}
//                      />
//                    </div>
//                    </div>
                    
                        
//                         <div class="mt-5 text-center"><button type="submit" onClick={updateMenu} class="btn btn-primary profile-button" type="button">Save Menu</button>
//                         </div>
//                </div>
//        </div>
//     </div>
//     </div>

//     )
// }

// export default EditMenu