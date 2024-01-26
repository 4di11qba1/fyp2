import React from 'react';
import { Button } from '@mui/material';
import './HoveredCard.css';

function HoveredCard({ item, heading, w, h, showDetail }) {
  return (
    <>
      <div className={`hoveredCard ${showDetail ? 'hoverable' : ''}`} style={{ width: w, height: h }}>
        <img src={item.img} alt={item.title} />
        <div className="card-content">
          {heading && (
            <h2>
              {item.title}
            </h2>
          )}
          <p>
            {item.desc}
          </p>
          <a href="/store/game" className="button">
            <Button variant='contained' size="medium">See More</Button>
          </a>
        </div>
      </div>
    </>
  )
}

export default HoveredCard;