import {BrowserRouter as Routes, Route } from "react-router-dom";
import './App.css';

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Index from "./Components/Index";
import Show from "./Components/Show";
import Edit from "./Components/Edit";
import New from "./Components/New";
import Reload from "./Components/Reload";
import React from 'react';
  
  const App = () => {
    return (
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/transactions" element={ <Index />} />
            <Route path="/transactions/new" element={ <New />} />
            <Route path="/transactions/:index" element={ <Show />} />
            <Route path="/transactions/:index/edit" element={ <Edit />} />
            <Route path="*" element={ <Reload />} />
          </Routes>
        </main>
      </div>
    )
  }
  
  export default App;