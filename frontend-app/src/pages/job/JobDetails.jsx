/** @format */

import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import { useSelector } from "react-redux";
import { FaArrowRight } from "react-icons/fa6";

const JobDetails = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [loading, setloading] = useState(true);
  const [Data, setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    setloading(true);
    try {
      axios
        .get(`http://localhost:3030/api/v1/job/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          setData(res.data.job);
          console.log(res.data.job);
        });
      setloading(false);
    } catch (error) {
      navigate("/notFound");
    }
  }, []);

  return (
    <section className='job_details'>
      <Banner />
      <div className='job_details_section my-20'>
        <Container>
          <div className='bg-sky-50 py-10 shadow px-5 rounded-lg flex justify-between'>
            <div className='flex gap-2 items-center'>
              <img
                src={Data.employerImage}
                className='size-12 rounded-full object-cover'
              />
              <h2 className='text-xl text-sky-600 text-capitalize font-semibold'>
                {Data.employerTitle}
              </h2>
            </div>
            <div className='salary'></div>
          </div>
          <div>
            <p
              className='mt-6 text-base'
              dangerouslySetInnerHTML={{ __html: Data.description }}></p>
          </div>
          {userInfo && userInfo.user.role === "Job Seeker" && (
            <div className='apply_btn mt-10'>
              <Link
                to={`/application/${Data._id}`}
                className='select-none w-44 font-sans font-bold text-center uppercase disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-4 px-8 rounded-lg bg-purple-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:bg-purple-600 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex gap-1 transition'
                type='button'>
                Apply Now <FaArrowRight className='ml-2' size={16} />
              </Link>
            </div>
          )}
        </Container>
      </div>
    </section>
  );
};

export default JobDetails;
