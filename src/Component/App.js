import '../Styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from "./About.js";
import SignIn from './SignIn.js';
import SignUpAdmin from './SignUpAdmin.js';
import SignUpClient from './SignUpClient.js';
import SignUpLawyer from './SignUpLawyer.js';
import ClientProfile from './ClientProfile.js';
import LawyerProfile from './LawyerProfile.js';
import AdminCompo from './AdminCompo.js';
import LawyerCompo from './LawyerCompo.js';
import ClientCompo from './ClientCompo.js';
import PrivateCompo from './PrivateCompo.js';
import AdminDetails from './AdminDetails.js';
import ClientDetails from './ClientDetails.js';
import LawyerDetails from './LawyerDetails.js';
import AdminInfo from './AdminInfo.js';
import ClientInfo from './ClientInfo.js';
import LawyerInfo from './LawyerInfo.js';
import EditAdmin from './EditAdmin.js';
import EditClient from './EditClient.js';
import EditLawyer from './EditLawyer.js';
import EditClientProfile from './EditClientProfile.js';
import EditLawyerProfile from './EditLawyerProfile.js';
import LawyersInfo from './LawyersInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
// import SharedComponent from './SharedComponent.js';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateCompo />}>
            <Route element={<AdminCompo />}>
            <Route path="/adminDetails" element={<AdminDetails />} />
              <Route path="/clientDetails" element={<ClientDetails />} />
              <Route path="/lawyerDetails" element={<LawyerDetails />} />
              <Route path="/signUp-admin" element={<SignUpAdmin />} />
              <Route path="/getAdmin/:adminId" element={<AdminInfo />} />
              <Route path="/getClient/:clientId" element={<ClientInfo />} />
              <Route path="/getLawyer/:lawyerId" element={<LawyerInfo />} />
              <Route path="/editAdmin/:adminId" element={<EditAdmin />} />
              <Route path="/editClient/:clientId" element={<EditClient />} />
              <Route path="/editLawyer/:lawyerId" element={<EditLawyer />} />
            </Route>
            <Route element={<LawyerCompo />}> 
            <Route path="/lawyerprofile" element={<LawyerProfile />} />
            <Route path="/editLawyerProfile/:lawyerId" element={<EditLawyerProfile />} />
            </Route>
            <Route element={<ClientCompo />}>
              <Route path="/clientprofile" element={<ClientProfile />} />
              <Route path="/editClientProfile/:clientId" element={<EditClientProfile />} />
            </Route>
          </Route>
          
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signUp-client" element={<SignUpClient />} />
          <Route path="/signUp-lawyer" element={<SignUpLawyer />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lawyersInfo" element={<LawyersInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
