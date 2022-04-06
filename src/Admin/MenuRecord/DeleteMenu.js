// import axios from 'axios'
// import { useState } from "react";
// import { useHistory } from 'react-router-dom';

// const DeleteMenu=()=>{
//     let history = useHistory();
//     const [menuId,setMenuId] = useState(sessionStorage.getItem("menuId"))
//     const [menu]=useState([])
//     const deleteMenu = () => {
//         if (menuId.length === 0) {
//             alert('please enter menuId')
//         } else {
           
//             const body = new FormData()
//             body.append('menuId', menuId)
        
         

//             axios.delete(`http://localhost:8080/menu/delete${menuId}`,{'menuId':menuId,'quantity':quantity,'userId':userId} , {"Content-Type": "application/json"}).then((response) => {
               

//                console.log(response);
//                 const result = response.data
//                 // sessionStorage.setItem("userId" , result.data.id)
//                 if (result.status === 'success') {
                    
//                     alert("Your Menu Deleted Successfully !!!")
    
//                         history.push('/MenuList')       
//                 } else {
//                     alert(' Failed')
//                 }
//             }
//             )
//         }


//     }
//     return(
//         <section className="vh-100" >
//         <div className="container py-5 h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col col-xl-10">
//               <div className="card">
//                 <div className="row g-0">
//                   <div className="flex align-items-center">
//                     <div className="card-body p-4 p-lg-5 text-black">
      
//                       <form class="mx-1 mx-md-4">
//                         <h5 className="fw-normal mb-3 pb-3">YourCart</h5>
      
//                         <div className="form-outline mb-4">
//                           <input className="email" id="form2Example17" class="form-control form-control-lg" placeholder={cart.menuid}
//                           onChange={(e)=>{
//                             setMenuId(e.target.value);
//                         }} />
//                           <label className="form-label" for="form2Example17" 
//                                   >MenuId</label>
//                         </div>
                        
      
//                         <div className="form-outline mb-4">
//                           <input type="number" id="form2Example27" class="form-control form-control-lg" 
//                            onChange={(e)=>{
//                            setQuantity(e.target.value);
//                             }}/>
//                           <label className="form-label" for="form2Example27" 
//                           >quantity</label>
//                         </div>
//                         <div className="form-outline mb-4">
//                           <input type="text" id="form2Example27" class="form-control form-control-lg" placeholder={cart.userid}
//                            onChange={(e)=>{
//                            setUserId(e.target.value);
//                             }}/>
//                           <label className="form-label" for="form2Example27" 
//                           >userId</label>
//                         </div>
      
//                         <div className="pt-1 mb-4">
//                           <button onClick={deleteMenu} className="btn btn-success" type="button">Save</button>
//                         </div>
//                       </form>
      
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
// }

// export default DeleteMenu
