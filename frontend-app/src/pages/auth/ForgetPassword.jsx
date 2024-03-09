/** @format */

import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import { FaArrowRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    setloading(true);
    axios
      .post("http://localhost:3030/api/v1/user/forgetpassword", { email })
      .then((response) => {
        if (response.data.status) {
          toast.success(response.data.message);
          navigate("/login");
          setemail("");
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
      .finally(() => {
        setloading(false);
      });
  };

  if (userInfo) {
    return <Navigate to='/login' replace />;
  }

  return (
    <>
      <div>
        <Container>
          <div className='flex h-screen w-full items-center justify-center'>
            <div className='w-[600px] shadow-card py-6 px-7 sm:w-[500px] shadow-[0px 7px 29px 0px rgba(100, 100, 111, 0.2);] rounded-md'>
              <h2 className='mb-6 text-center text-3xl'>Forget Password</h2>
              <form onSubmit={handleForm}>
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
                <button
                  type='submit'
                  disabled={loading && true}
                  className='disabled:bg-black/70 inline-flex mt-3 w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80'>
                  {loading ? (
                    "Loading...."
                  ) : (
                    <>
                      Verify Your Email
                      <FaArrowRight className='ml-2' size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ForgetPassword;
