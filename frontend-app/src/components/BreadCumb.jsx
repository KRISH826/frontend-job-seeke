/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className='flex items-center gap-2'>
      <Link to='/' className='text-white text-lg'>
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join(">")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <span key={name} className='flex gap-2 items-center'>
            <span className='text-white text-lg capitalize'>
              <ChevronRight size={18} color='white' />
            </span>
            {isLast ? (
              <span className='text-white text-lg capitalize'>{name}</span>
            ) : (
              <Link className='text-white text-lg capitalize' to={routeTo}>
                {name}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
