import React, { Component } from "react";
import { PageWrap, Button } from "./Styling";

class SimpleForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    roles: "",
    listData: [],
    errors: {
      firstName: false,
      lastName: false,
      email: false,
      validEmail: false,
      roles: false,
    },
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, roles, listData } = this.state;
    const data = { firstName, lastName, email, roles };
    let isValid = true;
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      email.length === 0 ||
      roles.length === 0
    ) {
      isValid = false;
    }

    this.setState({
      listData: isValid ? [...listData, data] : [...listData],
      firstName: "",
      lastName: "",
      email: "",
      roles: "",
      errors: {
        firstName: firstName === "",
        lastName: lastName === "",
        email: email === "",
        roles: roles === "",
      },
    });

    console.log(listData);
  };

  handleOnChange = (e) => {
    const {
      target: { value, name },
    } = e;
    this.setState({
      [name]: value,
    });
  };

  emailOnChange = (e) => {
    const {
      target: { value },
    } = e;
    let emailValidate = this.validateEmail(value);
    console.log("emailValidate : " + emailValidate);
    this.setState({
      email: value,
      errors: {
        validEmail: emailValidate,
      },
    });
  };

  onHandleCombo = (e) => {
    const value =
      e.target.selectedIndex !== 0
        ? e.target.options[e.target.selectedIndex].value
        : null;
    this.setState({ roles: value });
  };

  validateEmail = (email) => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
  };

  render() {
    const { firstName, lastName, email, listData, errors } = this.state;
    return (
      <PageWrap>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <input
              name="firstName"
              placeholder="FirstName"
              value={firstName}
              onChange={this.handleOnChange}
              className={errors.firstName ? "errors" : null}
            />
            {errors.firstName && <div className="errorMessage">Required</div>}
          </div>
          <div>
            <input
              name="lastName"
              placeholder="LastName"
              value={lastName}
              onChange={this.handleOnChange}
              className={errors.lastName ? "errors" : null}
            />
            {errors.lastName && <div className="errorMessage">Required</div>}
          </div>
          <div>
            <input
              name="email"
              placeholder="email"
              value={email}
              onChange={this.emailOnChange}
              required
            />
            {!errors.validEmail && email.length > 0 && (
              <div className="errorMessage">Invalid email address</div>
            )}
          </div>

          <Button>Save</Button>
        </form>
        {listData.map((v) => {
          return (
            <li>
              {v.firstName} # {v.lastName} #{v.email} #{v.roles}
            </li>
          );
        })}
      </PageWrap>
    );
  }
}

export default SimpleForm;
