import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as notification from "../Constants/notification";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const changePassword = () => {
    if (Email.length === 0) {
      notification.danger("please enter email");
    } else if (Password.length === 0) {
      notification.danger("Enter new password");
    } else {
      const body = new FormData();
      body.append("Email", Email);

      body.append("Password", Password);

      axios
        .post(
          "http://localhost:8080/user/change_password",
          { Email: Email, Password: Password },
          { "Content-Type": "application/json" }
        )
        .then((response) => {
          console.log(response);
          const result = response.data;
          sessionStorage.setItem("userId", result.data.id);
          if (result.status === "success") {
            console.log("login Successfull!!!!!");
            notification.success("Your Password changed Successfully !!!");

            if (result.data.role == "customer") {
              navigate("/signin");
            } else if (result.data.role == "admin") {
              navigate("/signin");
            } else if (result.data.role == "deliveryBoy") {
              navigate("/signin");
            }
          } else {
            notification.danger("login failed");
          }
        });
    }
  };
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form class="mx-1 mx-md-4">
                      <h5 className="fw-normal mb-3 pb-3">Change Password </h5>

                      <div className="form-outline mb-4">
                        <input
                          className="email"
                          id="form2Example17"
                          class="form-control form-control-lg"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        <label className="form-label" for="form2Example17">
                          Email address
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          class="form-control form-control-lg"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                        <label className="form-label" for="form2Example27">
                          New Password
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          onClick={changePassword}
                          className="btn btn-success"
                          type="button"
                        >
                          Save
                        </button>
                      </div>
                    </form>
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

export default ForgotPassword;
