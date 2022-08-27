import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'
import Header from './components/Header';
import RegistryPage from './components/RegistryPage';
import LoginPage from './components/LoginPage';
import PrivatePage from './components/PrivatePage';
import PageNotFound from './components/PageNotFound';
import AuthProvider from './providers/AuthProvider';
import ProtectedRoute from './providers/ProtectedRoute';
import Dashboard from './components/Dashboard';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="registry" element={<RegistryPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="private" element={
            <ProtectedRoute>
              <PrivatePage />
            </ProtectedRoute>
          } />
          <Route path="dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
    </BrowserRouter>
  </AuthProvider>
);
