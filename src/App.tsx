import React from 'react';
import './App.css';
import Pagination from "./components/Pagination";

function App() {
  return (
      <div className="App">
          <h1>Pagination Component</h1>
          <Pagination totalItems={100} itemsPerPage={10} loop/>
          <h1>Pagination Component</h1>
          <Pagination totalItems={100} itemsPerPage={10} siblingCount={3}/>
      </div>
  );
}

export default App;
