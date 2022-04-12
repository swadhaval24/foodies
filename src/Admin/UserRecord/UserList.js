import axios from "axios";
import { useState, useEffect } from "react";
import Navbar3 from "../../Components/A_navbar";

import { url } from "../../Constants/Url";
import UserRow from "./UserRow";
import * as notification from "../../Constants/notification"
const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log(`User is loaded`);
    getUsers();
  }, []);

  const getUsers = () => {
    axios.get(url + "/admin/userList").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setUsers(result.data);
      } else {
        notification.danger("error while loading list of users");
      }
    });
  };

  return (
    <section class="pb-5 header text-center">
      <Navbar3></Navbar3>
      <div class="container py-5 text-white">
        <div class="row">
          <div class="col-lg-9 mx-auto">
            <div class="card border-0 shadow">
              <div>
                <div>
                  <table class="m-0 table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Customer_Id</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th>
                        <th scope="col">PhoneNo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => {
                        return <UserRow user={user} />;
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <div>
    //   <h1 className="page-title">User-List</h1>

    //   <Link to="/add-user">
    //     <a className="btn btn-success">Delete User</a>
    //   </Link>

    //   <table className="table table-striped">
    //     <thead>
    //       <tr>
    //         <th>id</th>
    //         <th>first Name</th>
    //         <th>last Name</th>
    //         <th>Email</th>
    //         <th>Phone No</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {users.map((user) => {
    //         return <UserRow user={user} />
    //       })}
    //     </tbody>

    //   </table>
    //   <a href="/AdminHome" className="btn btn-info">Back</a>
    // </div>
  );
};

export default UserList;
