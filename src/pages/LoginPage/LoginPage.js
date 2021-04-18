import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { UserContext } from "../../context/UserContext";
import "./LoginPage.styles.scss";

export default function LoginPage() {
  const { currUser } = useContext(UserContext);
  return (
    <div className="login-page">
      {!currUser ? <LoginForm /> : <Redirect to="/home" />}
    </div>
  );
}
