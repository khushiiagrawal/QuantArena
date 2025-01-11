import { Routes, Route } from "react-router-dom";
import Services from "./pages/services";
import QAPMS from "./pages/qapms/qamps";
import CareerPageHero from "./pages/Career/career";
import ContactUs from "./pages/contact";
import LandingPage from "./landing-page/components/landingpage";
import Layout from "./landing-page/components/layout";



import { Navigate } from "react-router-dom";

function HomeRedirect() {
  return <Navigate to="/" />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="home" element={<HomeRedirect />} />
        <Route path="services" element={<Services />} />
        <Route path="qapms" element={<QAPMS />} />
        <Route path="career" element={<CareerPageHero />} />
        <Route path="contact-us" element={<ContactUs />} />
        

      </Route>
    </Routes>
  );
}
