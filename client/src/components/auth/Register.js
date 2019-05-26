import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { Input, FormBtn } from "../layout/Form";


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
      errors: {}
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
  const { errors } = this.state;
return (
  <div>
            <div className="container">
                <div className="pagetitlemarg">
                    <div className="row">
                        <div className="col-1 pzero"></div>
                        <div className="col-9 pzero text-left">
                          <h4 className="dblue">Welcome to 
                            <br />
                            Consumer Registration for Services</h4>
                        </div>
                        <i class="far fa-frown"></i>
                        <div className="col-2"></div>
                    </div> 
                    <div className="row">
                        <div className="col-1 pzero"></div>
                        <div className="col-9 pzero text-left">
                          <h6 className="dblue">Already registered? Please&nbsp; 
                          <Link to="/login">log in</Link>.
                          </h6>
                        </div>
                        <div className="col-2"></div>
                    </div> 
                    <div className="pagetitlemarg">
                      <div className="row">
                        <div className="col-1 pzero"></div>
                        <div className="col-9 pzero text-left">
{/* FORM  */}
            <form noValidate onSubmit={this.onSubmit}>
              <div className="row_forms">
              <label htmlFor="name">First Name</label>
                <Input
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
              </div> 
              <div className="row_forms">
              <label htmlFor="name">Last Name</label>
                <Input
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
              </div>

              <div className="row_forms">
              <label htmlFor="email">Email</label>
                <Input
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
              </div>
              <div className="row_forms">
              <label htmlFor="password">Password</label>
                <Input
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
              </div>
              <div className="row_forms">
              <label htmlFor="password2">Confirm Password</label>
                <Input
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
              </div>
                <FormBtn type="submit">
                  Create Account
                </FormBtn>
              {/* </div> */}
            </form>
            <div className="col-2"></div>
           </div> 
          </div>
         </div> 
        </div> 
       </div>
      </div>
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