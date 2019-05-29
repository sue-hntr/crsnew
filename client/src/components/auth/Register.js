import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

//NPM React-bootstrap not HTML version
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
      validated: false
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

  this.props.registerUser(newUser, this.props.history);

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
                          Already registered? Please&nbsp; 
                          <Link to="/login">log in</Link>.
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
              <Form.Label>First name</Form.Label>
              <Form.Control
                  onChange={this.onChange}
                  value={this.state.firstname}
                  error={errors.firstname}
                  id="firstname"
                  type="text"
                  className={classnames("", {
                    invalid: errors.firstname
                  })}
              />
              <div className="validate_errortext">{errors.firstname}</div>
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group >
              <Form.Label>Last name</Form.Label>
              <Form.Control
                  onChange={this.onChange}
                  value={this.state.lastname}
                  error={errors.lastname}
                  id="lastname"
                  type="text"
                  className={classnames("", {
                    invalid: errors.lastname
                  })}
              />
              <div className="validate_errortext">{errors.lastname}</div>
            </Form.Group>
          </Form.Row>
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
          <Form.Row>
            <Form.Group >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
              />
              <div className="validate_errortext">{errors.password2}</div>
            </Form.Group>
          </Form.Row>
            <Button type="submit">Submit form</Button>
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


Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));