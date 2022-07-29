import './App.css';
import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <div id="stars" style={{opacity: 0.5, animationFillMode: 'backwards'}}></div>
      <div id="stars2" style={{opacity: 0.5}}></div>
      <div id="stars3" style={{opacity: 0.5}}></div>
      <div className='main'>
        <div className="xbackgroundcont" id="mainpage">
          <div id="scene">
            <img className="xbackground" src="/img/main/bg.png" data-depth="0.08" data-xblocker="passed" alt=''/>
          </div>
        </div>
        <Navbar />
        <Home />
      </div>
    </React.Fragment>
  );
}

export default App;
