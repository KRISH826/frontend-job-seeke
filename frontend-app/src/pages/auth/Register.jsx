/** @format */

import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaArrowRight } from "react-icons/fa6";
import { setCredentials } from "../../redux/slices/authSlice";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [role, setrole] = useState("");
  const [profilepic, setprofilepic] = useState("");
  // handle change
  const handleFileChange = (event) => {
    const profilepic = event.target.files[0];
    setprofilepic(profilepic);
  };
  // form
  const handleForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone", phone);
    formData.append("role", role);
    formData.append("profilepic", profilepic);
    try {
      const { data } = await axios.post(
        "http://localhost:3030/api/v1/user/register",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setname("");
      setemail("");
      setpassword("");
      setphone("");
      setrole("");
      setprofilepic("");
      toast.success(data.message);
      dispatch(setCredentials(data));
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (userInfo) {
    return <Navigate to='/' />;
  }

  return (
    <>
      <section className='h-screen'>
        <div className='grid grid-cols-1 h-screen lg:grid-cols-2'>
          <div className='flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-10'>
            <div className='xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md'>
              <h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl'>
                Sign up
              </h2>
              <p className='mt-2 text-base text-gray-600'>
                Already have an account?{" "}
                <Link
                  to='/login'
                  className='font-medium text-black transition-all duration-200 hover:underline'>
                  Sign In
                </Link>
              </p>
              <form className='mt-8' onSubmit={handleForm}>
                <div className='space-y-5'>
                  <div>
                    <label
                      htmlFor='name'
                      className='text-base font-medium text-gray-900'>
                      Full Name
                    </label>
                    <div className='mt-2'>
                      <input
                        className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                        type='text'
                        placeholder='Full Name'
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        id='name'></input>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='text-base font-medium text-gray-900'>
                      Email address
                    </label>
                    <div className='mt-2'>
                      <input
                        className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                        type='email'
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        placeholder='Email'
                        id='email'></input>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center justify-between'>
                      <label
                        htmlFor='phone'
                        className='text-base font-medium text-gray-900'>
                        Phone
                      </label>
                    </div>
                    <div className='mt-2'>
                      <input
                        className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                        type='tel'
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                        placeholder='phone'
                        id='phone'></input>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center justify-between'>
                      <label
                        htmlFor='password'
                        className='text-base font-medium text-gray-900'>
                        Password
                      </label>
                    </div>
                    <div className='mt-2'>
                      <input
                        className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                        type='password'
                        value={password}
                        placeholder='Password'
                        onChange={(e) => setpassword(e.target.value)}
                        id='password'></input>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='role'
                      className='text-base font-medium text-gray-900'>
                      Your Role
                    </label>
                    <div className='mt-2'>
                      <select
                        className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                        placeholder='role'
                        onChange={(e) => setrole(e.target.value)}
                        value={role}
                        id='role'>
                        <option value=''>Select the role</option>
                        <option value='Employer'>Employer</option>
                        <option value='Job Seeker'>Job Seeker</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='profilepic'
                      className='text-base font-medium text-gray-900'>
                      Profile Pic
                    </label>
                    <div className='mt-2'>
                      <input
                        className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                        type='file'
                        accept='.pdf, .jpg, .png'
                        onChange={handleFileChange}
                        id='profilepic'></input>
                    </div>
                  </div>
                  <div>
                    <button
                      type='submit'
                      className='inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80'>
                      Create Account <FaArrowRight className='ml-2' size={16} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='h-full image_div relative after:bg-black/15 after:absolute after:inset-0 w-full'>
            <img
              className='mx-auto h-full w-full object-cover'
              src='https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
