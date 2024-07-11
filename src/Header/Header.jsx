import React from 'react';
import style from './Header.module.scss';
import logo from '/logo.svg';

const Header = () => {
  return (
    <header>
      <div className={style.header_continer}>
        <div className={style.header_content}>
          <div>
            <img src={logo} alt='' />
          </div>
          <h1>my travel journal.</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
