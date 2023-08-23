import '../Styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from "./About.js";
import SignIn from './SignIn.js';
import SignUpAdmin from './SignUpAdmin.js';
import SignUpClient from './SignUpClient.js';
import SignUpLawyer from './SignUpLawyer.js';
import Profile from './Profile.js';
import AdminCompo from './AdminCompo.js';
import LawyerCompo from './LawyerCompo.js';
import ClientCompo from './ClientCompo.js';
import PrivateCompo from './PrivateCompo.js';
import ClientDetails from './ClientDetails.js';
import ClientInfo from './ClientInfo.js';
import EditClient from './EditClient.js';
import LawyersInfo from './LawyersInfo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateCompo />}>
            <Route element={<AdminCompo />}>
              <Route path="/clientDetails" element={<ClientDetails />} />
              <Route path="/signUp-admin" element={<SignUpAdmin />} />
              <Route path="/getClient/:clientId" element={<ClientInfo />} />
              <Route path="/editClient/:clientId" element={<EditClient />} />
            </Route>
            <Route element={<LawyerCompo />}> </Route>
            <Route element={<ClientCompo />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/editClient/:clientId" element={<EditClient />} />
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
