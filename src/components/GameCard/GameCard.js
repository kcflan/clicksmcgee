import React from 'react';
import './style.css';

function GameCard(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default GameCard;
