import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link} from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    //this.props.auth. information is obtained from the payload in bcrypt for route.api.user
    const { user } = this.props.auth;
    console.log(user.firstname);

    return (

      <Container>
      <div className="pagetitlemarg">
          <Row>
            <Col xs={1} ></Col>
            <Col xs={9} >
                <h4 className="dblue">
                  Welcome {user.firstname}&nbsp;{user.lastname}
                  <br />
                  {user.email}
                </h4>
            </Col>
            <Col xs={2} ></Col>
          </Row>
          <Row>
          <Col xs={1} ></Col>
            <Col xs={9} >
                <p>
                  You are now logged in the CRS system.
                </p>
                <p>
                  From here you can go on to make an <Link to="/appointmentmake">appointment</Link> in our system.
                </p>
                <p>
                  You will be saving yourself and CRS time and resources by making this request online.
                </p>
                <p>
                  You can always call us at 215-555-1212 to make an appointment as well.
                </p>
            </Col>
            <Col xs={2} ></Col>
          </Row> 
         <div className="pagetitlemarg">
          <Row>
            <Col xs={1} ></Col>
            <Col xs={9} >
            <Button onClick={this.onLogoutClick}> Logout </Button>
            </Col>
             <Col xs={2} ></Col>
            </Row>
            </div>   {/* pagetitlemarg form */}
            </div>   {/* pagetitlemarg top */}
            </Container>
        );
      }
    }


Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
