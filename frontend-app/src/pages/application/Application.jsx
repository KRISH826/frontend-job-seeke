/** @format */

import React, { useState } from "react";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import toast from "react-hot-toast";
import axios from "axios";

const Application = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [coverLetter, setcoverLetter] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [resume, setresume] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  // handle change
  const handleFileChange = (event) => {
    const resume = event.target.files[0];
    setresume(resume);
  };

  const formHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("coverLetter", coverLetter);
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append("resume", resume);
    formData.append("jobId", id);

    try {
      const { data } = await axios.post(
        "http://localhost:3030/api/v1/application/post",
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
      setaddress("");
      setphone("");
      setcoverLetter("");
      setresume("");
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <Banner />
      <section className='application_section'>
        <div className='application_main py-20'>
          <Container>
            <div className='max-w-[1000px] mx-auto bg-white py-10 rounded-xl px-8 shadow-card'>
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
                        value={coverLetter}
                        onChange={(e) => setcoverLetter(e.target.value)}
                        id='coverletter'></textarea>
                    </div>
                  </div>
                  <div className='form-group'>
                    <label
                      htmlFor='name'
                      className='text-base font-medium text-gray-900'>
                      Phone Number
                    </label>
                    <div className='mt-2'>
                      <input
                        className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                        type='number'
                        placeholder='Phone Number'
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                        id='phone'></input>
                    </div>
                  </div>
                  <div className='form-group'>
                    <label
                      htmlFor='name'
                      className='text-base font-medium text-gray-900'>
                      Resume File
                    </label>
                    <div className='mt-2'>
                      <input
                        className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                        type='file'
                        accept='.pdf, .jpg, .png'
                        onChange={handleFileChange}
                        id='resume'></input>
                    </div>
                  </div>
                  <div className='form-group col-span-2'>
                    <label
                      htmlFor='name'
                      className='text-base font-medium text-gray-900'>
                      Phone Number
                    </label>
                    <div className='mt-2'>
                      <input
                        className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                        type='text'
                        placeholder='Enter Your Address'
                        value={address}
                        onChange={(e) => setaddress(e.target.value)}
                        id='address'></input>
                    </div>
                  </div>
                </div>
                <div className='apply_btn mt-10'>
                  <button
                    className='select-none font-sans font-bold text-center uppercase disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-4 px-8 rounded-lg bg-purple-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:bg-purple-600 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex gap-1 transition'
                    type='submit'>
                    Submit
                    <FaArrowRight className='ml-2' size={16} />
                  </button>
                </div>
              </form>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Application;
