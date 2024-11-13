import React from 'react';
import {IconButton, Tooltip } from '@mui/material';  // Import Tooltip
import CreateIcon from '@mui/icons-material/Create';
import DescriptionIcon from '@mui/icons-material/Description';
import ArticleIcon from '@mui/icons-material/Article';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import './card.css';

function getIcon(title) {
  switch (title) {
    case 'Blog writing':
      return <CreateIcon style={{ color: '#FF914D' }} />;
    case 'Product description':
      return <DescriptionIcon style={{ color: '#24CC89' }} />;
    case 'Article writer':
      return <ArticleIcon style={{ color: '#A044FF' }} />;
    default:
      return null;
  }
}

function Card({ title, description }) {
  return (
    <div className="card">
      <div className="card-icon">
            {getIcon(title)}
      </div>
      <div className="trending-icon">
        <Tooltip title="Trending">
          <IconButton>
            <TrendingUpIcon style={{ color: '#d3d3d3', fontSize: '30px' }} />
          </IconButton>
        </Tooltip>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Card;
