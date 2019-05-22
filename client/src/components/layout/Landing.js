import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
    <div className="container">
    <div className="pagetitlemarg">
        <div className="row">
            <div className="col-1 pzero"></div>
            <div className="col-9 pzero text-left">
            <Link to="/register">
              <h4 className="dblue">Welcome to 
                <br />
                Consumer Registration for Services
              </h4>
            </Link>  
            </div>
            <div className="col-2"></div>
        </div> 
      </div>
    </div>  
   )
  };

export default Home;
