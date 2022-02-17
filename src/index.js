import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import { Route } from "react-router";
import './style.css';
import Home from './pages/Home.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
