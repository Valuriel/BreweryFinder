import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BreweryDetails from './components/BreweryDetails';
import Breweries from './components/Breweries';

const App = () => {
 
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Breweries />} />
          <Route exact path='/BreweryDetails/:id' element={<BreweryDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
