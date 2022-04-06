// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { url } from '../../Constants/Url'
// import MenuTypeRow from './MenuTypeRow'
// import Navbar2 from '../../Components/C_navbar'

// const Roti = () => {
//   const [menuTypeId]=useState(8)
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

// export default Roti











import React from "react";
import Navbar2 from "../../Components/C_navbar";
import { Link } from "react-router-dom";
import Bhakari from '../Images/Roti/Bhakari.jfif'
import Butturnan from '../Images/Roti/butturnan.jfif'
import roti from '../Images/Roti/roti.jfif'

const Roti=()=>{
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
                                    <img src={Bhakari} className="anchorimages" />
                                </div>
                                <h6>Bhakari</h6>
                            </Link>
                        </div>
                    </td>

                    <td>
                        <div className="anchordiv">
                            <Link className="nav-link" to="/addcart">
                                <div>
                                    <img src={Butturnan} className="anchorimages" />
                                </div>
                                <h6>Butturnan</h6>
                            </Link>
                        </div>
                    </td>
                    <td>
                        <div className="anchordiv">
                            <Link className="nav-link" to="/addcart">
                                <div>
                                    <img src={roti} className="anchorimages" />
                                </div>
                                <h6>Roti</h6>
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
export default Roti;