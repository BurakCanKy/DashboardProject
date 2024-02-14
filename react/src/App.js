import React from 'react';

import './App.css';


import NavbarSite from "./components/NavbarSite"
import SidebarSite from "./components/SidebarSite"
import MainContact from "./components/MainContact"

function App() {
  return (
    <div className="main-wrapper">
      <NavbarSite />
      <div className='main'>
        <SidebarSite />
        <MainContact />
      </div>

    </div>
  );
}

export default App;
