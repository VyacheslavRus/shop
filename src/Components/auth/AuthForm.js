import React, { Component } from "react";

class AuthForm extends Component {
  state = {
    email: "",
    passwopd: "",
  };
  render() {
    return (
      <form>
        <label>
          Email
          <input type="text" />
        </label>
        <label>
          Password
          <input type="text" />
        </label>
        <button type="submit">Sign up</button>
      </form>
    );
  }
}

export default AuthForm;
