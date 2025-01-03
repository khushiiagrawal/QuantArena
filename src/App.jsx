import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LandingPage from "./landing-page/components/landingpage";
import Services from "./pages/services";
import QAPMS from "./pages/qamps";
import Career from "./pages/career";
import ContactUs from "./pages/contact";

function HomeRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return null;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomeRedirect />} />
      <Route path="/services" element={<Services />} />
      <Route path="/qapms" element={<QAPMS />} />
      <Route path="/career" element={<Career />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}
