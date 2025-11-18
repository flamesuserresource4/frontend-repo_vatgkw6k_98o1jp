import { Routes, Route } from 'react-router-dom';
import App from './App';
import Solutions from './pages/Solutions';
import SignupPro from './pages/SignupPro';
import SignupClient from './pages/SignupClient';
import Directory from './pages/Directory';
import About from './pages/About';
import Help from './pages/Help';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/inscription-professionnels" element={<SignupPro />} />
      <Route path="/inscription-clients" element={<SignupClient />} />
      <Route path="/professionnels" element={<Directory />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/aide" element={<Help />} />
    </Routes>
  );
};

export default Router;
