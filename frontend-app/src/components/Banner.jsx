/** @format */

import React from "react";
import Breadcrumb from "./BreadCumb";

const Banner = () => {
  return (
    <>
      <div className='banner bg-slate-300 h-80 px-5 flex items-center justify-center'>
        <div className='banner-content relative z-10'>
          <Breadcrumb />
        </div>
      </div>
    </>
  );
};

export default Banner;
