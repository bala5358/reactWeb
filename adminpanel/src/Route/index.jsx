import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Loader from "../Layout/Loader";                     // Loader shown while lazy loading
import { authRoutes } from "./AuthRoutes";                 // Authentication-related routes
import LayoutRoutes from "../Route/LayoutRoutes";          // Main layout routes
import PrivateRoute from "./PrivateRoute";                 // Wrapper for private/auth routes
import { classes } from "../Data/Layouts";                 // Layout configs
import LoginTwo from "../Components/Pages/Auth/LoginTwo";  // Login page

// ✅ Main Router Component
const Routers = () => {
  // Get login status from localStorage
  const login = JSON.parse(localStorage.getItem("login"));

  // Store authenticated state
  const [authenticated, setAuthenticated] = useState(false);

  // Find default layout (compact-wrapper)
  const defaultLayoutObj = classes.find(
    (item) => Object.values(item).pop(1) === "compact-wrapper"
  );
  const layout =
    localStorage.getItem("layout") || Object.keys(defaultLayoutObj).pop();

  // On mount → check authentication status
  useEffect(() => {
    let abortController = new AbortController();
    setAuthenticated(JSON.parse(localStorage.getItem("authenticated")));

    // Suppress console warnings (not recommended for production)
    console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
    console.disableYellowBox = true;

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <BrowserRouter basename={"/"}>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* 🔒 Private Routes (require login) */}
          <Route path={"/"} element={<PrivateRoute />}>
            {login || authenticated ? (
              <>
                {/* Redirect root URL to login page with layout */}
                <Route
                  index
                  element={
                    <Navigate to={`${process.env.PUBLIC_URL}/login/${layout}`} />
                  }
                />

                {/* Redirect "/" to dashboard with layout */}
                <Route
                  path="/"
                  element={
                    <Navigate
                      to={`${process.env.PUBLIC_URL}/dashboard/${layout}`}
                    />
                  }
                />
              </>
            ) : null}

            {/* All other private routes go here */}
            <Route path="/*" element={<LayoutRoutes />} />
          </Route>

          {/* 🔑 Public Login Page */}
          <Route path="/login" element={<LoginTwo />} />

          {/* 🔑 Auth Routes from config */}
          {authRoutes.map(({ path, Component }, i) => (
            <Route path={path} element={Component} key={i} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routers;
