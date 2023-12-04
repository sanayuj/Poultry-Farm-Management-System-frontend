import React from "react";
import * as Yup from "yup";
import "./Login.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import {userLogin} from "../../../Services/userApi"
function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("* Invaild email format")
      .required("* This field is required")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "* Invalid email address"
      ),
    password: Yup.string().required("* This field is required"),
  });

  const onSubmit = (values) => {
    const {data}=userLogin(values)
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <body>
      <div class="signin">
        <div class="back-img">
          <div class="sign-in-text">
            <h2 class="active">Log In</h2>
            <h2 class="nonactive">Sign Up</h2>
          </div>
          <div class="layer"></div>
          <p class="point">&#9650;</p>
        </div>
        <div class="form-section">
          <form action="#">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                type="text"
                placeholder="Email"
                id="username"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <p
                  className="text-danger"
                  style={{ fontSize: "12px", margin: "0px" }}
                >
                  {formik.errors.email}
                </p>
              ) : null}

              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <p
                  className="text-danger"
                  style={{ fontSize: "12px", margin: "0px" }}
                >
                  {formik.errors.password}
                </p>
              ) : null}
              {/* <span class="mdl-textfield__error">Enter a correct Email</span> */}
            </div>
            <br />
            <p class="forgot-text">
              Don't have an account ? <Link to={"/signup"}>Sign Up</Link>
            </p>
          </form>
        </div>

        <button class="sign-in-btn mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored">
          <span className="LogIn">LogIn</span>
        </button>
      </div>
    </body>
  );
}

export default Login;
