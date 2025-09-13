import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {

  //api= "your api key"; API key as string
  api="pub_764f1b1f8a274766855bb737d4a45e1b"

  render() {
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<News key="general" Size={6} country="in" category="top" apiKey={this.api} />} />
          <Route path="/business" element={<News key="business" Size={6} country="in" category="business" apiKey={this.api} />} />
          <Route path="/entertainment" element={<News key="entertainment" Size={6} country="in" category="entertainment" apiKey={this.api} />} />
          <Route path="/education" element={<News key="education" Size={6} country="in" category="education" apiKey={this.api} />} />
          <Route path="/health" element={<News key="health" Size={6} country="in" category="health" apiKey={this.api} />} />
          <Route path="/sports" element={<News key="sports" Size={6} country="in" category="sports" apiKey={this.api} />} />
          <Route path="/technology" element={<News key="technology" Size={6} country="in" category="technology" apiKey={this.api} />} />
        </Routes>
      </Router>
    )
  }
}

