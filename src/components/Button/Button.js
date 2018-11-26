import React from 'react';

import styles from './Button.module.css';

const Button = ({ text, type }) => {
  return <button className={styles[type]}>{text}</button>;
};

export default Button;
