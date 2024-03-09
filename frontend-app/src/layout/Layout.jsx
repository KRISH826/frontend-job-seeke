/** @format */

import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className='main_body'>
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </>
  );
};

export default Layout;
