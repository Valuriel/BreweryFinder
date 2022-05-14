import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import BreweryDetails from './components/BreweryDetails';
import Breweries from './components/Breweries';

const App = () => {
 
  return (
    <div className='App-background'>
      <Header />
      <Router>
          <Routes>
            <Route exact path='/' element={<Breweries />} />
            <Route exact path='/BreweryDetails/:id' element={<BreweryDetails />} />
          </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
