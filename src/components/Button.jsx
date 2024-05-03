import React from 'react';
import { MdMessage } from 'react-icons/md';


function Button(props) {
  return (
    <button className={props.isOutline ? `${"outlineBtn"}` : `${"Button"}`}>
      {props.icon}
      {props.text}
    </button>
  );
}

export default Button;
