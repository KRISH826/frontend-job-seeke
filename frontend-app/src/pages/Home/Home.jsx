/** @format */

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/authSlice";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);
  const logoutHandler = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3030/api/v1/user/logout",
        { withCredentials: true }
      );
      setdata(response.data);
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error.response.data.message);
    }
    dispatch(logout());
  };
  return (
    <div className='my-6'>
      <h2 className='text-center'>Home</h2>
      <button
        type='button'
        onClick={logoutHandler}
        className='rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>
        Log In
      </button>
    </div>
  );
};

export default Home;
