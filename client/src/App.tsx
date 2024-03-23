import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from './pages/Home'

import Header from "./components/navigation/Header";
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
