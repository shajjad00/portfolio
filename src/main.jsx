import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./Route/Route.jsx";
import { ThemeProvider } from "@material-tailwind/react";
// import PropTypes from 'prop-types';
// import { FaBeer } from 'react-icons/fa';

const theme = {
  component: {
    defaultProps: {},
    valid: {},
    styles: {},
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider value={theme}>
      <RouterProvider router={Route}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
