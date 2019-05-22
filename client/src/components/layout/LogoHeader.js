//component logoheader.js
import React from "react";
//Create link for /about
import { Link } from "react-router-dom";

function LogoHeader() {
    return (
        <div>
            <div className="pagehctr">
                <div className="container">
                    <div className="logohead">
                        <div className="row">
                            <div className="col-1 pzero"></div>
                            <div className="col-3">
                                <Link to="/about">
                                    <h1 className="crs_font  dblue">CRS</h1>
                                </Link>
                            </div>
                            <div className="col-7 green">
                                <span>Consumer Registration for Services</span>
                                <br />
                                <span>Free Confidential Help with Housing</span>
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogoHeader;