// import axios from 'axios'
// import { useState, useEffect } from 'react'
// // import { Link } from 'react-router-dom'
// import { url } from '../../Constants/Url'
// import MenuTypeRow from './MenuTypeRow'
// import Navbar2 from '../../Components/C_navbar'

// const Nonveg = () => {
//   const [menuTypeId,setMenuTypeId]=useState(1)
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
//                             { <a href="/HotelMenu" className="btn btn-info">Back</a> }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>


//     // <div>
//     //   <h1 className="page-title">Menu-List</h1>
//     //   <Link to="/AddMenu">
//     //     <a className="btn btn-success">Add Menu</a>
//     //   </Link>
//     //   <Link to="/delete-user">
//     //     <a className="btn btn-success">Delete Menu</a>
//     //   </Link>

//     //   <table className="table table-striped">
//     //     <thead>
//     //       <tr>
//     //         <th>id</th>
//     //         <th>Menu Name</th>
//     //         <th>Price</th>
//     //         <th>Image_Name</th>
//     //         <th>Description</th>
//     //       </tr>
//     //     </thead>
//     //     <tbody>
//           // {menu.map((menu) => {
//           //   return <MenuRow menu={menu} />
//           // })}
//     //     </tbody>
//     //   </table>
//     //   <a href="/AdminHome" className="btn btn-info">Back</a>
//     // </div>
//   )
// }

// export default Nonveg
















import React from "react";
import Navbar2 from "../../Components/C_navbar";
import { Link } from "react-router-dom";
import chikencurry from '../Images/Nonveg/chikencurry.jpg'
import kabab from '../Images/Nonveg/kabab.jfif'
import MurghMusallam from '../Images/Nonveg/MurghMusallam.jpg'
import AddCart from "../Cart/AddCart";

const Nonveg=()=>{
    return(
        <div className="container">
        <Navbar2></Navbar2>
        <div className="container">
        
        <div className="container">

            <table>
                <tr>
                    <td>
                        <div className=" anchordiv" >
                        <a href="/addcart" className="btn btn-success">addcart</a>
                            {/* <Link className="nav-link" to="/addcart"> */}
                                <div >
                                    <img src={chikencurry} className="anchorimages "  />
                                </div>
                                <h6>ChikenCurry</h6>
                               
                            {/* </Link> */}
                        </div>
                       {/* <a href="/addcart" className="btn btn-success">addcart</a> */}
                       {/* <Link className="nav-link" to="/addcart"> */}
                    </td>

                    <td>
                        <div className="anchordiv">
                        <a href="/addcart" className="btn btn-success">addcart</a>
                            {/* <Link className="nav-link" to="/addcart"> */}
                                <div>
                                    <img src={kabab} className="anchorimages" />
                                </div>
                                <h6>kabab</h6>
                            {/* </Link> */}
                        </div>
                        
                    </td>
                    <td>
                        <div className="anchordiv">
                        <a href="/addcart" className="btn btn-success">addcart</a>
                            {/* <Link className="nav-link" to="/addcart"> */}
                                <div>
                                    <img src={MurghMusallam} className="anchorimages" />
                                </div>
                                <h6>MurghMusallam</h6>
                            {/* </Link> */}
                        </div>
                        
                    </td>
                </tr>
               
            </table>

        </div>
    </div>

 </div >
    )
}
export default Nonveg;