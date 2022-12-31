import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import NavBar from "./components/common/NavBar/NavBar";


function App() {
  return (
    <div className="App">
        <Router>
            <div>
              <NavBar />

              <Routes>
                <Route path='/'>
                  <></>
                </Route>
                <Route path='/about'>
                  <></>
                </Route>
                <Route path='/projects'>
                  <></>
                </Route>
                <Route path='/work'>
                  <></>
                </Route>
              </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App;
