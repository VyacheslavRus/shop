import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  loginOperation,
  registerOperation,
} from "../../redux/auth/authOperations";

class AuthForm extends Component {
  state = {
    email: "",
    password: "",
  };

  onHandleSubmit = (e) => {
    e.preventDefault();

    this.props.location.pathname === "/registration"
      ? this.props.registerOperation(this.state)
      : this.props.loginOperation(this.state);
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    console.log(this.props.location.pathname);
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Email
          <input
            value={this.state.email}
            name="email"
            type="text"
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Password
          <input
            value={this.state.password}
            name="password"
            type="text"
            onChange={this.onHandleChange}
          />
        </label>
        <button type="submit">
          {this.props.location.pathname === "/registration"
            ? "register"
            : "login"}
        </button>
      </form>
    );
  }
}
export default connect(null, { registerOperation, loginOperation })(
  withRouter(AuthForm)
);
