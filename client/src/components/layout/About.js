import React from "react";
// import { Link } from "react-router-dom";

function About() {
    return (
    <div className="container">
    <div className="pagetitlemarg">
        <div className="row">
            <div className="col-1 pzero"></div>
            <div className="col-9 pzero text-left">
              <h4 className="dblue">About
                <br />
                Consumer Registration for Services
              </h4>
              <p>
                CRS is a nonprofit organization that was founded for the purpose of providing real estate and housing counseling services to East Coast Urban residents of America.
              </p>
              <p>
              
                Our agency enjoys a favorable track record and has been recognized for providing expert advice and quality services in the areas of:
                </p>
                <ul>
                    <li> pre and post purchase</li> 
                    <li>pre- and post-rental</li> 
                    <li>mortgage default/ delinquency/ foreclosure</li> 
                    <li>anti-predatory lending</li> 
                    <li>rental default</li> 
                    <li>reverse mortgage counseling/ certification, and</li> 
                    <li>housing consumer education.</li>
                </ul> 
              
            </div>
            <div className="col-2"></div>
        </div> 
      </div>
    </div>  
   )
  };

export default About;
