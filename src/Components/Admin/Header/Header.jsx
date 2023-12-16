import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const adminLogout = () => {
    localStorage.removeItem("adminJWT");
    navigate("/admin/login");
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary my-0 ">
        <div class="container-fluid mx-5">
          <Link class="navbar-brand" to="/admin/">
            <b>
              NourishNet<span className="text-primary t-3">Admin</span>
            </b>
          </Link>
        </div>
        <div>
          <button className="btn" onClick={adminLogout}>
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
