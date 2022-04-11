import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../../Constants/Url'
import MenuTypeRow from '../MenuRecord/MenuTypeRow'

const MenuType = () => {

  const [menuType, setMenuType] = useState([]);

  useEffect(() => {
    // const id = sessionStorage.getItem("menutypeId");
    console.log(`MenuType is loaded`);
    getMenuType()
  }, []);

  const getMenuType = () => {
    axios.get(url + `/menutype/all`).then((response) => {
      // axios.get(url + `/menutype/all/${id}`).then((response) => {
      const result = response.data;
      console.log(result);
      if (result.status === 'success') {
        setMenuType(result?.data);
      } else {
        alert('error while loading list of menutypes')
      }
    });
  };

  return (

    // <section class="pb-5 header text-center">
    // <div class="container py-5 text-white">

    //     <div class="row">
    //         <div class="col-lg-9 mx-auto">
    //             <div class="card border-0 shadow">
    //                 <div >


    //                     <div >
    //                         <table class="table m-0">
    //                             <thead>
    //                                 <tr>
    //                                     <th scope="col">MenuType_Id</th>
    //                                     <th scope="col">MenuType_Name</th>


    //                                 </tr>
    //                             </thead>
    //                             <tbody>
    //                             {menuType.map((menutype) => {
    //                                return <MenuTypeRow menutype={menutype} />
    //                              })}


    //                             </tbody>
    //                         </table>

    //                         <a href="/AddMenuType" className="btn btn-dark">Add_MenuType</a>

    //                         <a href="/HotelMenu" className="btn btn-info">Back</a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    // </section>

    <div>


      <div >
        <table class="table m-0">
          <thead>
            <tr>
              <th scope="col">MenuType_Id</th>
              <th scope="col">MenuType_Name</th>


            </tr>
          </thead>
          <tbody>
            {menuType.map((menutype) => {
              return (
                <MenuTypeRow
                  menutype={menutype}
                />
              );
            })}
          </tbody>
        </table>

        <a href="/AddMenuType" className="btn btn-dark">Add_MenuType</a>

        <a href="/HotelMenu" className="btn btn-info">Back</a>
      </div>
    </div>

  );
};

export default MenuType;
