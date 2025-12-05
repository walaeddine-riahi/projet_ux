import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
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
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
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
      </Routes>
    </Router>
  );
}

export default App;
