import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import SetupOrganization from "./components/SetupOrganization";
import Home from "./pages/Home";
import SignupForm from "./components/SignupForm";
import ChatbotIntegration from "./pages/ChatbotIntegration";
import WebsiteScraping from "./components/WebsiteScraping";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Show SignupForm when the route is "/signup"
  const isSignupPage = location.pathname === "/signup";
  const isChatbotInt = location.pathname === "/chatbot-integration"

  return (
    <>
      <Navbar className="bg-gradient-to-r from-blue-500 to-purple-600" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setup-organization" element={<SetupOrganization />} />
        <Route path="/scraping" element={<WebsiteScraping />} />
      </Routes>

      {/* Conditionally render SignupForm as a modal */}
      {isSignupPage && (
        <SignupForm isOpen={true} onClose={() => navigate("/")} />
      )}
      {
        isChatbotInt && <Routes><Route path="/chatbot-integration" element={<ChatbotIntegration />} /></Routes>
      }
    </>
  );
};

export default App;
