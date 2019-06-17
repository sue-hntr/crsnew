import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect} from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import { requestAppt } from "../../actions/authActions";

import Button from 'react-bootstrap/Button';

class AppointmentDetails extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    }
  }



  componentDidMount (){
//get appointment details from searching appointments with id
//create function in authactions
//make sure route/api/appointment has info
//get name info from auth and display all

};

setRedirect = () => {
  this.setState({
    redirect: true
  })
}

///create a promise or list of functions for asynch
  onLogoutClick = e => {
    e.preventDefault();
    this.setRedirect();
    console.log("1 " + this.state.redirect);
    this.props.logoutUser();
    console.log("2 " + this.state.redirect);
    if (this.state.redirect){
      return <Redirect to="/login" />
    }
  };



render(){
  const { redirect } = this.state;
  console.log("reder ss: " + this.state.redirect);
    return (
    <div className="container">
    <div className="pagetitlemarg">
        <div className="row">
            <div className="col-1 pzero"></div>
            <div className="col-9 pzero text-left">
              <h4 className="dblue">Thank you for making a request for an Appointment.
                <br />
                Consumer Registration for Services
              </h4>
            </div>
            <p>
            <Button onClick={this.onLogoutClick }> Logout </Button>
            </p>
           
            <div className="col-2"></div>
        </div> 
      </div>
    </div>  
   )
  };
}


AppointmentDetails.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(AppointmentDetails);