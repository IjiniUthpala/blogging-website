import React from 'react';
import { Home, Settings } from '@mui/icons-material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import './sidebar.css';

function Sidebar({ activePage, setActivePage }) {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={require('./retink icon.png')} alt="Logo" className="logo-image" />
      </div>

      <div 
        className={`sidebar-icon home-icon ${activePage === "home" ? "active" : ""}`}
        onClick={() => setActivePage("home")} 
      >
        <Home fontSize="large" />
      </div>
      <div 
        className={`sidebar-icon sticky-note-icon ${activePage === "notes" ? "active" : ""}`}
        onClick={() => setActivePage("notes")}
      >
        <StickyNote2Icon fontSize="large" />
      </div>
      <div className="spacer"></div>
      <div 
        className={`sidebar-icon settings-icon ${activePage === "settings" ? "active" : ""}`}
        onClick={() => setActivePage("settings")}
      >
        <Settings fontSize="large" />
      </div>
      <div 
        className={`sidebar-icon exit-icon ${activePage === "exit" ? "active" : ""}`}
        onClick={() => setActivePage("exit")}
      >
        <ExitToAppIcon fontSize="large" />
      </div>
      
    </div>
  );
}

export default Sidebar;
