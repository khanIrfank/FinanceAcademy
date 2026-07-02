import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PublicLayout from './Layouts/Public/PublicLayout'
import Home from './Pages/Public/Home'
import AboutPage from './Pages/Public/AboutPage'
import EcosystemPage from './Pages/Public/EcosystemPage'
import AdvantagesPage from './Pages/Public/AdvantagesPage'
import MarketsPage from './Pages/Public/MarketsPage'
import AcademyPage from './Pages/Public/AcademyPage'
import NewsPage from './Pages/Public/NewsPage'
import ContactPage from './Pages/Public/ContactPage'
import Login from './Auth/Login'
import Register from './Auth/Register'
import ForgotPassword from './Auth/ForgotPassword'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Landing Site Pages inside Layout */}
        <Route 
          path="/" 
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          } 
        />
        <Route 
          path="/about" 
          element={
            <PublicLayout>
              <AboutPage />
            </PublicLayout>
          } 
        />
        <Route 
          path="/ecosystem" 
          element={
            <PublicLayout>
              <EcosystemPage />
            </PublicLayout>
          } 
        />
        <Route 
          path="/advantages" 
          element={
            <PublicLayout>
              <AdvantagesPage />
            </PublicLayout>
          } 
        />
        <Route 
          path="/markets" 
          element={
            <PublicLayout>
              <MarketsPage />
            </PublicLayout>
          } 
        />
        <Route 
          path="/academy" 
          element={
            <PublicLayout>
              <AcademyPage />
            </PublicLayout>
          } 
        />
        <Route 
          path="/news" 
          element={
            <PublicLayout>
              <NewsPage />
            </PublicLayout>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <PublicLayout>
              <ContactPage />
            </PublicLayout>
          } 
        />
        
        {/* Auth standalone pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  )
}

export default App