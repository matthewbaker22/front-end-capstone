import React from 'react';
import NavBar from './components/nav/Nav'
import Footer from './components/nav/Footer'
import ApplicationView from './components/ApplicationViews'
import './App.css';

function Scrappy() {
  return (
    <>
      <NavBar />
      <ApplicationView />
      <Footer />
    </>
  );
}

export default Scrappy;
