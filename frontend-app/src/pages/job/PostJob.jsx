/** @format */

import React, { useState } from "react";
import Container from "../../components/Container";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import toast from "react-hot-toast";
import axios from "axios";
import Banner from "../../components/Banner";

const PostJob = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [smalldescription, setSmallDescription] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [fixedSalary, setFixedSalary] = useState("");
  const [salaryType, setSalaryType] = useState("Fixed Salary");
  // quillo
  // quill
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: ["red", "#785412"] }],
      [{ background: ["red", "#785412"] }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font",
  ];
  const handleForm = async (e) => {
    e.preventDefault();
    if (salaryType === "Fixed Salary") {
      setSalaryFrom("");
      setSalaryTo("");
    } else if (salaryType === "Ranged Salary") {
      setFixedSalary("");
    } else {
      setSalaryFrom("");
      setSalaryTo("");
      setFixedSalary("");
    }
    try {
      const { data } = await axios.post(
        "http://localhost:3030/api/v1/job/post",
        fixedSalary.length >= 4
          ? {
              title,
              description,
              smalldescription,
              category,
              country,
              city,
              location,
              fixedSalary,
            }
          : {
              title,
              description,
              smalldescription,
              category,
              country,
              city,
              location,
              salaryFrom,
              salaryTo,
            },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Banner />
      <section className='post_job_section py-20'>
        <Container>
          <div className='max-w-[1000px] mx-auto bg-white rounded-xl py-10 px-8 shadow-card'>
            <h1 className='text-center font-semibold text-3xl mb-8'>
              Post A New Job
            </h1>
            <form onSubmit={handleForm}>
              <div className='grid grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor=''
                    className='text-base font-medium text-gray-900'>
                    Job Title
                  </label>
                  <div className='mt-2'>
                    <input
                      className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                      type='text'
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder='Title'></input>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor=''
                    className='text-base font-medium text-gray-900'>
                    Job Category
                  </label>
                  <div className='mt-2'>
                    <select
                      className="className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}>
                      <option value=''>Select Category</option>
                      <option value='Graphics & Design'>
                        Graphics & Design
                      </option>
                      <option value='Mobile App Development'>
                        Mobile App Development
                      </option>
                      <option value='Frontend Web Development'>
                        Frontend Web Development
                      </option>
                      <option value='MERN Stack Development'>
                        MERN STACK Development
                      </option>
                      <option value='Account & Finance'>
                        Account & Finance
                      </option>
                      <option value='Artificial Intelligence'>
                        Artificial Intelligence
                      </option>
                      <option value='Video Animation'>Video Animation</option>
                      <option value='MEAN Stack Development'>
                        MEAN STACK Development
                      </option>
                      <option value='MEVN Stack Development'>
                        MEVN STACK Development
                      </option>
                      <option value='Data Entry Operator'>
                        Data Entry Operator
                      </option>
                    </select>
                  </div>
                </div>
                <div className='col-span-2'>
                  <label
                    htmlFor=''
                    className='text-base font-medium text-gray-900'>
                    Small Description
                  </label>
                  <div className='mt-2'>
                    <textarea
                      className='flex h-24 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                      value={smalldescription}
                      onChange={(e) => setSmallDescription(e.target.value)}
                      placeholder='Small Description'></textarea>
                  </div>
                </div>
                <div className='col-span-2'>
                  <label
                    htmlFor=''
                    className='text-base font-medium text-gray-900'>
                    Job Description
                  </label>
                  <div className='mt-2'>
                    <ReactQuill
                      theme='snow'
                      value={description}
                      modules={modules}
                      formats={formats}
                      onChange={setDescription}></ReactQuill>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor=''
                    className='text-base font-medium text-gray-900'>
                    Country
                  </label>
                  <div className='mt-2'>
                    <div className='mt-2'>
                      <input
                        className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                        type='text'
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder='Country'></input>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor=''
                    className='text-base font-medium text-gray-900'>
                    City
                  </label>
                  <div className='mt-2'>
                    <div className='mt-2'>
                      <input
                        className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                        type='text'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder='City'></input>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    salaryType === "Ranged Salary" ? "col-span-2" : null
                  }>
                  <label
                    htmlFor=''
                    className='text-base font-medium text-gray-900'>
                    Salary Type
                  </label>
                  <div className='mt-2'>
                    <select
                      className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                      value={salaryType}
                      onChange={(e) => setSalaryType(e.target.value)}>
                      <option value='Fixed Salary'>Fixed Salary</option>
                      <option value='Ranged Salary'>Ranged Salary</option>
                    </select>
                  </div>
                </div>
                <>
                  {salaryType === "Fixed Salary" ? (
                    <>
                      <div>
                        <label
                          htmlFor=''
                          className='text-base font-medium text-gray-900'>
                          Fixed Salary
                        </label>
                        <div className='mt-2'>
                          <input
                            className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                            type='number'
                            value={fixedSalary}
                            onChange={(e) => setFixedSalary(e.target.value)}
                            placeholder='Fixed Salary'></input>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <label
                          htmlFor=''
                          className='text-base font-medium text-gray-900'>
                          Salary From
                        </label>
                        <div className='mt-2'>
                          <input
                            className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                            type='number'
                            value={salaryFrom}
                            onChange={(e) => setSalaryFrom(e.target.value)}
                            placeholder='Salary From'></input>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor=''
                          className='text-base font-medium text-gray-900'>
                          Salary To
                        </label>
                        <div className='mt-2'>
                          <input
                            className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                            type='number'
                            value={salaryTo}
                            onChange={(e) => setSalaryTo(e.target.value)}
                            placeholder='Salary To'></input>
                        </div>
                      </div>
                    </>
                  )}
                </>
              </div>
              <button
                className='select-none mt-6 font-sans font-bold text-center uppercase disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-4 px-8 rounded-lg bg-purple-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:bg-purple-600 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex gap-1 transition'
                type='submit'>
                Post Your Job <FaArrowRight className='ml-2' size={16} />
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PostJob;
