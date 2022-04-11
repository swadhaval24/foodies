import { useContext } from "react";
import { Link } from "react-router-dom";
import "../Components/navbar.css";
import { useAuthContext } from "../contexts/AuthContext";
const Navbar3 = () => {
  const { logout } = useAuthContext();
  // logout =()=> {
  // localStorage.clear();
  // location.to = 'localhost:3000';
  //  };

  return (
    <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
      <div class="container">
        <Link to="/" class="navbar-brand">
          <span class="text-uppercase font-weight-bold">Admin Panel !!!</span>
        </Link>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link to="/UserList" class="nav-link">
                User-List
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/HotelMenu" class="nav-link">
                Hotel Menu
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/DeliveryBoyList" class="nav-link">
                DeliveryBoy-List
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/allorders" class="nav-link">
                All Orders
              </Link>
            </li>
            <button onClick={() => logout()} className="btn btn-danger mx-3">
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar3;
