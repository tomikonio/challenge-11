import React from 'react';

import Button from '../Button/Button';
import style from './Middle.module.css';

const Middle = () => {
  return (
    <div className={style.Middle}>
      <h1>Build The Community Your Fans Will Love</h1>
      <p>
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <Button type="Button-Middle">
        <h3>Get Started For Free</h3>
      </Button>
    </div>
  );
};

export default Middle;
