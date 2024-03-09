/** @format */

import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/Home/Home";
import About from "./pages/Home/About";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PrivateRoute from "./routes/PrivateRoute";
import axios from "axios";
import { setCredentials } from "./redux/slices/authSlice";
import Layout from "./layout/Layout";
import NotFound from "./pages/error/NotFound";
import Register from "./pages/auth/Register";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='' element={<PrivateRoute />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
