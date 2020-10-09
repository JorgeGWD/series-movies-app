import React from 'react';
import './App.css';
import Footer from './Components/Commons/Footer/Footer';
import Header from './Components/Commons/Header/Header';
import TitleBar from './Components/Commons/TitleBar/TitleBar';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <TitleBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;