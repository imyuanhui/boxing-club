import React from 'react';
import { Home, About, Classes, Coach, Gallery, Video, Footer } from './containters';
import { Navbar } from './components';

import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Classes />
      <Coach />
      <Gallery />
      <Video />
      <Footer />
    </div>
  );
}

export default App;
