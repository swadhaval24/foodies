import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { url } from "../../Constants/Url";
import DeliveryBoyRow from "../DeliveryBoyRecord/DeliveryBoyRow";
import Navbar3 from "../../Components/A_navbar";
import { useHistory } from "react-router";
import * as notification from "../../Constants/notification"

const DeliveryBoyList = () => {
  const [deliveryBoyList, setDeliveryBoyList] = useState([]);

  useEffect(() => {
    console.log(` is loaded`);
    getDeliveryBoyList();
  }, []);

  const getDeliveryBoyList = () => {
    axios
      .get(url + "/admin/deliveryBoyList")
      .then((response) => {
        const result = response?.data;
        if (result?.status === "success") {
          setDeliveryBoyList(result.data);
        } else {
          notification.danger("error while loading list of DeliveryBoyList");
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
                  <table class="table m-0" className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">DeliveryBoy_Id</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th>
                        <th scope="col">PhoneNo</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deliveryBoyList.map((user) => {
                        return <DeliveryBoyRow user={user} />;
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link to="/AddDeliveryBoy">
        <button type="button" class="btn btn-success btn-sm">
          Add DeliveryBoy
        </button>
      </Link>
    </section>
  );
};

export default DeliveryBoyList;
