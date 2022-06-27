import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

export const Form = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(true);

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstname: event.target.value });
  };
  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastname: event.target.value });
  };
  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstname && values.lastname && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };
  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {submitted && valid ? <div>!Thank you for Registring</div> : null}
        <TextField
          disabled={submitted}
          variant="outlined"
          value={values.firstname}
          placeholder="First Name"
          name="firstname"
          onChange={handleFirstNameInputChange}
        />{" "}
        <br />
        {submitted && !values.firstname ? (
          <span>please enter firstname</span>
        ) : null}
        <br />
        <TextField
          disabled={submitted}
          variant="outlined"
          placeholder="Last Name"
          value={values.lastname}
          name="lastname"
          onChange={handleLastNameInputChange}
        />
        {submitted && !values.lastname ? (
          <span>please enter lastname</span>
        ) : null}
        <br />
        <br />
        <TextField
          disabled={submitted}
          variant="outlined"
          value={values.email}
          placeholder="Email"
          name="email"
          onChange={handleEmailInputChange}
        />
        <br />
        {submitted && !values.email ? (
          <span>please enter valid email</span>
        ) : null}
        <br />
        <br />
        <Button variant="contained" className="btn">
          Register
        </Button>
        <br />
        <a href="#">Forgot Password</a>
        <br />
        <a href="#">Don't have an account</a>
      </form>
    </div>
  );
};
