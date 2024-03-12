/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../../components/Container";
import { Wallet, MapPin, Clock, Bookmark } from "lucide-react";
import { GoBookmark } from "react-icons/go";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";

const Myjobs = () => {
  const [jobData, setJobData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    try {
      axios
        .get("http://localhost:3030/api/v1/job/getmyjobs", {
          withCredentials: true,
        })
        .then((res) => {
          setJobData(res.data.jobs);
          console.log(res.data.jobs);
        });
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <section className='job_section my-20'>
            <Container>
              <div className='grid grid-cols-1 gap-4'>
                {jobData.map((item) => (
                  <Link
                    to={`/job/detail/${item._id}`}
                    key={item._id}
                    className='relative cursor-pointer flex flex-col text-gray-700 bg-white overflow-hidden border-gray-200 border border-solid bg-clip-border rounded-xl hover:border-violet-400'>
                    <div className='p-6'>
                      <div className='flex flex-wrap gap-x-6 gap-y-3 items-start flex-row justify-between'>
                        <div className='flex mb-2 gap-2 items-start flex-1'>
                          <div className='size-16 rounded-lg overflow-hidden'>
                            <img
                              className='size-16 object-cover'
                              src={item.employerImage}
                              alt='image'
                            />
                          </div>
                          <div className='flex-1'>
                            <h5 className='block mb-0 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
                              {item.title}
                            </h5>
                            <p className='block mt-2 font-sans text-base antialiased font-light leading-relaxed text-inherit'>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: item.description,
                                }}></span>
                            </p>
                            <div className='flex mt-1 items-center gap-5'>
                              <span className='flex items-center gap-1'>
                                <Wallet size={16} className='text-gray-400' />
                                <span className='text-sm text-gray-400 font-light'>
                                  Rs. {item.fixedSalary} {item.salaryForm} -
                                  {item.salaryTo} / Year
                                </span>
                              </span>
                              <span className='flex items-center gap-1'>
                                <MapPin size={15} className='text-gray-400' />
                                <span className='text-sm text-gray-400 font-light'>
                                  {item.city}, {item.country}
                                </span>
                              </span>
                              <span className='flex items-center gap-1'>
                                <Clock size={15} className='text-gray-400' />
                                <span className='text-sm text-gray-400 font-light'>
                                  {item.jobPosted}
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className='size-9 cursor-pointer rounded-full bg-violet-50 border border-solid border-violet-200 flex items-center justify-center'>
                          <GoBookmark size={15} className='fill-violet-400' />
                        </div>
                      </div>

                      <div className='flex items-center gap-5'>
                        <span className=''></span>
                      </div>
                    </div>
                    <div className='px-6 flex gap-2 py-4 rounded-b-md rounded-bl-md bg-gray-50'>
                      <button
                        className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-purple-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:bg-purple-600 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
                        type='button'>
                        Apply Now
                      </button>
                      <button
                        className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
                        type='button'>
                        Share this job
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
              {jobData.length === 0 && (
                <>
                  <h1 className='text-center my-7 text-4xl font-semibold'>
                    NO DATA FOUND
                  </h1>
                </>
              )}
            </Container>
          </section>
        </>
      )}
    </>
  );
};

export default Myjobs;
