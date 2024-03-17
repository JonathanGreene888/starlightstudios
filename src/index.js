import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Landing from './Landing';
import Login from './Login';
import CustomerProfile from './CustomerProfile';
import EmployeeProfile from './EmployeeProfile';
import CustomerProjectPage from './CustomerProjectPage';
import Testimonials from './Testimonials';
import AboutUs from './AboutUs';
import ProjectPartners from './ProjectPartners';
import EmployeeProjectPage from './EmployeeProjectPage';
import ErrorBoundary from './ErrorBoundary';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route>
    <Route
      element={<Landing />}
      path="/"
      errorElement={<ErrorBoundary />}
      />
    <Route
    element={<Testimonials />}
    path="/testimonials"
    errorElement={<ErrorBoundary />}
    />
    <Route
    element={<AboutUs />}
    path="/aboutus"
    errorElement={<ErrorBoundary />}
    />
  <Route
  element={<ProjectPartners />}
  path="/projectpartners"
  errorElement={<ErrorBoundary />}
  />
  <Route
  element={<CustomerProjectPage />}
  path="/customerprofile/customerproject/:Id"
  errorElement={<ErrorBoundary />}
  />
  <Route
  element={<EmployeeProjectPage />}
  path="/employeeprofile/employeeproject/:Id"
  errorElement={<ErrorBoundary />}
  />
  <Route
  element={<CustomerProfile />}
  path="/customerprofile"
  errorElement={<ErrorBoundary />}
  />
  <Route
  element={<EmployeeProfile />}
  path="/employeeprofile"
  errorElement={<ErrorBoundary />}
  />
  <Route
  element={<Login />}
  path="/login"
  errorElement={<ErrorBoundary />}
  />
</Route>)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

