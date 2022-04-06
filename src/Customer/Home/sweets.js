// import axios from 'axios'
// import { useState, useEffect } from 'react'
// // import { Link } from 'react-router-dom'
// import { url } from '../../Constants/Url'
// import MenuTypeRow from './MenuTypeRow'
// import Navbar2 from '../../Components/C_navbar'

// const Sweets = () => {
//   const [menuTypeId,setMenuTypeId]=useState(5)
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

// export default Sweets







import React from "react";
import Navbar2 from "../../Components/C_navbar";
import { Link } from "react-router-dom";
import dessert  from '../Images/Sweets/dessert.jfif'
import Langacha from '../Images/Sweets/Langcha.jpg'
import rasgulla from '../Images/Sweets/rasgulla.jpg'
import rasmalai from '../Images/Sweets/rasmalai.jfif'

const Sweets=()=>{
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
                                        <img src={dessert} className="anchorimages" />
                                    </div>
                                    <h6>dessert</h6>
                                </Link>
                            </div>
                        </td>

                        <td>
                            <div className="anchordiv">
                                <Link className="nav-link" to="/addcart">
                                    <div>
                                        <img src={Langacha} className="anchorimages" />
                                    </div>
                                    <h6>Langacha</h6>
                                </Link>
                            </div>
                        </td>
                        <td>
                            <div className="anchordiv">
                                <Link className="nav-link" to="/addcart">
                                    <div>
                                        <img src={rasgulla} className="anchorimages" />
                                    </div>
                                    <h6>rasgulla</h6>
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className=" anchordiv" >
                                <Link className="nav-link" to="/addcart">
                                    <div>
                                        <img src={rasmalai} className="anchorimages" />
                                    </div>
                                    <h6>rasmalai</h6>
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
export default Sweets;