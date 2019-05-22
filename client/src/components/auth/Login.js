import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
// import classnames from "classnames";
import { Input, FormBtn } from "../layout/Form";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
      // errors: {}
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
// if (nextProps.errors) {
//       this.setState({
//         errors: nextProps.errors
//       });
//     }
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
    // const { errors } = this.state;
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
              <div className="col-2"></div>
          </div> 
          <div className="row">
              <div className="col-1 pzero"></div>
              <div className="col-9 pzero text-left">
                <h6 className="dblue">Don't have an account? Please&nbsp; 
                <Link to="/register">register</Link>.
                </h6>
              </div>
              <div className="col-2"></div>
          </div> 
          <div className="pagetitlemarg">
            <div className="row">
              <div className="col-1 pzero"></div>
              <div className="col-9 pzero text-left">
{/* FORM */}
            <form noValidate onSubmit={this.onSubmit}>
              {/* <div className="input-field col s12"> */}
              <label htmlFor="email">Email</label>
                <Input
                  onChange={this.onChange}
                  value={this.state.email}
                  // error={errors.email}
                  id="email"
                  type="email"
                  // className={classnames("", {
                  //   invalid: errors.email || errors.emailnotfound
                  // })}
                />
                
                {/* <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span> */}
              {/* </div> */}
              {/* <div className="input-field col s12"> */}
              <label htmlFor="password">Password</label>
                <Input
                  onChange={this.onChange}
                  value={this.state.password}
                  // error={errors.password}
                  id="password"
                  type="password"
                  // className={classnames("", {
                  //   invalid: errors.password || errors.passwordincorrect
                  // })}
                />

                {/* <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span> */}
              {/* </div> */}
              {/* <div className="col s12" style={{ paddingLeft: "11.250px" }}> */}
                <FormBtn type="submit" >
                  Login
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
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  // errors: PropTypes.node.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
  // errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);