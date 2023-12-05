import React from "react";
import "./AdminLogin.css";
import * as Yup from "yup";
import { useFormik } from "formik";
function AdminLogin() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invaild email address")
      .required("* This field is required")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "Invalid email address"
      ),
    password: Yup.string().required("* This field is required"),
  });

  const onSubmit = async () => {};
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div className="body">
      <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div class="signup">
          <form onSubmit={onSubmit}>
            <label for="chk" aria-hidden="true">
              Admin Login
            </label>

            <input
              type="email"
              name="email"
              placeholder="Email"
              required=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
             <div className="formik-error">
            {formik.touched.email && formik.errors.email ? (
              <p
                className="text-danger"
                style={{ fontSize: "12px", margin: "0px" }}
              >
                {formik.errors.email}
              </p>
            ) : null}
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <div className="formik-error">
            {formik.touched.password && formik.errors.password ? (
              <p
                className="text-danger"
                style={{ fontSize: "12px", margin: "0px" }}
              >
                {formik.errors.password}
              </p>
            ) : null}
            </div>
            <button type="submit">Login </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
