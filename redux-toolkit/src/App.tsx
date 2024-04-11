import React from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Contact } from './pages/Contact';
import { Provider } from 'react-redux';
import { store } from './store';

/*
  npx create-react-app ./redux-toolkit --template typescript

  npm install react-router-dom
  npm install @reduxjs/toolkit react-redux

*/

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Link to="/"> Home </Link>
          <Link to="/login"> Login </Link>
          <Link to="/contact"> Contact </Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
