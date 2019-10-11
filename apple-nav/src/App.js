import React from 'react';
import NavWrapper from './components/NavWrapper'
import SubNav from './components/SubNav';
import './App.css';
import { Route } from 'react-router-dom';

// const mac = ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music']

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavWrapper} />
      <Route path="/:id" component={SubNav} />
    </div>
  );
}

export default App;
