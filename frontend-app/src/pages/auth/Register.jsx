/** @format */

import React from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../../redux/slices/authSlice";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const { userInfo } = useSelector((state) => state.auth);
  if (userInfo) {
    return <Navigate to='/' />;
  }
  return <div>Register</div>;
};

export default Register;
