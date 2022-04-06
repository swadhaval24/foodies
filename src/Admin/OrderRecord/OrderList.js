import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { url } from "../../Constants/Url";
import { useAuthContext } from "../../contexts/AuthContext";
import Navbar3 from "../../Components/A_navbar";

export const OrderList = () => {
  const { user } = useAuthContext();
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    axios.get(url + "/order/all").then((response) => {
      const result = response.data;
      console.log(result);
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
    <section class="pb-5 header text-center">
      <div class="text-white">
        <Navbar3 />
        <div className="container">
          <div class="row">
            <div class="col-lg-9 mx-auto my-5">
              <div class="card p-3 border-0 shadow">
                <div>
                  <div>
                    <table class="table m-2">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Menu</th>
                          <th scope="col">Price</th>

                          <th scope="col">Qty</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                {order?.order?.customer?.firstName}{" "}
                                {order?.order?.customer?.lastName}
                              </td>
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
      </div>
    </section>
  );
};
