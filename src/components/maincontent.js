import React, { useState } from 'react';
import Card from './card';
import { SearchBar } from './header';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Avatar } from '@mui/material';


import './maincontent.css';

function MainContent() {
  const [selectedOption, setSelectedOption] = useState("Zara Ventures");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="main-content">
      <div className="welcome-section">
        <div className="dropdown-container">
          <div className="widgets-icon-container">
            <WidgetsIcon className="widgets-icon" />
          </div>
          
          <div className="dropdown-wrapper">
            <select 
              value={selectedOption} 
              onChange={handleDropdownChange} 
              className="company-dropdown"
            >
              <option value="Zara Ventures">Zara Ventures</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
            <ArrowDropDownIcon className="dropdown-icon" />
          </div>
          <Avatar 
            alt="Profile" 
            src="/profile.jpg" 
            sx={{ width: 40, height: 40, borderRadius: '8px' }} 
           />
        </div>

        <h2>Hey James!</h2>
        <div className="flex-container">
          <p style={{ flexGrow: 1 }}>Let's create something awesome today ✨👋</p>
          <div className="additional-info">
              <p>You should have more engagement by 6pm today, try posting then. 📅</p>
              <p>Try our SEO optimization tool to increase engagement by 40% 🔥</p>
          </div>
        </div>
        <button className="start-creating-btn">Start Creating</button>
      </div>

      <div className="search-bar-container">
        <SearchBar />
      </div>
     
      <h3>Most Popular Tools</h3>
      <p>Explore the trending tools to create your copies fast</p>
      <div className="social-section">
        <h4>Blog Writing</h4>
        <div className="card-grid">
          <Card title="Product description" description="Instantly generate engaging product descriptions that sell" />
          <Card title="Blog writing" description="Generate the best blog post to fit your audience with just a few clicks of a button" />
          <Card title="Article writer" description="Automatically create unique factual articles at the touch of a button" />
          <Card title="Blog writing" description="Generate the best blog post to fit your audience with just a few clicks of a button" />
        </div>
        <h4>Social Media</h4>
        <div className="card-grid">
          <Card title="Blog writing" description="Generate the best blog post to fit your audience with just a few clicks of a button" />
          <Card title="Product description" description="Instantly generate engaging product descriptions that sell" />
          <Card title="Article writer" description="Automatically create unique factual articles at the touch of a button" />
          <Card title="Blog writing" description="Generate the best blog post to fit your audience with just a few clicks of a button" />
        </div>
      </div>
      
    </div>
    
  );
}

export default MainContent;
