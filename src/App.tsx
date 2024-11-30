import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useParams, Link } from "react-router-dom";

import Counter from "./components/counter";

import { setTimeout } from "timers/promises";
import Home from "./Page/home";
import Products from "./Page/products";
import ProductsItem from "./Page/productsItem";
import ReactMemo from "./Page/ReactMemo";
import Register from "./Page/Register";
import Login from "./Page/LogIn";
import { Header, Button } from "./components";
import FormPage from "./Page/FormPage";
const App = (props: any) => {
   //const protectedRouter = (Component: React.FC) => {
     //const token = localStorage.getItem("token");
     //if (token) {
     //  return <Component />;
     //} else {
     //  return <Login />;
     //}
  // };
  return (
    <div className="app">
      <Header></Header>
      <main className="main">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/products/:id" element={<ProductsItem />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="auth/login" element={<Login />}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/formpage" element={<FormPage/>}></Route>

        </Routes>
      </main>
    </div>
  );
};

export default App;
