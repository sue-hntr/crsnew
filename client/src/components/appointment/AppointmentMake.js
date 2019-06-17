import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link} from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { requestAppt } from "../../actions/authActions";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
// import FormCheck from 'react-bootstrap/FormCheck';
import Button from 'react-bootstrap/Button';

class AppointmentMake extends Component {
    constructor() {
        super();
        this.state = {
        userID: "",
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        timeforappt: "",
        chosenReason: "",
        chosenContact: "",
        validated: false
        };
      }
    

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleOptionChange = changeEvent => {
    this.setState({
      chosenReason: changeEvent.target.value
    });
  };

  handleContactChange = changeEvent => {
    this.setState({
      chosenContact: changeEvent.target.value
    });
  };
  

onSubmit = e => {
    e.preventDefault();
    const { user } = this.props.auth;
    const xuserID = user.id;
    console.log("string bingo: " + xuserID);
    const xfname = user.firstname;
    const xlname = user.lastname;
    const xemail = user.email; 
   
    
  
    const newAppointment = {
      

      userID: xuserID,
      firstname: xfname,
      lastname: xlname,
      phone: this.state.phone,
      email: xemail,
      address1: this.state.address1,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      timeforappt: this.state.timeforappt,
      chosenReason: this.state.chosenReason,
      chosenContact: this.state.chosenContact
      }
    console.log("You have chosen this reason:", this.state.chosenReason);
    console.log("You prefer", this.state.chosenContact);
    console.log(newAppointment);  
    this.props.requestAppt(newAppointment, this.props.history);
    };



