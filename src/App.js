import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {

  //api= "your api key"; API key as string
  size=9
  country="in"
  render() {
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<News key="general" size={this.size} country={this.country} category="top" apiKey={this.api} />} />
          <Route path="/business" element={<News key="business" size={this.size} country={this.country} category="business" apiKey={this.api} />} />
          <Route path="/entertainment" element={<News key="entertainment" size={this.size} country={this.country} category="entertainment" apiKey={this.api} />} />
          <Route path="/education" element={<News key="education" size={this.size} country={this.country} category="education" apiKey={this.api} />} />
          <Route path="/health" element={<News key="health" size={this.size} country={this.country} category="health" apiKey={this.api} />} />
          <Route path="/sports" element={<News key="sports" size={this.size} country={this.country} category="sports" apiKey={this.api} />} />
          <Route path="/technology" element={<News key="technology" size={this.size} country={this.country} category="technology" apiKey={this.api} />} />
        </Routes>
      </Router>
    )
  }
}

