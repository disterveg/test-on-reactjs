import React from 'react';
import './AnswerItem.css';

const AnswerItem = props => {
  const classes = ['AnswerItem'];
  if (props.state) {
    classes.push(props.state);
  }

  return (
    <li
      className={classes.join(' ')}
      onClick={props.onAnwserClick.bind(this, props.answer.id)}
    >
      { props.answer.text }
    </li>
  );
};

export default AnswerItem;
