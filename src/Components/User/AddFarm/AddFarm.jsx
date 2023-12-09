import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector} from "react-redux";
import "./AddFarm.css";
import { addFarmDetails } from "../../../Services/userApi";
import { toast } from "react-toastify";
function AddFarm() {
  const user = useSelector((state) => state.user.value);
  const initialValues = {
    farmname: "",
    licenceId:"",
    phonenumber: "",
    address: "",
    state: "",
    country: "",
    post: "",
    poultryPopulation: "",
  };

  const onSubmit = async (values) => {
    try {
      const { data } = await addFarmDetails(values,user._id);
      if(data.status){
        toast.success(data.message)
      }else{
        toast(data.message)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object({
    farmname: Yup.string()
      .strict(true)
      .trim("* Name must not contain white space")
      .test(
        "* no-whitespace",
        "* Name must not contain white space",
        (value) => !/\s/.test(value)
      )
      .min(3, "*Name must be at least 3 characters long")
      .matches(/^[A-Za-z]+$/, "* Name must only contain characters")
      .required("* This field is required"),
      licenceId: Yup.string()
      .matches(/^[0-9]+$/, "* Licence ID must only contain numbers")
      .max(4, "* Licence ID must be at most 4 digits long")
      .required("* This field is required"),
    phonenumber: Yup.string()
      .matches(/^\d{10}$/, "* Invalid phone number")
      .required("* This field is required"),
    address: Yup.string().required("* This field is required"),
    state: Yup.string().required("* This field is required"),
    country: Yup.string().required("* This field is required"),
    post: Yup.string().required("* This field is required"),
    poultryPopulation: Yup.string()
      .required("* This field is required")
      .matches(/^\d+$/, "* Poultry population must be a number")
      .min(1, "* Poultry population must be at least 1"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <div class="formbold-main-wrapper">
        <div class="formbold-form-wrapper">
          <form onSubmit={formik.handleSubmit}>
            <div class="formbold-form-title">
              <h2 class="">Add Farm Details</h2>
              <p>Fill the details about your farm</p>
            </div>

            <div class="formbold-input-flex">
              <div>
                <label for="firstname" class="formbold-form-label">
                  Farm Name
                </label>
                <input
                  type="text"
                  name="farmname"
                  id="farmname"
                  class="formbold-form-input"
                  onBlur={formik.handleBlur}
                  value={formik.values.farmname}
                  onChange={formik.handleChange}
                />
                {formik.touched.farmname && formik.errors.farmname ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.farmname}
                </p>
              ) : null}
              </div>
              
              <div class="fformbold-mb-3">
                <div>
                  <label for="phone" class="formbold-form-label">
                    Farm Licence ID
                  </label>
                  <input
                    type="text"
                    name="licenceId"
                    id="phone"
                    placeholder="Enter last 4 digits"
                    class="formbold-form-input"
                    onBlur={formik.handleBlur}
                    value={formik.values.licenceId}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.touched.licenceId && formik.errors.licenceId ? (
                  <p
                    className="text-danger"
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {formik.errors.licenceId}
                  </p>
                ) : null}
              </div>
            </div>

            <div class="fformbold-mb-3">
              <div>
                <label for="phone" class="formbold-form-label">
                  Phone number
                </label>
                <input
                  type="text"
                  name="phonenumber"
                  id="phone"
                  class="formbold-form-input"
                  onBlur={formik.handleBlur}
                  value={formik.values.phonenumber}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.touched.phonenumber && formik.errors.phonenumber ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.phonenumber}
                </p>
              ) : null}
            </div>

            <div class="formbold-mb-3">
              <label for="address" class="formbold-form-label">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                class="formbold-form-input"
                onBlur={formik.handleBlur}
                value={formik.values.address}
                onChange={formik.handleChange}
              />
              {formik.touched.address && formik.errors.address ? (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "12px",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {formik.errors.address}
                </p>
              ) : null}
            </div>

            <div class="formbold-input-flex">
              <div>
                <label for="state" class="formbold-form-label">
                  {" "}
                  State{" "}
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  class="formbold-form-input"
                  onBlur={formik.handleBlur}
                  value={formik.values.state}
                  onChange={formik.handleChange}
                />
                {formik.touched.state && formik.errors.state ? (
                  <p
                    className="text-danger"
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {formik.errors.state}
                  </p>
                ) : null}
              </div>

              <div>
                <label for="country" class="formbold-form-label">
                  {" "}
                  Country{" "}
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  class="formbold-form-input"
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                  onChange={formik.handleChange}
                />
                {formik.touched.country && formik.errors.country ? (
                  <p
                    className="text-danger"
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {formik.errors.country}
                  </p>
                ) : null}
              </div>
            </div>

            <div class="formbold-input-flex">
              <div>
                <label for="post" class="formbold-form-label">
                  {" "}
                  Post/Zip code{" "}
                </label>
                <input
                  type="text"
                  name="post"
                  id="post"
                  class="formbold-form-input"
                  onBlur={formik.handleBlur}
                  value={formik.values.post}
                  onChange={formik.handleChange}
                />
                {formik.touched.post && formik.errors.post ? (
                  <p
                    className="text-danger"
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {formik.errors.post}
                  </p>
                ) : null}
              </div>
              <div>
                <label for="area" class="formbold-form-label">
                  {" "}
                  Poultry population{" "}
                </label>
                <input
                  type="number"
                  name="poultryPopulation"
                  id="area"
                  class="formbold-form-input"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.poultryPopulation}
                />
                {formik.touched.poultryPopulation &&
                formik.errors.poultryPopulation ? (
                  <p
                    className="text-danger"
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {formik.errors.poultryPopulation}
                  </p>
                ) : null}
              </div>
            </div>

            <button type="submit" class="formbold-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddFarm;
