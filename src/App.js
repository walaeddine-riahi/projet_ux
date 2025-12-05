import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import InscriptionEtudiant from "./InscriptionEtudiant";
import TrajetsQuotidiens from "./TrajetsQuotidiens";
import VerificationInfos from "./VerificationInfos";
import VerificationFinale from "./VerificationFinale";
import ProfileConducteur from "./ProfileConducteur";
import InformationsDetailees from "./InformationsDetailees";
import Notifications from "./Notifications";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import PrivacyPage from "./pages/PrivacyPage";
import PublishRidePage from "./pages/PublishRidePage";
import SupportPage from "./pages/SupportPage";
import TermsPage from "./pages/TermsPage";
import WalletPage from "./WalletPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/inscription-etudiant" element={<InscriptionEtudiant />} />
        <Route path="/trajets-quotidiens" element={<TrajetsQuotidiens />} />
        <Route path="/verification-infos" element={<VerificationInfos />} />
        <Route path="/verification-finale" element={<VerificationFinale />} />
        <Route path="/profile-conducteur" element={<ProfileConducteur />} />
        <Route
          path="/informations-detaillees"
          element={<InformationsDetailees />}
        />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/publish-ride" element={<PublishRidePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/wallet" element={<WalletPage />} />
      </Routes>
    </Router>
  );
}

export default App;
