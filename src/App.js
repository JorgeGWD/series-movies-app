import React from 'react';
import './App.css';
import Footer from './Components/Commons/Footer/Footer';
import Header from './Components/Commons/Header/Header';
import TitleBar from './Components/Commons/TitleBar/TitleBar';

function App() {
  return (
    <div className="App">
      <Header />
      <TitleBar />
      <Footer />
    </div>
  );
}

export default App;