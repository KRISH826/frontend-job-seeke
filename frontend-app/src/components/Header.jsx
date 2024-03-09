/** @format */

import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return <>{userInfo && <div>Header</div>}</>;
};

export default Header;
