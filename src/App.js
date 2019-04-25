import React from 'react';
import './App.css';
import { Router, Link } from "@reach/router"

import AudioPlayer from './components/player'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="dashboard">Dashboard</Link>
      </nav>
      <Router>
        <Home path="/" />
        <Dashboard path="dashboard" />
      </Router>
      <AudioPlayer />
    </div>
  );
}

export default App;
