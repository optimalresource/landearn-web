import React from 'react';
import './index.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import TButton from '../../buttons/roundedge/transparent';
import PButton from '../../buttons/roundedge/primary';
import SButton from '../../buttons/roundedge/secondary';

function App(props) {
  const { login, listProperty, buy, sell, loginModalClickHandler } = props;

  return (
    <Router>
      <div className="frame-1">
        <TButton {...sell} />
        <TButton {...buy} />
        <div className="frame-3">
          <PButton {...listProperty} />
          <Link
            to={{
              pathname: "/login",
              state: { modal: true },
            }}
          >
            <SButton
              {...login}
              click={loginModalClickHandler}
              isTrigger={true}
            />
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default App;

