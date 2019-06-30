import React from 'react';
import './style.css';

function ClickCard(props) {
  return (
    <div className={props.lose ? 'card' : 'card'}>
      <div className="img-container" onClick={() => props.clickedOrNot(props.id)}>
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ClickCard;
