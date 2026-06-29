import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import PublicLayout from './Layouts/Public/PublicLayout'
import Home from './Pages/Public/Home'
import Login from './Auth/Login'
import Register from './Auth/Register'
import ForgotPassword from './Auth/ForgotPassword'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Landing Site */}
        <Route 
          path="/" 
          element={
            <PublicLayout>
              <Home />
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