import { Button } from "../components";
import Input from "..//components/Input";
import React, { FormEvent, useState } from "react";
import { error } from "console";
import { register } from "../service/auth";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [errors, SetErrors] = useState<any>({});
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const nameRef = React.useRef<HTMLInputElement>(null);
  const familyRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
      name: nameRef.current?.value,
      family: familyRef.current?.value,
    };
    console.log(usernameRef);
    const errors: any = {};
    for (let [key, value] of Object.entries(data)) {
      if (!value) {
        errors[key] = `${key} is requred`;
      }
    }
    console.log("data");
    console.log(data);
    console.log("submit");
    console.log(errors);
    if (Object.keys(errors).length > 0) {
      SetErrors(errors);
      return;
    } else {
      SetErrors({});
    }

    register(data).then((res) => {
      if (res.status === 200) {
        console.log("success");
        navigate("/login");
      }
    });
  };

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
          ref={usernameRef}
          label="Email Address"
          name="UserName"
          placeholder="Enter Your Email"
          icone={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          }
          error={errors["username"]}
        />

        <Input
          ref={nameRef}
          label="Name"
          placeholder="Enter your first Name"
          icone={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          }
          error={errors["name"]}
        />
        <Input
          ref={familyRef}
          label="LastName"
          placeholder="Please Enter your LastName"
          icone={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
          }
          error={errors["family"]}
        />
        <Input
          ref={passwordRef}
          label="Password"
          placeholder="Password"
          type="password"
          icone={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          }
          error={errors["password"]}
        />
        <Link style={{ fontSize: "10px" }} to={"/auth/login"}>
          Already user?go to Login
        </Link>
        <Button
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        >
          <span>Register</span>
        </Button>
      </form>
    </div>
  );
};

export default Register;
