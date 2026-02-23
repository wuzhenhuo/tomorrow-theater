import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PlatformPage from './pages/PlatformPage';
import ManualPage from './pages/ManualPage';
import CoursesPage from './pages/CoursesPage';
import ResearchPage from './pages/ResearchPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/manual" element={<ManualPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

