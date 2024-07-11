import React from 'react';
import style from './Main.module.scss';
import Card from './Card';

const Main = (props) => {
  return (
    <main>
      <div className={style.main_container}>
        <div className={style.main_content}>
          <Card data={props.data} />
        </div>
      </div>
    </main>
  );
};

export default Main;
