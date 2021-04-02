import React from 'react';
import {Header} from "./components/header/Header";
import {HashRouter} from "react-router-dom";
import { Routes } from './routes/Routes';


function App() {
  return (
      <HashRouter>
        <Header/>
        <Routes/>
      </HashRouter>
  )
}

export default App;
