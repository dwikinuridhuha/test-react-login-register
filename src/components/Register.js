import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="invalid-feedback d-block">
        This is not a valid email.
      </div>
    );
  }
};

const vhp = (value) => {
  if (value.length < 10 || value.length > 12) {
    return (
      <div className="invalid-feedback d-block">
        The hp must be between 10 and 12 characters numbers.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="invalid-feedback d-block">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [grup, setGrup] = useState("");
  const [role, setRole] = useState("");
  const [tgl_lahir, setTgl_lahir] = useState("");
  const [strict_password, setStrict_password] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeFirsName = (e) => {
    const firstname = e.target.value;
    setFirstName(firstname);
  };

  const onChangeLastName= (e) => {
    const lastname = e.target.value;
    setLastName(lastname);
  };

  const onChangeHp= (e) => {
    const hp = e.target.value;
    setHp(hp);
  };

  const onChangeGrup= (e) => {
    const group = e.target.value;
    setGrup(group);
  };

  const onChangeRole = (e) => {
    const role = e.target.value;
    setRole(role);
  };

  const onChangeTgl_lahir = (e) => {
    const tgl_lahir = e.target.value;
    setTgl_lahir(tgl_lahir);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangePasswordAgain = (e) => {
    const passwordAgain = e.target.value;
    setPasswordAgain(passwordAgain);
  };


  const handleRegister = (e) => {
    e.preventDefault();

    if(password !== passwordAgain) {
      return;
    }

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(email, hp, firstName, lastName, grup, role, tgl_lahir, password, strict_password).then(
        (response) => {
          console.log(response.data)
          setMessage(response.data.status.keterangan);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <Input
                  type="text"
                  className="form-control"
                  name="firstname"
                  value={firstName}
                  onChange={onChangeFirsName}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lasname">Last Name</label>
                <Input
                    type="text"
                    className="form-control"
                    name="lastname"
                    value={lastName}
                    onChange={onChangeLastName}
                    validations={[required]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="hp">No Hp</label>
                <Input
                    type="text"
                    className="form-control"
                    name="hp"
                    value={hp}
                    onChange={onChangeHp}
                    validations={[required, vhp]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="tgl_lahir">Tanggal Lahir</label>
                <Input
                    type="date"
                    className="form-control"
                    name="tgl_lahir"
                    value={tgl_lahir}
                    onChange={onChangeTgl_lahir}
                    validations={[required]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="grup">Grup</label>
                <Input
                    type="text"
                    className="form-control"
                    name="grup"
                    placeholder={"member"}
                    value={grup}
                    onChange={onChangeGrup}
                    validations={[required]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="role">role</label>
                <Input
                    type="text"
                    className="form-control"
                    name="role"
                    value={role}
                    onChange={onChangeRole}
                    validations={[required]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>

              <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
              />
            </div>

              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <Input
                    type="password"
                    className="form-control"
                    name="confirm-password"
                    value={passwordAgain}
                    onChange={onChangePasswordAgain}
                    validations={[required, vpassword]}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}

                <Link to={"/login"} className="mt-2 nav-link btn btn-info btn-bloc">
                  Login Sekarang
                </Link>
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Register;
