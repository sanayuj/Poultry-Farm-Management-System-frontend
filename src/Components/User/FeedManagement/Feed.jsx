import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Feed.css";
import { addFeedDetails } from "../../../Services/userApi";
import { useSelector } from "react-redux";


function Feed() {
    const user=useSelector((state)=>state.user.value)
  const initialValues = {
    recived: "",
    consumed: "",
  };

  const onSubmit = async(values) => {
     const {data}=await addFeedDetails(values,user._id)
  };
  const validationSchema = Yup.object({
    recived: Yup.string()
      .required("* This field is required")
      .matches(/^\d+$/, "* Feeds recived must be a number")
      .min(1, "* Poultry population must be at least 1"),

    consumed: Yup.string()
      .required("* This field is required")
      .matches(/^\d+$/, "* Feeds recived must be a number")
      .min(1, "* Poultry population must be at least 1"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div className="mainDiv">
      <div>
        <div className="formbold-main-wrapper">
          <div className="formbold-form-wrapper">
            <form onSubmit={formik.handleSubmit}>
              <div className="formbold-form-title">
                <h2 className="">Feed Management</h2>
                <p>Fill the details about your feed</p>
              </div>

              <div className="formbold-input-flex">
                <div>
                  <label for="firstname" className="formbold-form-label">
                    Feeds Recived
                  </label>
                  <input
                    type="number"
                    name="recived"
                    id="recived"
                    placeholder="no. of bags"
                    className="formbold-form-input"
                    onBlur={formik.handleBlur}
                    value={formik.values.recived}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.recived && formik.errors.recived ? (
                    <p
                      className="text-danger"
                      style={{
                        fontSize: "12px",
                        margin: "0px",
                        padding: "0px",
                      }}
                    >
                      {formik.errors.recived}
                    </p>
                  ) : null}
                </div>

                <div className="fformbold-mb-3">
                  <div>
                    <label for="phone" className="formbold-form-label">
                      Feeds Consumed
                    </label>
                    <input
                      type="number"
                      name="consumed"
                      id="consumed"
                      placeholder="no. of bags"
                      className="formbold-form-input"
                      onBlur={formik.handleBlur}
                      value={formik.values.consumed}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.touched.consumed && formik.errors.consumed ? (
                    <p
                      className="text-danger"
                      style={{
                        fontSize: "12px",
                        margin: "0px",
                        padding: "0px",
                      }}
                    >
                      {formik.errors.consumed}
                    </p>
                  ) : null}
                </div>
              </div>

              <button type="submit" className="formbold-btn">
                Submit
              </button>
            </form>
          </div>
          <div className="row-container">
            <h2>Feed Records</h2>

            <table class="table table-light showFarm">
  <thead>
    <tr><th>Si.no</th>
    <th>Date</th>
    <th>Recived</th>
    <th>Consumed</th>
    <th></th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-active">
     No Data to show
    </tr>
    
    
  </tbody>
</table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
