import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Card, Row, Form, Col } from "react-bootstrap";
import { updateUser } from "../redux/actions/userActions";

const EditUser = (props) => {
  const filteredId = props.user.filter(
    (user) => user.id === props.match.params.id * 1
  );
  const user = filteredId[0];

  const errorStyle = { color: "red", fontWeight: "bold" };

  const [formValues, setFormValues] = useState(user);

  const [errors, seterrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(formValues);
      alert("User Details Edited Successfully");
      props.editUser(formValues);
    }
  }, [errors]);

  const validate = (values) => {
    const errors = {};

    let emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    let mobileRegex = /^([+]\d{2})?\d{10}$/;
    let passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/;
    if (!values.email) {
      errors.email = "Email is Required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Enter valid Email Format";
    }
    if (!values.password) {
      errors.password = "Password is Required!";
    } else if (!passwordRegex.test(values.password)) {
      errors.password =
        "Password should contain atleast 1 special character,1 number, 1 Upper and Lower case letters.";
    }
    if (!values.firstName) {
      errors.firstName = "FirstName is Required!";
    }
    if (!values.lastName) {
      errors.lastName = "LastName is Required!";
    }
    if (!values.gender) {
      errors.gender = "Gender is Required!";
    }
    if (!values.dob) {
      errors.dob = "Dob is Required!";
    }
    if (!values.code || !values.mobile) {
      errors.code = "Country code and Mobile Num is Required!";
      errors.mobile = "Country code and Mobile Num is Required!";
    } else if (values.code && values.mobile) {
      values.Mobile = values.code + values.mobile;
      if (!mobileRegex.test(values.Mobile)) {
        errors.mobile = "Enter valid Number";
      }
    }
    return errors;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    seterrors(validate(formValues));
    setIsSubmit(true);
  };

  return (
    <div style={{ paddingTop: "10px" }}>
      <Card>
        <form
          style={{
            margin: "0 auto",
            width: "30%",
            paddingBottom: "30px",
            minHeight: "100vh",
          }}
          onSubmit={submitHandler}
        >
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            Edit User Form
          </h4>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={formValues.email}
              onChange={changeHandler}
            />

            <span style={errorStyle}>{errors.email}</span>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formValues.password}
              onChange={changeHandler}
            />
          </div>
          <span style={errorStyle}>{errors.password}</span>

          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formValues.firstName}
              onChange={changeHandler}
            />
          </div>
          <span style={errorStyle}>{errors.firstName}</span>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formValues.lastName}
              onChange={changeHandler}
            />
          </div>
          <span style={errorStyle}>{errors.lastName}</span>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <Form.Group controlId="dob">
              <Form.Control
                type="date"
                name="dob"
                placeholder="Date of Birth"
                value={formValues.dob}
                onChange={changeHandler}
              />
            </Form.Group>
          </div>
          <span style={errorStyle}>{errors.dob}</span>

          <div className="form-group">
            <label htmlFor="gender">Gender</label>

            <Form.Group as={Col} controlId="gender">
              <Form.Select
                defaultValue="Select"
                name="gender"
                value={formValues.gender}
                onChange={changeHandler}
              >
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </Form.Select>
            </Form.Group>
          </div>
          <span style={errorStyle}>{errors.gender}</span>

          <div className="form-group">
            <label htmlFor="mobilenum">Mobile No.</label>
            <div style={{ display: "flex" }}>
              <Form.Select
                name="code"
                value={formValues.code}
                onChange={changeHandler}
                defaultValue=""
                style={{ maxWidth: "80px" }}
              >
                <option></option>
                <option>+91</option>
                <option>+44</option>
                <option>+37</option>
              </Form.Select>

              <input
                type="tel"
                className="form-control"
                id="mobile"
                name="mobile"
                value={formValues.mobile}
                onChange={changeHandler}
              />
            </div>
          </div>
          <span style={errorStyle}>{errors.mobile || errors.code}</span>

          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button type="submit" style={{ fontWeight: "bold" }}>
              Update
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (user) => dispatch(updateUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
