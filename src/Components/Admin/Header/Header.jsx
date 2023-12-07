import React from "react";
import { Link } from "react-router-dom";

function Header() {


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
       
      </nav>
    </div>
  );
}

export default Header;
