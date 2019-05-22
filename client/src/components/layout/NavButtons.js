//component navbuttons.js
import React from "react";
//Create link for navbuttons
import { Link } from "react-router-dom";

function NavButtons() {
    return (
        <div>
            <div className="container">
                <div className="regpagetopbtn">
                    <div className="row">
                        <div className="col-1 pzero"></div>
                        <div className="col-2">
                            <Link to="/appointment">
                                <img src="images/Appt.png" alt="text"/>
                            </Link>
                            <br />
                            <span className="btnlabel">
                                Appointments
                      </span>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-2">
                            <Link to="/forms">
                                <img src="images/Forms.png" alt="text" />
                            </Link>
                            <br />
                            <span className="btnlabel">
                                &nbsp;&nbsp;ID/Forms
                            </span>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-2">
                            <Link to="/staff">
                                <img src="images/Counselor.png" alt="text"/>
                            </Link>
                            <br />
                            <span className="btnlabel">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Staff
                    </span>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-2">
                            <Link to="/logout">
                                <img src="images/HomeConsumers.png" alt="text"/>
                            </Link>
                            <br />
                            <span className="btnlabel">
                                &nbsp;&nbsp;Log
                  </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavButtons;
