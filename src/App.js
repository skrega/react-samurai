import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="App app-wrapper">
        <HeaderContainer />
        <Navbar/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/:userId?" 
                  element={< ProfileContainer />}
            />
            <Route path="/dialogs/*" element={< DialogsContainer />}/>
            <Route path="/users" element={< UsersContainer />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
