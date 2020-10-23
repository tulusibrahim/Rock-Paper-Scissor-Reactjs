import React from 'react';
import Header from './components/header'
import Choose from './components/choose'
import Result from './components/result'
import './components/style.css'

function App() {
  return (
    <div className="body">
      <div className="content">
        <Header />
        <Choose />
        <Result />
      </div>
    </div>
  );
}

export default App;
