/** @format */

import React, { useContext } from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      {userInfo && (
        <footer className='bg-gray-900'>
          <div className='max-w-2xl mx-auto text-white py-10'>
            <div className='text-center'>
              <h3 className='text-3xl mb-3'> Download our Job Seeking App </h3>
              <p>Find Your Jobs</p>
              <div className='flex justify-center my-10'>
                <div className='flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2'>
                  <img
                    src='https://cdn-icons-png.flaticon.com/512/888/888857.png'
                    className='w-7 md:w-8'
                  />
                  <div className='text-left ml-3'>
                    <p className='text-xs text-gray-200'>Download on </p>
                    <p className='text-sm md:text-base'> Google Play Store </p>
                  </div>
                </div>
                <div className='flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2'>
                  <img
                    src='https://cdn-icons-png.flaticon.com/512/888/888841.png'
                    className='w-7 md:w-8'
                  />
                  <div className='text-left ml-3'>
                    <p className='text-xs text-gray-200'>Download on </p>
                    <p className='text-sm md:text-base'> Apple Store </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-18 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400'>
              <p className='order-2 md:order-1 mt-8 md:mt-0'>
                {" "}
                &copy; job seeker app 2024.{" "}
              </p>
              <div className='order-1 md:order-2'>
                <span className='px-2'>About us</span>
                <span className='px-2 border-l'>Contact us</span>
                <span className='px-2 border-l'>Privacy Policy</span>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
