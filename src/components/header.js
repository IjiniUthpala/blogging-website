import React from 'react';
import { Button, IconButton, Avatar, Tooltip } from '@mui/material';
import { NotificationsNone, Search, Tune, Close } from '@mui/icons-material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaidIcon from '@mui/icons-material/Paid';
import './header.css';

// Exported SearchBar component to reuse in other components if needed
export const SearchBar = () => (
  <div className="search-bar">
    <Search style={{ color: '#2b0057' }} />
    <input type="text" placeholder="Search for templates, projects, etc" />
    <Tooltip title="Filter">
      <IconButton style={{ color: '#E1E1E1' }}>
        <Tune />
      </IconButton>
    </Tooltip>
    <Tooltip title="Close">
      <IconButton style={{ color: '#E1E1E1' }}>
        <Close />
      </IconButton>
    </Tooltip>
  </div>
);

function Header() {
  return (
    <header className="header">
      {/* SearchBar will show only in desktop */}
      <SearchBar />

      {/* "Create Content" button, visible only on desktop */}
      <Button
        variant="contained"
        className="create-content-btn"
        style={{
          backgroundColor: '#7b61ff',
          color: 'white',
          borderRadius: '20px',
          padding: '8px 20px',
          marginLeft: 'auto',
          marginRight: '30px',
        }}
      >
        Create Content
      </Button>

      <Tooltip title="Payment">
        <IconButton>
          <PaidIcon style={{ fontSize: '40px' }} />
        </IconButton>
      </Tooltip>

      <div className="header-right">
        <Tooltip title="Calendar">
          <IconButton>
            <CalendarMonthIcon style={{ fontSize: '40px' }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Notifications">
          <IconButton>
            <NotificationsNone style={{ fontSize: '40px' }} />
          </IconButton>
        </Tooltip>

        <Avatar 
          alt="Profile" 
          src="/profile.jpg" 
          sx={{ width: 40, height: 40, borderRadius: '8px' }} // Curved edges
        />
      </div>
    </header>
  );
}

export default Header;
