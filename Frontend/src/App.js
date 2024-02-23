import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mt-3">
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;