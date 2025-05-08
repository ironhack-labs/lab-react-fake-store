import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/details/:productId" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;

