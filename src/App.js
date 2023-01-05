import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ContriesHomepage from './components/ContriesHomepage';
import CountriesDetailsPage from './components/ContriesDetailsPage';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        {/* <ContriesHomepage /> */}
        <Routes>
          <Route path="/" element={<ContriesHomepage />} />
          <Route path="/details/:id" element={<CountriesDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
