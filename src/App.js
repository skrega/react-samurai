import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import {BrowserRouter, Routes, Route, useLocation, useNavigate, useParams} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {Component} from 'react';
import {connect} from 'react-redux';
import {initializeApp} from './redux/app-reducer'
import {compose} from 'redux';
import Preloader from './components/common/Preloader/Preloader';


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }
  return ComponentWithRouterProp;
}

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }
    return (
      <BrowserRouter>
        <div className="App app-wrapper">
          <HeaderContainer/>
          <Navbar/>
          <div className='app-wrapper-content'>
            <Routes>
              <Route path="/profile/:userId?" element={< ProfileContainer />}/>
              <Route path="/dialogs/*" element={< DialogsContainer />}/>
              <Route path="/users" element={< UsersContainer />}/>
              <Route path="/login" element={< Login />}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

// export default compose(connect(mapStateToProps, {initializeApp}))(App);
export default compose (withRouter, connect(mapStateToProps, {initializeApp}))(App)
