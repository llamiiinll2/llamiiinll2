import { useState, useMemo, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import withAuth from "../helper/whithAuth";

const Home = (props: any) => {
  const { user } = props;

  return (
    <div>
      <h2>Home </h2>
      {user?.name && <span>welcome {user.name}</span>}
    </div>
  );
};
export default withAuth(Home);
