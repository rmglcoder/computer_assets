// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Inventory from './pages/InventoryPage.jsx'
import { AssetsContextProvider } from './context/AssetsContext';

function App() {
  return (
    <div className="App">
      <AssetsContextProvider> {/* Ensure AssetsContextProvider wraps your routes */}
        <BrowserRouter>
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />  
            <Route 
              path="/dashboard"
              element={<Dashboard />}
            />  
            <Route 
              path="/inventory"
              element={<Inventory />}
            />  
          </Routes>
        </BrowserRouter>
      </AssetsContextProvider>
    </div>
  );
}

export default App;