  render() {
    const { validated } = this.state;
    
    //this.props.auth. information is obtained from the payload in bcrypt for route.api.user
    
         if (!this.props.auth.isAuthenticated) {
            // return <h1>You need to <Link to="/login">sign in!</Link></h1>
            return(
            <Container>
              <div className="pagetitlemarg">
                  <Row>
                    <Col xs={1} ></Col>
                    <Col xs={9} >
                        <h4 className="dblue">
                          You need to&nbsp;
                          <Link to="/login">sign in</Link> or
                          &nbsp;<Link to="/register">register</Link> 
                          &nbsp;to make an appointment.
                        </h4>
                    </Col>
                    <Col xs={2} ></Col>
                  </Row>
                </div>
              </Container>
            )

        } else {
          
            return (
              <Container>
              <div className="pagetitlemarg">
                  <Row>
                    <Col xs={1} ></Col>
                    <Col xs={9} >
                        <h4 className="dblue">
                          Make an Appointment with a CRS Counselor
                        </h4>
                    </Col>
                    <Col xs={2} ></Col>
                  </Row>
                  <Row>
                  <Col xs={1} ></Col>
                    <Col xs={9} >
                        <h6 className="dblue">
                          Please complete and submit this form.
                          <br />
                          Our receptionist will contact you shortly.
                        </h6>
                    </Col>
                    <Col xs={2} ></Col>
                  </Row> 
                 <div className="pagetitlemarg">
                  <Row>
                    <Col xs={1} ></Col>
                    <Col xs={9} >
      <Form noValidate validated={validated} onSubmit={e => this.onSubmit(e)} >
        <Form.Row>
            <Form.Group >
              <Form.Label>Primary Phone  *required</Form.Label>
              <Form.Control
                  onChange={this.onChange}
                  value={this.state.phone}
                  id="phone"
                  type="text"
              />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group >
              <Form.Label>Street Address Line 1</Form.Label>
              <Form.Control
                  onChange={this.onChange}
                  value={this.state.address1}
                  id="address1"
                  type="text"
              />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group >
              <Form.Label>Street Address Line 2</Form.Label>
              <Form.Control
                  onChange={this.onChange}
                  value={this.state.address2}
                  id="address2"
                  type="text"
              />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group >
              <Form.Label>City</Form.Label>
              <Form.Control
                  onChange={this.onChange}
                  value={this.state.city}
                  id="city"
                  type="text"
              />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group >
              <Form.Label>State</Form.Label>
              <Form.Control
                  onChange={this.onChange}
                  value={this.state.state}
                  id="state"
                  type="text"
              />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group >
              <Form.Label>Zipcode</Form.Label>
              <Form.Control
                  onChange={this.onChange}
                  value={this.state.zip}
                  id="zip"
                  type="text"
              />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group >
              <Form.Label>Best Time/Day of Week for Appointment *required</Form.Label>
              <Form.Control
                  onChange={this.onChange}
                  value={this.state.timeforappt}
                  id="timeforappt"
                  type="text"
              />
            </Form.Group>
        </Form.Row>
        <br />
{/* START HERE WITH REACT-BOOSTRAP */}
<div className="boxit">
  <Form.Group>
      <Form.Label ><strong>
        Reason for your appointment with a CRS counselor
        </strong></Form.Label>
      <br />
      <Form.Check
            type="radio"
            label="Home Prepurchase Workshop"
            name="formapptreason"
            checked={this.state.chosenReason === "prepurchaseworkshop"}
            value="prepurchaseworkshop"
            onChange={this.handleOptionChange}
            className="form-check-input"
            />
            <br />
      <Form.Check
            type="radio"
            label="Credit Counseling"
            name="formapptreason"
            checked={this.state.chosenReason === "creditcounseling"}
            value="creditcounseling"
            onChange={this.handleOptionChange}
            className="form-check-input"
            />
            <br />
      <Form.Check
            type="radio"
            label="Current Homeowner/Post Purchase Issues"
            name="formapptreason"
            checked={this.state.chosenReason === "postpurchase"}
            value="postpurchase"
            onChange={this.handleOptionChange}
            className="form-check-input"
            />
            <br />
      <Form.Check
            type="radio"
            label="Pre-Bankruptcy"
            name="formapptreason"
            checked={this.state.chosenReason === "prebankruptcy"}
            value="prebankruptcy"
            onChange={this.handleOptionChange}
            className="form-check-input"
            />
            <br />
      <Form.Check
            type="radio"
            label="Tax Delinquency"
            name="formapptreason"
            checked={this.state.chosenReason === "taxdelinquency"}
            value="taxdelinquency"
            onChange={this.handleOptionChange}
            className="form-check-input"
            />
            <br />
      <Form.Check
            type="radio"
            label="Default and Delinquency"
            name="formapptreason"
            checked={this.state.chosenReason === "defaultdelinquency"}
            value="defaultdelinquency"
            onChange={this.handleOptionChange}
            className="form-check-input"
            />
            <br />
      <Form.Check
            type="radio"
            label="Need to Discuss"
            name="formapptreason"
            checked={this.state.chosenReason === "discussinperson"}
            value="discussinperson"
            onChange={this.handleOptionChange}
            className="form-check-input"
            />
            <br />
    </Form.Group>
  </div>
  <div className="boxit">
    <Form.Group>
      <Form.Label ><strong>
        Preferred method of contact
        </strong></Form.Label>
      <br />
      <Form.Check
            type="radio"
            label="By phone"
            name="formapptcontact"
            checked={this.state.chosenContact === "contactbyphone"}
            value="contactbyphone"
            onChange={this.handleContactChange}
            className="form-check-input"
            />
            <br />
      <Form.Check
            type="radio"
            label="By email"
            name="formapptcontact"
            checked={this.state.chosenContact === "contactbyemail"}
            value="contactbyemail"
            onChange={this.handleContactChange}
            className="form-check-input"
            />
            <br />
    </Form.Group>
    </div>
        <Button type="submit">Request Appointment</Button>
</Form>
            </Col>
             <Col xs={2} >
             <Button onClick={this.onLogoutClick}> Logout </Button>
             </Col>
          
        </Row>
        </div>   {/* pagetitlemarg form */}
        </div>   {/* pagetitlemarg top */}
        </Container>
     )}
 }}


AppointmentMake.propTypes = {
  requestAppt: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { requestAppt, logoutUser }
)(AppointmentMake);
