import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { url } from "../../Constants/Url";
import MenuRow from "./MenuRow";
import Navbar3 from "../../Components/A_navbar";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    console.log(`Menu is loaded`);
    getMenu();
  }, []);

  const getMenu = () => {
    axios.get(url + "/menu/all").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setMenu(result.data);
      } else {
        alert("error while loading list of menu");
      }
    });
  };

  const deleteMenu = async (id) => {
    console.log(id);
    await axios.delete(url + `/menu/delete/${id}`);
    getMenu();
  };

  return (
    <section class="pb-5 header text-center">
      <Navbar3 />
      <div class="container py-5 text-white">
        <div class="row">
          <div class="col-lg-9 mx-auto">
            <div class="card border-0 shadow p-2">
              <div>
                <div>
                  <table className="table m-0 table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Menu_Id</th>
                        <th scope="col">Menu Name</th>
                        <th scope="col">price</th>
                        <th scope="col">Image</th>
                        <th scope="col">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {menu.map((menu) => {
                        return (
                          <MenuRow
                            menu={menu}
                            deleteMenu={() => deleteMenu(menu?.id)}
                          />
                        );
                      })}
                    </tbody>
                  </table>
                  <Link to="/AddMenuL">
                    <button type="button" class="btn btn-success btn-sm">
                      Add_Menu
                    </button>
                  </Link>
                  {/* <a href="/HotelMenu" className="btn btn-info">Back</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <div>
    //   <h1 className="page-title">Menu-List</h1>
    //   <Link to="/AddMenu">
    //     <a className="btn btn-success">Add Menu</a>
    //   </Link>
    //   <Link to="/delete-user">
    //     <a className="btn btn-success">Delete Menu</a>
    //   </Link>

    //   <table className="table table-striped">
    //     <thead>
    //       <tr>
    //         <th>id</th>
    //         <th>Menu Name</th>
    //         <th>Price</th>
    //         <th>Image_Name</th>
    //         <th>Description</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    // {menu.map((menu) => {
    //   return <MenuRow menu={menu} />
    // })}
    //     </tbody>
    //   </table>
    //   <a href="/AdminHome" className="btn btn-info">Back</a>
    // </div>
  );
};

export default Menu;
