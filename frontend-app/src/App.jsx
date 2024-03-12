/** @format */

import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import PrivateRoute from "./routes/PrivateRoute";
import Layout from "./layout/Layout";
import NotFound from "./pages/error/NotFound";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Myjobs from "./pages/job/Myjobs";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";

const HomePage = lazy(() => import("./pages/Home/Home"));
const JobPage = lazy(() => import("./pages/job/Jobs"));
const PostJobPage = lazy(() => import("./pages/job/PostJob"));
const JobDetailsPage = lazy(() => import("./pages/job/JobDetails"));
const ApplicationPage = lazy(() => import("./pages/application/Application"));
const MyapplicationsPage = lazy(() =>
  import("./pages/application/Myapplication")
);

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='' element={<PrivateRoute />}>
            <Route
              path='/'
              element={
                <Suspense fallback={<Loading />}>
                  <HomePage />
                </Suspense>
              }
            />
          </Route>
          <Route path='' element={<PrivateRoute />}>
            <Route
              path='/job/getall'
              element={
                <Suspense fallback={<Loading />}>
                  <JobPage />
                </Suspense>
              }
            />
          </Route>
          <Route path='' element={<PrivateRoute />}>
            <Route
              path='/job/post'
              element={
                <Suspense fallback={<Loading />}>
                  <PostJobPage />
                </Suspense>
              }
            />
          </Route>
          <Route path='' element={<PrivateRoute />}>
            <Route
              path='/job/detail/:id'
              element={
                <Suspense fallback={<Loading />}>
                  <JobDetailsPage />
                </Suspense>
              }
            />
          </Route>
          <Route path='' element={<PrivateRoute />}>
            <Route path='/job/me' element={<Myjobs />} />
          </Route>
          <Route path='' element={<PrivateRoute />}>
            <Route
              path='/application/:id'
              element={
                <Suspense fallback={<Loading />}>
                  <ApplicationPage />
                </Suspense>
              }
            />
          </Route>
          <Route path='' element={<PrivateRoute />}>
            <Route
              path='/applications'
              element={
                <Suspense fallback={<Loading />}>
                  <MyapplicationsPage />
                </Suspense>
              }
            />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/resetpassword/:token' element={<ResetPassword />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
