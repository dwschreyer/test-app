import React from 'react';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <HeaderComponent parent="APP" />
    </div>
  );
}

export default App;
