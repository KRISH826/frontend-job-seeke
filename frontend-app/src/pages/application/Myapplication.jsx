/** @format */

import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Dialogue from "../../components/Dialogue";

const Myapplication = () => {
  const [applications, setApplications] = useState([]);
  const [open, setOpen] = useState(false);
  const [resumeImageUrl, setResumeImageUrl] = useState("");
  const [loading, setloading] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    setloading(true);
    try {
      if (userInfo && userInfo.user.role === "Employer") {
        axios
          .get("http://localhost:3030/api/v1/application/employer/getall", {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data.application);
            setApplications(res.data.application);
          });
      } else if (userInfo && userInfo.user.role === "Job Seeker") {
        axios
          .get("http://localhost:3030/api/v1/application/jobseeker/getall", {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data.application);
            setApplications(res.data.application);
          });
      }
      setloading(false);
    } catch (error) {
      toast.error();
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Banner />
      <section className='myapplications_sections'>
        <Container>
          <div className='overflow-hidden border border-gray-200 md:rounded-lg my-20'>
            <div className=''>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-left text-sm font-normal text-gray-700'>
                      <span>Name</span>
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-normal text-gray-700'>
                      Email
                    </th>

                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-normal text-gray-700'>
                      Phone
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-left text-sm font-normal text-gray-700'>
                      Address
                    </th>
                    <th
                      scope='col'
                      className='relative px-4 py-3.5 text-left text-sm font-normal text-gray-700'>
                      Action
                    </th>
                  </tr>
                </thead>
                {applications.length > 0 ? (
                  <tbody className='divide-y divide-gray-200 bg-white'>
                    {applications.map((item) => (
                      <tr key={item._id}>
                        <td className='whitespace-nowrap px-4 py-4'>
                          <div className='flex items-center'>
                            <div className='h-10 w-10 flex-shrink-0'>
                              <img
                                className='h-10 w-10 rounded-full object-cover'
                                src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                alt=''
                              />
                            </div>
                            <div className='ml-4'>
                              <div className='text-sm font-medium text-gray-900'>
                                {item.name}
                              </div>
                              <div className='text-sm text-gray-700'></div>
                            </div>
                          </div>
                        </td>
                        <td className='whitespace-nowrap px-3 py-4'>
                          <div className='text-sm text-gray-700'>
                            {item.email}
                          </div>
                        </td>
                        <td className='whitespace-nowrap px-4 py-4'>
                          <div className='text-sm text-gray-700'>
                            {item.phone}
                          </div>
                        </td>
                        <td className='whitespace-nowrap px-4 py-4 text-sm text-gray-700'>
                          {item.address}
                        </td>
                        <td className='whitespace-nowrap px-4 py-3 text-right text-sm font-medium'>
                          <button
                            className='select-none font-sans font-normal text-center disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-2 px-6 rounded-md bg-purple-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:bg-purple-600 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex gap-1 transition capitalize'
                            onClick={handleClickOpen}>
                            See Resume
                          </button>
                          <Dialogue
                            open={open}
                            imagUrl={item.resume.url}
                            onClose={handleClose}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <tbody className='divide-y divide-gray-200 bg-white'>
                    <tr>
                      <td
                        className='whitespace-nowrap px-4 py-4 text-center'
                        colspan='5'>
                        <div className='h-[250px] shadow-lg rounded-md flex items-center justify-center'>
                          <span className='block text-center font-normal text-3xl'>
                            No Data Found
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Myapplication;
