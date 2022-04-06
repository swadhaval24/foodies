import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { url } from "../../Constants/Url";
import Navbar2 from "../../Components/C_navbar";
import { useAuthContext } from "../../contexts/AuthContext";

export const Orders = () => {
  const { user } = useAuthContext();
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    axios.get(url + "/order/customer/all/" + user?.id).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setOrders(result.data);
      } else {
        alert("error while loading list of orders");
      }
    });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <section class="header text-center">
      <div class="text-white">
        <Navbar2></Navbar2>
        <div class="row mt-5">
          <div className="col-md-8 mx-auto">
            <div class="card p-3 border-0 shadow">
              <div>
                <div>
                  <table class="table m-2">
                    <thead>
                      <tr>
                        <th scope="col">Menu</th>
                        <th scope="col">Price</th>

                        <th scope="col">Qty</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => {
                        return (
                          <tr>
                            <td>
                              {order?.orderDetails[0]?.selectedMenu?.menuName}
                            </td>
                            <td>{order?.order?.totalPrice}</td>
                            <td>{order?.orderDetails[0]?.quantity}</td>
                            <td>{order?.order?.orderStatus}</td>
                          </tr>
                        );
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
  );
};
