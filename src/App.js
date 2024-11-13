import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Header from './components/header';
import MainContent from './components/maincontent';
import Container from '@mui/material/Container';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState("home"); // Track the active page

  // Function to set the active page
  const handleSetActivePage = (page) => {
    setActivePage(page);
  };

  return (
    <div className="app">
      <Sidebar activePage={activePage} setActivePage={handleSetActivePage} />
      <div className="content">
        <Header />
        <Container maxWidth="xl">
          <MainContent />
        </Container>
      </div>
    </div>
  );
}

export default App; 