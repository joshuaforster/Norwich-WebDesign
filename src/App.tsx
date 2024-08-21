import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import Layout from './Layout/layout';
import { ThemeProvider } from './CustomComponents/darkmode';
import ScrollToTop from './CustomComponents/ScrollToTop';
import './App.css';

import { ProjectsProvider } from './CustomComponents/projectsContext';

// Lazy loading components
const Home = lazy(() => import('./MainPages/Home'));
const About = lazy(() => import('./MainPages/About'));
const FAQ = lazy(() => import('./MainPages/faq'));
const Contact = lazy(() => import('./MainPages/contact'));
const ServicesHome = lazy(() => import('./MainPages/servicesHome'));
const ServiceDetail = lazy(() => import('./CustomComponents/serviceDetail'));
const TermsConditions = lazy(() => import('./MainPages/Legal/TermsConditions'));
const PrivacyPolicy = lazy(() => import('./MainPages/Legal/privacypolicy'));
const BlogList = lazy(() => import('./MainPages/Blogs/BlogList'));
const BlogPostComponent = lazy(() => import('./MainPages/Blogs/BlogPost'));
const Unfound = lazy(() => import('./MainPages/404'));

// Portfolio components
const PortfolioPage = lazy(() => import('./PageComponents/PortfolioComponents/Portfolio'));
const PortfolioDetail = lazy(() => import('./PageComponents/PortfolioComponents/PortfolioDetail'));

function App() {
  return (
    <ThemeProvider>
        <ProjectsProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route element={<Layout />}>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/faq' element={<FAQ />} />
                  <Route path='/services/:id' element={<ServiceDetail />} />
                  <Route path='/services' element={<ServicesHome />} />
                  <Route path='/blog' element={<BlogList />} />
                  <Route path='/blog/:id' element={<BlogPostComponent />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/privacypolicy' element={<PrivacyPolicy />} />
                  <Route path='/termsandconditions' element={<TermsConditions />} />

                  {/* Portfolio routes */}
                  <Route path='/portfolio' element={<PortfolioPage />} />
                  <Route path='/portfolio/:id' element={<PortfolioDetail />} />

                  <Route path="*" element={<Unfound />} />
                </Route>
              </Routes>
            </Suspense>
            <CookieConsent
              location="bottom"
              buttonText="I understand"
              cookieName="myAwesomeCookieName"
              style={{ background: "#323D40" }}
              buttonStyle={{ color: "#fff", backgroundColor: "#C58C49", fontSize: "13px", transition: "background-color 0.3s" }}
              buttonClasses="cookie-consent-button"
              expires={150}
            >
              This website uses cookies to enhance the user experience.{" "}
              <Link 
                to="/privacypolicy" 
                aria-label="Read our Privacy Policy to understand how we use cookies and tracking" 
                style={{ color: "white" }} 
                className="hover:text-customBlue"
              >
                Learn more
              </Link>
            </CookieConsent>
          </BrowserRouter>
        </ProjectsProvider>
    </ThemeProvider>
  );
}

export default App;