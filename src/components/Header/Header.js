import React from 'react';
import './style.css';

function Header(props) {
  return (
    <nav>
      <ul>
        <li>
          <strong>Clicks McGee - Memory Game</strong>
        </li>
        <li className={props.lose !== null ? (props.lose ? 'message text-danger' : 'message') : 'message'}>
          <span>{props.message}</span>
        </li>
        <li>
          Score: <span>{props.counter}</span> | Top Score: <span>{props.high_score}</span>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
