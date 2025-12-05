import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SupportPage from "./pages/SupportPage";
import FAQPage from "./pages/FAQPage";
import PublishRidePage from "./pages/PublishRidePage";
import AboutPage from "./pages/AboutPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import "./styles/App.css"; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/publish" element={<PublishRidePage />} />
        <Route path="/about" element={<AboutPage />} />
         <Route path="/terms" element={<TermsPage />} />
         <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
