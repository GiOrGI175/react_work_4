import React from 'react';
import data from './data';
import Header from './Header/Header';
import Main from './Main/Main';

const App = () => {
  return (
    <>
      <Header />
      <Main data={data} />
    </>
  );
};

export default App;
