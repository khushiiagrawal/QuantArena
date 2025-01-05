
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
 
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  
);
