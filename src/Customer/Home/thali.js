// import axios from 'axios'
// import { useState, useEffect } from 'react'
// // import { Link } from 'react-router-dom'
// import { url } from '../../Constants/Url'
// import MenuTypeRow from './MenuTypeRow'
// import Navbar2 from '../../Components/C_navbar'

// const Thali = () => {
//   const [menuTypeId,setMenuTypeId]=useState(6)
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

// export default Thali







import React from "react";

import { Link } from "react-router-dom";
import Navbar2 from "../../Components/C_navbar";
import kolhapuri from '../Images/Thali/kolhapuri.jpg'
import kokani from '../Images/Thali/kokani.jpg' 
import satari from '../Images/Thali/satari.jpg' 
import punjabi from '../Images/Thali/punjabi.jpg'  
import puranpoli from '../Images/Thali/puran-poli.jpg'
import gujarati from '../Images/Thali/gujarati-thali.jpg'

const Thali=()=>{

    
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
                                        <img src={kolhapuri} className="anchorimages" />
                                    </div>
                                    <h6>kolhapuri</h6>
                                </Link>
                            </div>
                        </td>

                        <td>
                            <div className="anchordiv">
                                <Link className="nav-link" to="/addcart">
                                    <div>
                                        <img src={kokani} className="anchorimages" />
                                    </div>
                                    <h6>kokani</h6>
                                </Link>
                            </div>
                        </td>
                        <td>
                            <div className="anchordiv">
                                <Link className="nav-link" to="/addcart">
                                    <div>
                                        <img src={satari} className="anchorimages" />
                                    </div>
                                    <h6>satari</h6>
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className=" anchordiv" >
                                <Link className="nav-link" to="/addcart">
                                    <div>
                                        <img src={punjabi} className="anchorimages" />
                                    </div>
                                    <h6>punjabi</h6>
                                </Link>
                            </div>
                        </td>

                        <td>
                            <div className="anchordiv">
                                <Link className="nav-link" to="/addcart">
                                    <div>
                                        <img src={puranpoli} className="anchorimages" />
                                    </div>
                                    <h6>puranpoli</h6>
                                </Link>
                            </div>
                        </td>
                        <td>
                            <div className="anchordiv">
                                <Link className="nav-link" to="/signin">
                                    <div>
                                        <img src={gujarati} className="anchorimages" />
                                    </div>
                                    <h6>gujarati</h6>
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
export default Thali;