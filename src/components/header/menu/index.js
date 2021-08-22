import React from 'react';
import './index.css';
import TButton from '../../buttons/roundedge/transparent';
import PButton from '../../buttons/roundedge/primary';
import SButton from '../../buttons/roundedge/secondary';

function App(props) {
  const { login, listProperty, buy, sell } = props;

  return (
    <div className="frame-1">
      <TButton {...sell} />
      <TButton {...buy} />
      <div className="frame-3">
        <PButton {...listProperty} />
        <SButton {...login} />
      </div>
    </div>
  );
}

export default App;

