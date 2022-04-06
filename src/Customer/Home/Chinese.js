// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { url } from '../../Constants/Url'
// import MenuTypeRow from './MenuTypeRow'
// import Navbar2 from '../../Components/C_navbar'

// const Chineese = () => {
//   const [menuTypeId,setMenuTypeId]=useState(3)
//   const [menutype, setMenuType] = useState([])

//   useEffect(() => {
//     console.log(`menutype is loaded`)
//     getMenutype()
//   }, [])

//   const getMenutype = () => {
//     axios.get(url + `/menutype/allMenuByType/${menuTypeId}`).then((response) => {
//       const result = response.data
//       if (result.status === 'success') {
//         setMenuType(result.data)
//       } else {
//         alert('error while loading list of menutype')
//       }
//     })
//   }

//   return (

//     <section class="pb-5 header text-center">
//                   <Navbar2/>
//     <div class="container py-5 text-white"  className="RowStyle">
  
//         <div class="row">
//             <div class="col-lg-9 mx-auto">
//                 <div class="card border-0 shadow">
//                     <div >

                        
//                         <div >
//                             <table class="table m-0" class="table table-hover">
//                                 <thead>
//                                     <tr>
//                                         <th scope="col">Menu_Id</th>
//                                         <th scope="col">Menu Name</th>
//                                         <th scope="col">price</th>
//                                         <th scope="col">Image</th>
//                                         <th scope="col">Description</th>
                            
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                 {menutype.map((menutype) => {
//                                    return <MenuTypeRow menutype={menutype} />
//                                  })} 
//                                 </tbody>
//                             </table>
//                             {/* <a href="/HotelMenu" className="btn btn-info">Back</a> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>
//   )
// }

// export default Chineese






import React from "react";
import Navbar2 from "../../Components/C_navbar";
import { Link } from "react-router-dom";
import lollipop from '../Images/Chinnes/lollipop.jfif'
import noodles from '../Images/Chinnes/noodles.jfif'
import soup from '../Images/Chinnes/soup.jfif'
import triplerice from '../Images/Chinnes/tripleRice.jpg'

// const chinnes=()=>{
//     return(
//         <div className="container">
//            <Navbar2></Navbar2>
//             <div className="container">
            
//             <div className="container">

//                 <table>
//                     <tr>
//                         <td>
//                             <div className=" anchordiv" >
//                                 <Link className="nav-link" to="/signin">
//                                     <div>
//                                         <img src={lollipop} className="anchorimages" />
//                                     </div>
//                                     <h6>lollipop</h6>
//                                 </Link>
//                             </div>
//                         </td>

//                         <td>
//                             <div className="anchordiv">
//                                 <Link className="nav-link" to="/signin">
//                                     <div>
//                                         <img src={noodles} className="anchorimages" />
//                                     </div>
//                                     <h6>noodles</h6>
//                                 </Link>
//                             </div>
//                         </td>
//                         <td>
//                             <div className="anchordiv">
//                                 <Link className="nav-link" to="/signin">
//                                     <div>
//                                         <img src={soup} className="anchorimages" />
//                                     </div>
//                                     <h6>soup</h6>
//                                 </Link>
//                             </div>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <div className=" anchordiv" >
//                                 <Link className="nav-link" to="/signin">
//                                     <div>
//                                         <img src={triplerice} className="anchorimages" />
//                                     </div>
//                                     <h6>triplerice</h6>
//                                 </Link>
//                             </div>
//                         </td>

                        
//                     </tr>
//                 </table>

//             </div>
//         </div>

//      </div >
//     )
// }





const Chinese=()=>{
  return(
      <div className="container">
     <Navbar2></Navbar2>
      <div className="container">
      
      <div className="container">

          <table>
              <tr>
                  <td>
                      <div className=" anchordiv" >
                          <Link className="nav-link" to="/addcart">
                              <div>
                                  <img src={lollipop} className="anchorimages" />
                              </div>
                              <h6>lollipop</h6>
                          </Link>
                      </div>
                  </td>

                  <td>
                      <div className="anchordiv">
                          <Link className="nav-link" to="/addcart">
                              <div>
                                  <img src={noodles} className="anchorimages" />
                              </div>
                              <h6>noodles</h6>
                          </Link>
                      </div>
                  </td>
                  <td>
                      <div className="anchordiv">
                          <Link className="nav-link" to="/addcart">
                              <div>
                                  <img src={soup} className="anchorimages" />
                              </div>
                              <h6>soup</h6>
                          </Link>
                      </div>
                  </td>
              </tr>
              <tr>
                 

                  <td>
                      <div className="anchordiv">
                          <Link className="nav-link" to="/signin">
                              <div>
                                  <img src={triplerice} className="anchorimages" />
                              </div>
                              <h6>triplerice</h6>
                          </Link>
                      </div>
                  </td>
                 
              </tr>
          </table>

      </div>
  </div>

</div >
  )
}




export default Chinese;