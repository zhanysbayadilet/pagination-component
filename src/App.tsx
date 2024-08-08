import React from 'react';
import './App.css';
import Pagination from "./components/Pagination/Pagination";

function App() {
    return (
        <div className="App">
            <h1>Pagination Component Demo</h1>
            <h3>Pagination with Looping Enabled</h3>
            <Pagination totalItems={100} itemsPerPage={10} stepSize={5} loop/>
            <h3>Standard Pagination</h3>
            <Pagination totalItems={100} itemsPerPage={10} stepSize={5}/>
        </div>
    );
}

export default App;
