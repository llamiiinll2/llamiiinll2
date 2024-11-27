import React from "react";
import { json } from "stream/consumers";
import Login from "../Page/LogIn";
const withAuth = (Component: React.FC) => {
  let user = localStorage.getItem("user");
  if (user) {
     user = JSON.parse(user);
  }

  return (props: any) => {
    if (!user) {
      return <Login />;
    } else {
      return <Component />;
    }
  };
};
export default withAuth;
