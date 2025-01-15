import { Routes, Route } from "react-router-dom";
import Analytics from "./pages/Services/Analytics/analytics";
import RiskManagement from "./pages/Services/Risk-Management/riskmanagement";
import QAPMS from "./pages/QAPMS/qapms";
import CareerPageHero from "./pages/Career/career";
import ContactPage from "./pages/Contact/contact";
import LandingPage from "./landing-page/components/landingpage";
import Layout from "./landing-page/components/layout";
import DataManagement from "./pages/Services/Analytics/DataManagement";
import DataAnalytics from "./pages/Services/Analytics/DataAnalytics";
import FinancialAnalytics from "./pages/Services/Analytics/FinancialAnalytics";
import EnterprisePolicy from "./pages/Services/Analytics/EnterpricePolicy";
import ModelReview from "./pages/Services/Risk-Management/ModelReview";
import PolicyReview from "./pages/Services/Risk-Management/PolicyReview";
import EnterpriseRiskFramework from "./pages/Services/Risk-Management/EnterpriseRiskFramework";
import RiskReview from "./pages/Services/Risk-Management/RiskReview";
import Dashboard from "./pages/QAPMS/dashboard";
import PolicyPage from "./landing-page/components/terms&conditions";



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
        <Route path="analytics" element={<Analytics />} />
        <Route path="risk-management" element={<RiskManagement />} />
        <Route path="qapms" element={<QAPMS />} />
        <Route path="career" element={<CareerPageHero />} />
        <Route path="contact-us" element={<ContactPage />} />
        <Route path="data-management" element={<DataManagement />} />
        <Route path="data-analytics" element={<DataAnalytics />} />
        <Route path="financial-analytics" element={<FinancialAnalytics />} />
        <Route path="enterprise-policy" element={<EnterprisePolicy />} />
        <Route path="model-review" element={<ModelReview />} />
        <Route path="policy-review" element={<PolicyReview />} />
        <Route path="enterprise-risk-framework" element={<EnterpriseRiskFramework />} />
        <Route path="risk-review" element={<RiskReview />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="policy" element={<PolicyPage />} />
      </Route>
    </Routes>
  );
}
