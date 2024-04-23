import React from 'react';
import Header from './components/Header';
import ConstructorWindow from './components/ConstructorWindow';
import DriverWindow from './components/DriverWindow';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <ConstructorWindow />
        <DriverWindow />
      </div>
      <Footer />
    </div>
  );
};

export default App;