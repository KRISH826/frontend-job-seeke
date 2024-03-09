/** @format */

import React, { useContext } from "react";
import Container from "../../components/Container";
import { useSelector } from "react-redux";
import bannerImage from "./../../assets/images/Business_SVG.svg";
import { Link } from "react-router-dom";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const details = [
  {
    id: 1,
    title: "1,23,441",
    subTitle: "Live Job",
    icon: <FaSuitcase size='30' className='text-blue-600' />,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    title: "91220",
    subTitle: "Companies",
    icon: <FaBuilding size='30' className='text-orange-600' />,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    id: 3,
    title: "2,34,200",
    subTitle: "Job Seekers",
    icon: <FaUsers size='30' className='text-green-600' />,
    color: "text-orange-600",
    bgColor: "bg-green-100",
  },
  {
    id: 4,
    title: "1,03,761",
    subTitle: "Employers",
    icon: <FaUserPlus size='30' className='text-red-600' />,
    color: "text-blue-600",
    bgColor: "bg-red-100",
  },
];

const HeroSection = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <section className='text-gray-100'>
      <Container>
        <div
          className='flex flex-col justify-center py-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between'
          bis_skin_checked='1'>
          <div
            className='flex flex-col justify-center py-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'
            bis_skin_checked='1'>
            <h1 className='text-5xl text-black/80 font-bold leadi sm:text-6xl'>
              Find a job that suits
              <span className='text-violet-500'>
                {" "}
                your interests and skills
              </span>
            </h1>
            <div className='mt-6 text-black/80 mb-8 text-lg sm:mb-12'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                voluptate repellat modi quidem aliquid eaque ducimus ipsa et,
                facere mollitia!
              </p>
            </div>
            <div
              className='flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start'
              bis_skin_checked='1'>
              <Link
                rel='noopener noreferrer'
                href='#'
                className='px-8 py-3 text-lg font-semibold rounded bg-violet-500 text-white hover:bg-violet-600 transition'>
                Jobs
              </Link>
              {userInfo && userInfo.user.role === "Job Seeker" ? (
                <Link
                  rel='noopener noreferrer'
                  href='#'
                  className='px-8 py-3 text-lg font-semibold border text-violet-500 border-violet-500 rounded hover:bg-violet-100 transition'>
                  My Applications
                </Link>
              ) : (
                <Link
                  rel='noopener noreferrer'
                  href='#'
                  className='px-8 py-3 text-lg font-semibold border text-violet-500 border-violet-500 rounded hover:bg-violet-100 transition'>
                  Post New Job
                </Link>
              )}
            </div>
          </div>
          <div
            className='flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128'
            bis_skin_checked='1'>
            <img
              src={bannerImage}
              alt=''
              className='object-contain w-96 xl:h-112 2xl:h-128'
            />
          </div>
        </div>
        {/* counting */}
        <div className='count_section mb-12'>
          <div>
            <div className='grid grid-cols-1 gap-y-5 text-center sm:grid-cols-2 sm:gap-5 lg:grid-cols-4'>
              {details.map((item, index) => (
                <div className='shadow-lg p-5 rounded-lg' key={index}>
                  <div
                    className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${item.bgColor}`}>
                    {item.icon}
                  </div>
                  <h3 className='mt-4 text-lg font-semibold text-black'>
                    {item.title}
                  </h3>
                  <h4 className='mt-2 text-md text-gray-600'>
                    {item.subTitle}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
