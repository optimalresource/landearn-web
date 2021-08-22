import React from 'react';
import './index.css';
import Close from '../../assets/images/mobile/close.svg';
import TButton from '../buttons/roundedge/transparent';
import PButton from '../buttons/roundedge/primary';
import SButton from '../buttons/roundedge/secondary';
import { data } from '../../data/basic'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App({ drawerClickHandler, show }) {
  const { login, listProperty, buy, sell } = data.menuItems;
  let drawerClasses = ['drawer-container'];
  if(show){
    drawerClasses = ['drawer-container', 'open']
  }
  return (
    <div className={drawerClasses.join(' ')}>
      <nav className="side-drawer">
        <div className="close">
          {/* <FontAwesomeIcon icon="times-circle" /> */}
          <div className="close-icon" onClick={drawerClickHandler}>
            <img src={Close} alt="close" className="close-img" />
          </div>
        </div>
        <TButton {...sell} />
        <TButton {...buy} />

        <div className="space-between" />

        <PButton {...listProperty} />
        <SButton {...login} />
      </nav>
    </div>
  );
}

export default App;