import React from 'react';
import '../app/style.css';

function Display(props) {
  return (
    <input value={props.value} className="textview" />
  );
}

export default Display;
