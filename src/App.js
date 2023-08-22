import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter,Router, Route } from 'react-router-dom';

const App = () => {
  return (

      <div className="App app-wrapper">
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Router>
            <Route path='/profile' component={Profile} />
            <Route path='/dialogs' component={Dialogs} />
          </Router>
        </div>
      </div>

  );
}

export default App;
