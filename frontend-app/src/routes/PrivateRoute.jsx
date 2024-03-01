/** @format */
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateOutlet() {
  const [user, setUser] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3030/api/v1/user/getuser",
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      setUser(response.data.user);
    } catch (error) {
      setUser(false);
    }
  };
  useEffect(() => {
    getUser();
    setIsLoading(false);
  }, []);

  if (isLoading) return <h1>loading</h1>;

  return user ? <Outlet /> : <Navigate to='/login' />;
}
