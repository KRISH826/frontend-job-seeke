/** @format */

import React, { useState } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaArrowRight } from "react-icons/fa6";
import Container from "../../components/Container";
import axios from "axios";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { token } = useParams();
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const handleForm = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const { data } = await axios.post(
        `http://localhost:3030/api/v1/user/resetpassword/${token}`,
        { password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message);
      navigate("/login");
      setpassword("");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setloading(false);
    }
  };

  if (userInfo) {
    return <Navigate to='/login' />;
  }
  return (
    <>
      <div>
        <Container>
          <div className='flex h-screen w-full items-center justify-center'>
            <div className='w-[600px] shadow-card py-6 px-7 sm:w-[500px] shadow-[0px 7px 29px 0px rgba(100, 100, 111, 0.2);] rounded-md'>
              <h2 className='mb-6 text-center text-3xl'>Reset Password</h2>
              <form onSubmit={handleForm}>
                <div>
                  <label
                    htmlFor='password'
                    className='text-base font-medium text-gray-900'>
                    New Password
                  </label>
                  <div className='mt-2'>
                    <input
                      className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                      type='password'
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      placeholder='New Password'
                      id='password'></input>
                  </div>
                </div>
                <button
                  type='submit'
                  disabled={loading && true}
                  className='inline-flex mt-3 w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80'>
                  {loading ? (
                    "Loading...."
                  ) : (
                    <>
                      Reset Your Password{" "}
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

export default ResetPassword;
