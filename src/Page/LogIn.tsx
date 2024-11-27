"use client";

import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button/button";
import Input from "../components/Input/input";
import React, { FormEvent, useState } from "react";
import { login, register } from "../service/auth";
import { useForm } from "react-hook-form";
import withAuth from "../helper/whithAuth";

const Login = () => {
  const navigate = useNavigate();
  const [errors, SetErrors] = useState<any>({});
  const [username, setUserName] = useState<any>();
  const [password, setPassword] = useState<any>();
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  function handleSubmitForm(e: any) {
    e.preventDefault();
    const data = {
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
    };
    const errors: any = {};
    for (let [key, value] of Object.entries(data)) {
      if (!value) {
        errors[key] = `${key} is requred`;
      }
    }
    // if (Object.keys(errors).length > 0) {
    //   SetErrors(errors);
    //   console.log("Error")
    //   return;

    // }
    //  else {
    //   SetErrors({});
    // }

    let body = {
      username: username,
      password: password,
    };
    console.log("login");
    login(body)
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          const data = res.data;
          console.log(data);
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", data.strignfy(data));
          navigate("/");
        }
      })
      .catch((err) => {
        console.log("errror");
      });
  }
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmitForm} className="form">
        <span>Welcome Back</span>
        <span>Enter Your credentials to access your account</span>
        <Input
          label="Email Address"
          placeholder="Enter Your Email"
          name="username"
          ref={usernameRef}
          onChange={(e) => setUserName(e.target.value)}
          icone={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          }
        />

        <Input
          label="Password"
          placeholder="password"
          type="password"
          ref={passwordRef}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          icone={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          }
        />
        <Link style={{ fontSize: "10px" }} to={"/Register"}>
          you are not User?go to Register
        </Link>

        <Button

        // onClick={function (): void {
        //   throw new Error("Function not implemented.");
        // }}
        >
          <span>Login</span>
        </Button>
      </form>
    </div>
  );
};
export default Login;
