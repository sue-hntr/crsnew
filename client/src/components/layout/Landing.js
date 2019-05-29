import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
    <div className="container">
    <div className="pagetitlemarg">
        <div className="row">
            <div className="col-1 pzero"></div>
            <div className="col-9 pzero text-left">
              <h4 className="dblue">Welcome to 
                <br />
                Consumer Registration for Services
              </h4>
                <p>
                  
                </p>
                <p>
                  By registering with CRS online, you will have greater access and control over your communication with CRS counselors and the services they offer.
                </p>
                <p>
                  You will be saving yourself and CRS time and resources by making this request online.
                </p>
                <p>
                  You can always call us at 215-555-1212 to request information and make an appointment as well.
                </p>
                <hr></hr>
                <p>  </p>
                <p>  </p>
                <p className="dblue">
                  If you already have an account, please <Link to='/login'>login</Link>. Otherwise, please <Link to='/register'>register</Link>

                </p>
            </div>
            <div className="col-2"></div>
        </div> 
      </div>
    </div>  
   )
  };

export default Home;
