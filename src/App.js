import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<News key="general" pageSize={6} country="us" category="general"/>} />
        <Route path="/business" element={<News key="business" pageSize={6} country="us" category="business"/>} />
        <Route path="/healthscience" element={<News key="healthscience" pageSize={6} country="us" category="healthscience"/>} />
        <Route path="/entertainment" element={<News key="entertainment" pageSize={6} country="us" category="entertainment"/>} />
        <Route path="/sports" element={<News key="sports" pageSize={6} country="us" category="sports"/>} />
        <Route path="/technology" element={<News key="technology" pageSize={6} country="us" category="technology"/>} />
</Routes>

      </Router>
    )
  }
}
