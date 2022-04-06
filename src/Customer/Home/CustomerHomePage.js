import Navbar2 from "../../Components/C_navbar";
import "../Home/customerHome.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../Constants/Url";
import { useAuthContext } from "../../contexts/AuthContext";
import { catgories } from "../../Constants/categories";
import { CategorySelector } from "./CategorySelector";
import { CloudCategory } from "./CloudCategory";
const CustomerHome = () => {
  const [category, setCategory] = useState();

  return (
    <div className="">
      <Navbar2 />
      <div className="container">
        <div className="container">
          <div>
            {typeof category === "number" ? (
              <CloudCategory
                category={category}
                onBack={() => setCategory("")}
              />
            ) : (
              <CategorySelector setCategory={setCategory} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerHome;
