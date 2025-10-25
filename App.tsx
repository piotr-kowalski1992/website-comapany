/*
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import BlogPage from './pages/BlogPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="bg-[#0a0e1a] text-gray-300 font-roboto">
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="service-details/:serviceId" element={<ServiceDetailsPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:blogId" element={<BlogDetailsPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;*/


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UnderDevelopmentPage from './pages/UnderDevelopmentPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<UnderDevelopmentPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
