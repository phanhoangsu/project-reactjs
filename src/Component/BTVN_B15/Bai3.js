import React, { act, useReducer } from "react";

const FAKE_DATA = {
  email: "",
  password: "",
  error: { email: "", password: "" },
  isLoginSuccess: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { ...state, [action.field]: action.value };
    // case "ERROR":
    //   return { ...state, error: action?.error };

    case "ERROR":
      return { ...state, error: { ...state.error, ...action.error } };
    case "LOGIN_SUCESS":
      return {
        ...state,
        isLoginSuccess: action.isLoginSuccess,
      };
    default:
      return state;
  }
};

const Bai3 = () => {
  const [formLogin, dispatch] = useReducer(reducer, FAKE_DATA);

  const onInputChange = (field, value) => {
    dispatch({ type: "INPUT", field, value });
  };

  // console.log("formLogin", formLogin);

  // const onLogin = () => {
  //   if (formLogin?.email?.includes("@")) {
  //     // se loi email
  //     dispatch({
  //       type: "ERROR",
  //       error: { ...formLogin?.error },
  //       email: "Email sai dinh dang",
  //     });
  //   }
  //   if (formLogin?.password?.length < 6) {
  //     // se loi password
  //     dispatch({
  //       type: "ERROR",
  //       error: { ...formLogin?.error },
  //       password: "Password sai dinh dang",
  //     });
  //   }
  // };

  const onLogin = () => {
    let error = { ...formLogin.error };

    if (!formLogin?.email.includes("@")) {
      error.email = "Email sai định dạng";
    } else {
      error.email = "";
    }

    if (formLogin?.password.length < 6) {
      error.password = "Password sai định dạng";
    } else {
      error.password = "";
    }

    dispatch({
      type: "ERROR",
      error,
    });
    if (!error.email && !error.password) {
      dispatch({
        type: "LOGIN_SUCESS",
        isLoginSuccess: true,
      });
    }
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <div>
          <p>Email</p>
          <input
            value={formLogin?.email}
            onChange={(e) => onInputChange("email", e.target.value)}
          />
        </div>
        <div>
          <p>Password</p>
          <input
            value={formLogin?.password}
            onChange={(e) => onInputChange("password", e.target.value)}
          />
        </div>
      </div>
      {formLogin?.error?.email && (
        <p style={{ color: "red" }}>{formLogin?.error?.email}</p>
      )}
      {formLogin?.error?.password && (
        <p style={{ color: "red" }}>{formLogin?.error?.password}</p>
      )}
      {formLogin?.isLoginSuccess && (
        <h2 style={{ color: "green" }}>Login Sucess</h2>
      )}
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Bai3;
