/** @format */

import React from "react";

const Loading = () => {
  return (
    <div className='h-screen fixed w-full inset-0 bg-black/35 flex items-center justify-center'>
      <div className='border-black/5 h-20 w-20 animate-spin rounded-full border-8 border-t-gray-900' />
    </div>
  );
};

export default Loading;
