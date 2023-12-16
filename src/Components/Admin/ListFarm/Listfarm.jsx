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
      {farmDetails.length > 0 ? (
        farmDetails.map((values) => (
          <div className="SpecificDiv" key={values.id}>
            <Link
              className="SpecificDiv"
              to={`/admin/farmDetails/${values._id}?userId=${userId}`}
            >
              {values.farmName}
            </Link>
            <span className="divDescription">Click here to view Details</span>
          </div>
        ))
      ) : (
        <div className="centeredText">No farms available</div>
      )}
    </div>
  );
}

export default Listfarm;
