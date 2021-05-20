import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  loginOperation,
  registerOperation,
} from "../../redux/auth/authOperations";

class AuthForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Any place in your app!</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values) => {
            this.props.location.pathname === "/registration"
              ? this.props.registerOperation(values)
              : this.props.loginOperation(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default connect(null, { registerOperation, loginOperation })(
  withRouter(AuthForm)
);

// class AuthForm extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   onHandleSubmit = (e) => {
//     e.preventDefault();

//     this.props.location.pathname === "/registration"
//       ? this.props.registerOperation(this.state)
//       : this.props.loginOperation(this.state);
//   };

//   onHandleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   render() {
//     console.log(this.props.location.pathname);
//     return (
//       <form onSubmit={this.onHandleSubmit}>
//         <label>
//           Email
//           <input
//             value={this.state.email}
//             name="email"
//             type="text"
//             onChange={this.onHandleChange}
//           />
//         </label>
//         <label>
//           Password
//           <input
//             value={this.state.password}
//             name="password"
//             type="text"
//             onChange={this.onHandleChange}
//           />
//         </label>
//         <button type="submit">
//           {this.props.location.pathname === "/registration"
//             ? "register"
//             : "login"}
//         </button>
//       </form>
//     );
//   }
// }
// export default connect(null, { registerOperation, loginOperation })(
//   withRouter(AuthForm)
// );
