import React from "react";
import ReactDOM from "react-dom/client";

import LandingPage from "./landing-page/components/landingpage";

import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      
      <LandingPage/>
     
 
    </ThemeProvider>
  </React.StrictMode>
);
