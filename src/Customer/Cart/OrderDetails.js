import { Link } from "react-router-dom";
import AddressRow from "../Address/AddressRow";
import CartRow from "./CartRow";
import axios from "axios";
import { useEffect } from "react";
import { url } from "../../Constants/Url";
import { useState } from "react";
import Navbar2 from "../../Components/C_navbar";
import { useAuthContext } from "../../contexts/AuthContext";

const OrderDetails = () => {
  const { user } = useAuthContext();
  const [userid] = useState(sessionStorage.getItem("userId"));
  const [cart, setCart] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);

  const [addresse, setAddresse] = useState([]);
  useEffect(() => {
    console.log(`User is loaded`);
    getAddresse();
    console.log(`Cart is loaded`);
    getCart();
  }, []);

  const deleteAddress = async (id) => {
    await axios.delete(url + `/address/delete/${addresse.id}`);
    alert("successfully deleted an menu");
  };

  const getAddresse = () => {
    axios.get(url + `/address/all/${user?.id}`).then((response) => {
      const result = response.data;
      sessionStorage.setItem("addressId", result.data.addressId);
      if (result.status === "success") {
        setAddresse(result.data);
      } else {
        alert("error while loading list of users");
      }
    });
  };
  const getCart = () => {
    axios.get(url + `/cart/all/${userid}`).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setCart(result.data);
      } else {
        alert("error while loading list of cart");
      }
    });
  };

  useEffect(() => {
    (async () => {
      let total = 0;
      cart.map((item) => {
        total += item?.selectedMenu?.price * item?.quantity;
      });
      setGrandTotal(total);
    })();
  }, [cart]);

  return (
    <section className="h-100 bg-dark">
      <Navbar2></Navbar2>

      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card card-registration my-4">
            <div className="row g-0">
              <div className="col-xl-6 d-none d-xl-block">
                <h3 className="m-5 text-uppercase">Your Orders</h3>
                <section class="pb-5 header text-center">
                  <div class="container py-3 text-white">
                    <div class="row">
                      <div class="col-lg-9 mx-auto">
                        <div class="card border-0 shadow">
                          <table class="table m-0">
                            <thead>
                              <tr>
                                <th scope="col">cart_Id</th>
                                <th scope="col">MenuType</th>

                                <th scope="col">Menu Name</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Price</th>
                                <th scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cart.map((cart) => {
                                return <CartRow cart={cart} />;
                              })}
                            </tbody>
                          </table>
                          <div className="bg-secondary py-1">
                            Grand Total : {grandTotal}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="col-xl-6">
                <div className="card-body p-md-5 text-black">
                  <h3 className="mb-5 text-uppercase">Your Address</h3>
                  <section class="pb-5 header text-center">
                    <section>
                      <div>
                        <table class="table m-0">
                          <thead>
                            <tr>
                              <th scope="col">AddresLine</th>
                              <th scope="col">Address Line 2</th>
                              <th scope="col">City</th>
                              <th scope="col">State</th>
                              <th scope="col">Country</th>
                              <th scope="col">pinCode</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              {/* <td>{addresse.id}</td> */}

                              <td>{addresse[0]?.addressLine1}</td>
                              <td>{addresse[0]?.addressLine2}</td>
                              <td>{addresse[0]?.city}</td>
                              <td>{addresse[0]?.state}</td>
                              <td>{addresse[0]?.country}</td>
                              <td>{addresse[0]?.pinCode}</td>

                              <td>
                                <button
                                  class="btn btn-danger btn-sm"
                                  onClick={() => deleteAddress(addresse[0]?.id)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </section>

                    <div className="d-flex justify-content-center gap-3 m-2">
                      <Link to="/Payment">
                        <button type="button" class="btn btn-success btn-sm">
                          Confirm Order
                        </button>
                      </Link>
                      <Link to="/AddAddress">
                        <button type="button" class="btn btn-info btn-sm">
                          Add Address
                        </button>
                      </Link>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
