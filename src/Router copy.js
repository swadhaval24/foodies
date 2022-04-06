import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar1 from "./Components/Navbar1";
import About from "./Common/AboutUs";
import Contact from "./Common/ContactUs";
import Signin from "./User/Signin";
import Signup from "./User/Signup";
import UpdateProfile from "./User/UpdateProfile";
import AdminHome from "./Admin/Home/AdminHomePage";
import CustomerHome from "./Customer/Home/CustomerHomePage";
import Veg from "./Customer/Home/Veg";
import Nonveg from "./Customer/Home/Nonveg";
import SouthIndian from "./Customer/Home/Southindian";
import Thali from "./Customer/Home/thali";
import Rice from "./Customer/Home/Rice";
import Roti from "./Customer/Home/Roti";
import Sweets from "./Customer/Home/sweets";
import Chinese from "./Customer/Home/Chinese";
import UserList from "./Admin/UserRecord/UserList";
import DeliveryBoyList from "./Admin/DeliveryBoyRecord/DeliveryBoyList";
import HotelMenu from "./Admin/MenuRecord/HotelMenu";
import MenuType from "./Admin/MenuRecord/MenuTypeList";
import Menu from "./Admin/MenuRecord/MenuList";
import ForgotPassword from "./User/ForgotPassword";
import AddCart from "./Customer/Cart/AddCart";
import AddAddress from "./Customer/Address/AddAddress";
import OrderDetails from "./Customer/Cart/OrderDetails";
import AddMenu from "./Admin/MenuRecord/AddMenuL";
import AddMenuType from "./Admin/MenuRecord/AddMenuType";
import AddDeliveryBoy from "./Admin/DeliveryBoyRecord/AddDeliveryBoy";
import Logout from "./User/Logout";
import ShowCart from "./Customer/Cart/ShowCart";
import DeliveryHome from "./Delivery/Home/DeliveryBoyHomePage";
import AllOrdersRecord from "./Delivery/Orders/AllOrdersRecord";
import AssignOrder from "./Delivery/Orders/AssignOrder";
import Payment from "./Customer/Payment/Payment";
import EditMenu from "./Admin/MenuRecord/EditMenu";
import { PrivateRoute } from "./routes/PrivateRoute";
import ReactSwitch from "react-switch";
import Home from "./Common/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/ForgotPassword" element={<ForgotPassword />} />

        <Route exact path="/AddMenuType" element={<AddMenuType />} />
        <Route exact path="/AddMenuL" element={<AddMenu />} />

        <Route exact path="/MenuTypeList" element={<MenuType />} />
        <Route exact path="/EditMenu" element={<EditMenu />} />
        <Route exact path="/HotelMenu" element={<HotelMenu />} />

        {/* <Route exact path="/CustomerHomePage" element={<CustomerHome />} /> */}
        <Route
          exact
          path="/CustomerHomePage"
          element={
            <PrivateRoute>
              <CustomerHome />
            </PrivateRoute>
          }
        />

        <Route exact path="/Veg" element={<Veg />} />

        <Route exact path="/Thali" element={<Thali />} />

        <Route exact path="/Nonveg" element={<Nonveg />} />
        {/* <!--chinnes --> */}
        <Route exact path="/Chinese" element={<Chinese />} />

        <Route exact path="/sweets" element={<Sweets />} />
        <Route exact path="/Southindian" element={<SouthIndian />} />
        <Route exact path="/Roti" element={<Roti />} />
        <Route exact path="/Rice" element={<Rice />} />

        <Route exact path="/updateprofile" element={<UpdateProfile />} />

        <Route exact path="/AddCart" element={<AddCart />} />
        <Route exact path="/AddAddress" element={<AddAddress />} />
        <Route exact path="/OrderDetails" element={<OrderDetails />} />
        <Route exact path="/Payment" element={<Payment />} />

        <Route exact path="/Navbar1" element={<Navbar1 />} />

        <Route exact path="/AdminHomePage" element={<AdminHome />} />
        <Route exact path="/UserList" element={<UserList />} />
        <Route exact path="/MenuList" element={<Menu />} />

        <Route exact path="/DeliveryBoyList" element={<DeliveryBoyList />} />
        <Route exact path="/AddDeliveryBoy" element={<AddDeliveryBoy />} />

        {/* delivery boy pages  */}
        <Route exact path="/DeliveryBoyHomePage" element={<DeliveryHome />} />
        <Route exact path="/AllOrdersRecord" element={<AllOrdersRecord />} />
        <Route exact path="/AssignOrder" element={<AssignOrder />} />

        <Route exact path="/ShowCart" element={<ShowCart />} />

        <Route exact path="/Logout" element={<Logout />} />
        <Route exact path="*" element={<>Page Not found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
