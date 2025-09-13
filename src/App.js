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
        <Route path="/" element={<News key="general" Size={6} country="in" category="top"/>} />
        <Route path="/business" element={<News key="business" Size={6} country="in" category="business"/>} />
        <Route path="/entertainment" element={<News key="entertainment" Size={6} country="in" category="entertainment"/>} />
        <Route path="/education" element={<News key="education" Size={6} country="in" category="education"/>} />
        <Route path="/health" element={<News key="health" Size={6} country="in" category="health"/>} />
        <Route path="/sports" element={<News key="sports" Size={6} country="in" category="sports"/>} />
        <Route path="/technology" element={<News key="technology" Size={6} country="in" category="technology"/>} />
</Routes>

      </Router>
    )
  }
}
