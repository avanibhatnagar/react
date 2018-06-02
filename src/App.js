import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/Homepage';
import AboutUs from './components/pages/AboutUs';
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
          <Homepage />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
