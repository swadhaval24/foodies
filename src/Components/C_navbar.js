import { useEffect, useState } from "react";
import { button, Link } from "react-router-dom";
import "../Components/navbar.css";
import { catgories } from "../Constants/categories";
import { useAuthContext } from "../contexts/AuthContext";
import "./navbar.css";
const Navbar2 = ({ onCatChange = (selectedCat) => undefined }) => {
  const { logout } = useAuthContext();
  const [selectedCat, setSelectedCat] = useState();

  useEffect(() => {
    onCatChange(selectedCat);
  }, [selectedCat]);

  return (
    <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
      <div class="container">
        <Link to="/" class="navbar-brand nav-item">
          <span class="text-uppercase font-weight-bold">Availbale !!!</span>
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

        <div
          id="navbarSupportedContent"
          class="collapse navbar-collapse d-flex justify-content-end"
        >
          <ul class="navbar-nav">
            {/* {catgories.map((category, index) => {
              return (
                <li
                  class="nav-item"
                  key={index}
                  onClick={() => setSelectedCat(index)}
                >
                  <div class="nav-link">{category}</div>
                </li>
              );
            })} */}

            <Link to="/contact" class="nav-item">
              <div class="nav-link">Contact</div>
            </Link>
            <Link to="/about" class="nav-item">
              <div class="nav-link">About</div>
            </Link>
            <Link to="/orders" class="nav-item">
              <div class="nav-link">My Orders</div>
            </Link>
            {/* <Link to="/update_profile" class="nav-item">
              <div class="nav-link">Update_profile</div>
            </Link> */}
            <Link to="/AddCart" class="nav-item">
              <div class="nav-link">
                <i class="bi bi-cart-fill"></i>
              </div>
            </Link>
            <button className="nav-link btn btn-danger mx-3" onClick={logout}>
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
