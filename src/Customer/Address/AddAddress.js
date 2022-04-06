import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../Address/Address.css";

const AddAddress = () => {
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [address, SetAddress] = useState({});
  let [data, setData] = useState(undefined);

  const navigate = useNavigate();
  useEffect(() => {
    const id = sessionStorage.getItem("userId");
    // axios.get(`http://localhost:8080/address/add/${id}` ).then((Response)=>{
    //     address.addressLine1 = Response.data.data.addressLine1;
    //     address.addressLine2 = Response.data.data.addressLine2;
    //     address.city = Response.data.data.city;
    //     address.state = Response.data.data.state;
    //     address.country = Response.data.data.country;
    //     address.pinCode= Response.data.data.pinCode

    //     SetAddress(address);
    //    })

    console.log(`addressLine1 = ${addressLine1}`);
    if (data != undefined) {
      axios
        .post(
          `http://localhost:8080/address/add/${id}`,
          {
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            city: city,
            state: state,
            country: country,
            pinCode: pinCode,
          },
          { "Content-Type": "application/json" }
        )
        .then((Response) => {
          // axios.post(`http://localhost:8080/address/add` ,{'addressLine1':addressLine1,'addressLine2':addressLine2,'city':city,'state': state ,'country':country,'pinCode':pinCode},{"Content-Type": "application/json"}).then((Response)=>{
          // alert("Address Added Successfully !!!")
          Swal.fire("Success", "Address Added successful");
          navigate("/OrderDetails");
        });
    }
  }, [data]);

  const addUserAddress = (e) => {
    if (addressLine1.length === 0) {
      alert("select Address name");
    } else if (city.length === 0) {
      alert("select city");
    } else if (state.length === 0) {
      alert("select state");
    } else if (pinCode.length === 0) {
      alert("Enter pincode ");
    } else {
      e.preventDefault();
      console.log(`addressLine1 = ${addressLine1}`);
      console.log(`addressLine1 = ${addressLine2}`);
      console.log(`city = ${city}`);
      console.log(`state= ${state}`);
      console.log(`country = ${country}`);
      console.log(`pinCode= ${pinCode}`);

      data = {};
      data.addressLine1 = addressLine1;
      data.addressLine2 = addressLine2;
      data.city = city;
      data.state = state;
      data.country = country;
      data.pinCode = pinCode;
      setData(data);
    }
  };

  return (
    <section className="h-100 bg-dark" class="myStyle">
      <Link to="/OrderDetails">
        <button type="button" class="btn btn-success btn-sm">
          Already Have Address..click
        </button>
      </Link>

      <h3 className="mb-5 text-uppercase">Address : </h3>

      <div className="form-outline mb-4">
        <input
          type="text"
          id="form3Example97"
          className="form-control form-control-lg"
          onChange={(e) => {
            setAddressLine1(e.target.value);
          }}
        />
        <label className="form-label" for="form3Example97">
          AddressLine 1
        </label>
      </div>

      <div>
        <input
          type="text"
          id="form3Example97"
          className="form-control form-control-lg"
          onChange={(e) => {
            setAddressLine2(e.target.value);
          }}
        />
        <label className="form-label" for="form3Example97">
          AddressLine 2
        </label>
      </div>

      <div>
        <input
          type="text"
          id="form3Example97"
          className="form-control form-control-lg"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <label className="form-label" for="form3Example97">
          City
        </label>
      </div>
      <div>
        <input
          type="text"
          id="form3Example97"
          className="form-control form-control-lg"
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
        <label className="form-label" for="form3Example97">
          State
        </label>
      </div>
      <div>
        <input
          type="text"
          id="form3Example97"
          className="form-control form-control-lg"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <label className="form-label" for="form3Example97">
          Country{" "}
        </label>
      </div>
      <div className="form-outline mb-4">
        <input
          type="text"
          id="form3Example97"
          className="form-control form-control-lg"
          onChange={(e) => {
            setPinCode(e.target.value);
          }}
        />
        <label className="form-label" for="form3Example97">
          pinCode{" "}
        </label>
      </div>

      <div className="d-flex justify-content-end pt-3">
        <Link to="/login">
          <button
            type="button"
            className="btn btn-warning btn-lg ms-2"
            onClick={addUserAddress}
          >
            Submit
          </button>
        </Link>
        {/* <a href="/OrderDetails "> save</a> */}
      </div>
    </section>
  );
};

export default AddAddress;
