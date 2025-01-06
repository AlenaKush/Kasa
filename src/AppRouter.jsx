import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LogementDetail from './pages/LogementDetail';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/logement/:id" element={<Layout><LogementDetail /></Layout>} />
        <Route path="/404" element={<Layout><NotFound /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
