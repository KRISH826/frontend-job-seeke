/** @format */

import React, { useState } from "react";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import { Link, useNavigate } from "react-router-dom";

const Application = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [coverletter, setcoverletter] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [resume, setresume] = useState("");
  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className='application_section'>
      <Banner />
      <div className='application_main'>
        <Container>
          <div className='max-w-[1000px] mx-auto my-20 rounded-xl py-10 px-8 shadow-card'>
            <h1 className='text-center font-semibold text-3xl mb-8'>
              Application Form
            </h1>
            <form onSubmit={formHandler}>
              <div className='grid grid-cols-2 gap-6'>
                <div className='form-group'>
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
                <div className='form-group'>
                  <label
                    htmlFor='name'
                    className='text-base font-medium text-gray-900'>
                    Email
                  </label>
                  <div className='mt-2'>
                    <input
                      className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                      type='email'
                      placeholder='Email'
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      id='email'></input>
                  </div>
                </div>
                <div className='form-group col-span-2'>
                  <label
                    htmlFor='name'
                    className='text-base font-medium text-gray-900'>
                    Cover Letter
                  </label>
                  <div className='mt-2'>
                    <textarea
                      className='flex h-32 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                      placeholder='Cover Letter'
                      value={coverletter}
                      onChange={(e) => setcoverletter(e.target.value)}
                      id='coverletter'></textarea>
                  </div>
                </div>
                <div className='btn'></div>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Application;
