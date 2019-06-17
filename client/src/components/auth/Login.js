import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

//NPM React-bootstrap not HTML version
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      validated: false
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
  }

onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

render() {
    const { errors, validated } = this.state;
return (

  <Container>
  <div className="pagetitlemarg">
      <Row>
        <Col xs={1} ></Col>
        <Col xs={9} >
            <h4 className="dblue">
              Welcome to 
              <br />
              Consumer Registration for Services
            </h4>
        </Col>
        <Col xs={2} ></Col>
      </Row>
      <Row>
      <Col xs={1} ></Col>
        <Col xs={9} >
            <h6 className="dblue">
              Not a registered consumer? Please&nbsp; 
              <Link to="/register">register here</Link>.
            </h6>
        </Col>
        <Col xs={2} ></Col>
      </Row> 
     <div className="pagetitlemarg">
      <Row>
        <Col xs={1} ></Col>
        <Col xs={9} >
{/* FORM */}
        <Form noValidate validated={validated} onSubmit={e => this.onSubmit(e)} >
          <Form.Row>
              <Form.Group >
                <Form.Label>Email</Form.Label>
                <Form.Control
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    className={classnames("", {
                      invalid: errors.email
                    })}
                />
                <div className="validate_errortext">{errors.email}</div>
              </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group >
              <Form.Label>Password</Form.Label>
              <Form.Control
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
              />
              <div className="validate_errortext">{errors.password}</div>
            </Form.Group>
          </Form.Row>
          <Button type="submit">Log In to CRS</Button>
      </Form>
              </Col>
             <Col xs={2} ></Col>
          
        </Row>
        </div>   {/* pagetitlemarg form */}
        </div>   {/* pagetitlemarg top */}
        </Container>
     );
   }
 }

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);