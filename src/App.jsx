// App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import LandingPage from "./components/LandingPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Route>
    </Routes>
  );
}

export default App;
