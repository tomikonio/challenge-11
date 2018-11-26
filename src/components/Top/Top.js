import React from 'react';

import Button from '../Button/Button';
import style from './Top.module.css';
import logo from '../../images/logo.svg';

const Top = () => {
  return (
    <div className={style.Top}>
      <img src={logo} alt="logo" />
      <Button text="Try it Free" type="Button-Top" />
    </div>
  );
};

export default Top;
