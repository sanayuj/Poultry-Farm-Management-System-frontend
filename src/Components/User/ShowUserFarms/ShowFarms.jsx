import React, { useEffect, useState } from "react";
import "./ShowFarms.css";
import { useSelector } from "react-redux";
import { showUserFarms } from "../../../Services/userApi";
import { Link } from "react-router-dom";
function ShowFarms(page) {
  const user = useSelector((state) => state.user.value);
  const [farmDetails, setFarmDetails] = useState([]);
  useEffect(() => {
    const fetchFarmDetails = async () => {
      try {
        if (user && user._id) {
          const { data } = await showUserFarms(user._id);
          console.log(data);
          if (data.status) {
            console.log(data.farms)
            setFarmDetails(data.farms);
          }
        } else {
          console.warn("Unable fetch user ID");
        }
      } catch (error) {
        console.log(error, "Facing issue!");
      }
    };
    fetchFarmDetails();
  }, [user]);

  return (
    <div>
      <div className="row-container">
        <h2>Your Farms </h2>
        {farmDetails.map((farms, index) => (
          <div key={index} className="mainDiv">
            <Link to={`/feed/${farms._id}`} className="showFarmpage">
              {index + 1}.{farms.farmName}
              <span className="spanPart">Click here to view</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowFarms;
