import React, { useEffect, useState } from "react";
import "./Listfarm.css";
import { Link, useParams } from "react-router-dom";
import { getUserFarmDetails } from "../../../Services/adminApi";
function Listfarm() {
  const [farmDetails, setFarmDetails] = useState([]);
  const userId = useParams().userId;
  useEffect(() => {
    const fetchFarmDetails = async () => {
      const { data } = await getUserFarmDetails(userId);
      if (data.status) {
        setFarmDetails(data.farms);
      }
    };
    fetchFarmDetails();
  }, [userId]);
  return (
    <div className="mainDivList">
      <h4 className="mx-2 my-4">Farms Lists</h4>

      {farmDetails.length > 0 ? (
        farmDetails.map((values, index) => (
          <div className="SpecificDiv" key={values.id}>
            <Link
              className="SpecificDiv"
              to={`/admin/farmDetails/${values._id}/${userId}`}
            >
              <p>
                <b> Farm name:</b> {values.farmName}
              </p>
              <p>
                <b>Licence no:</b> {values.licenceID}
              </p>
              <p>
                <b> Contact no:</b> {values.phoneNumber}
              </p>
              <p>
                <b> State:</b> {values.state}
              </p>
              <p>
                {" "}
                <b>Poultry polpulation:</b> {values.poultryPopulation}
              </p>
            </Link>
            <span className="divDescription">Click here to view Details</span>
          </div>
        ))
      ) : (
        <div className="centeredText mx-2">No farms available</div>
      )}
    </div>
  );
}

export default Listfarm;
