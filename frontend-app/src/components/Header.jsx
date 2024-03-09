/** @format */

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import toast from "react-hot-toast";
import axios from "axios";
import { logout } from "../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import Container from "./Container";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutHandler = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3030/api/v1/user/logout",
        { withCredentials: true }
      );
      toast.success(response.data.message);
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
      setAnchorEl(null);
    }
  };
  return (
    <>
      {userInfo && (
        <>
          <header className='relative shadow-lg'>
            <Container>
              <nav className='py-3 flex gap-3 w-full justify-between items-center'>
                <div className='logo'>
                  <Link to='/'>
                    <h1>LOGO</h1>
                  </Link>
                </div>
                <div className='menu grow ml-20'>
                  <ul className='flex gap-6 items-center'>
                    <li>
                      <Link
                        className='font-medium text-black/90'
                        to={"/"}></Link>
                    </li>
                    <li>
                      <Link
                        className='font-medium text-black/90'
                        to={"/job/getall"}>
                        ALL JOBS
                      </Link>
                    </li>
                    <li>
                      {/* <Link
                        className='font-medium text-black/90'
                        to={"/applications/me"}
                        onClick={() => setShow(false)}>
                        {user && user.role === "Employer"
                          ? "APPLICANT'S APPLICATIONS"
                          : "MY APPLICATIONS"}
                      </Link> */}
                    </li>
                    {userInfo && userInfo.user.role === "Employer" && (
                      <>
                        <li>
                          <Link
                            className='font-medium text-black/90'
                            to={"/job/post"}>
                            POST NEW JOB
                          </Link>
                        </li>
                        <li>
                          <Link
                            className='font-medium text-black/90'
                            to={"/job/me"}>
                            VIEW YOUR JOBS
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
                <div className='buttons flex gap-2 items-center'>
                  <div>
                    {userInfo.user.name && (
                      <img
                        className='inline-block h-12 w-12 rounded-full object-cover cursor-pointer'
                        src={userInfo.user.profilepic.url}
                        alt='Dan_Abromov'
                        onClick={handleClick}
                      />
                    )}

                    <span className='ml-2'>{userInfo.user.name}</span>
                    <Menu
                      id='basic-menu'
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}>
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                    </Menu>
                  </div>
                </div>
              </nav>
            </Container>
          </header>
        </>
      )}
    </>
  );
};

export default Header;
