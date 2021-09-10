import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Header from '../header';
import { useMediaQuery } from 'react-responsive'
import { mediaQueries } from '../../responsive'
import Backdrop from '../backdrop'
import SideDrawer from '../sidedrawer'
import Hero from '../hero'
import HeroDesktop from '../hero-desktop'
import Benefits from '../benefits';
import HowToBuy from '../how-to-buy';
import PropertyList from '../property-list';
import Subscribe from '../subscribe';
import Footer from '../footer';
import Partners from '../partners';
import "../main.css";
import FAQs from '../faqs';
import FurtherQuestions from '../further-questions'
import Login from '../auth';

function App({ modalOpen }) {
  const [sideDrawOpen, setSideDrawOpen] = useState(false);
  const [loginModalShow, setLoginModalShow] = useState(false);

  const isMobile = useMediaQuery({ query: mediaQueries.mobileQuery });

  useEffect(() => {
    if (modalOpen) {
      setLoginModalShow(true);
    }
  }, [modalOpen]);

  const drawerToggleClickHandler = () => {
    setSideDrawOpen((previous) => {
      return !previous;
    });
  };

  const loginModalToggleClickHandler = () => {
    setLoginModalShow((previous) => {
      return !previous;
    });
    if (sideDrawOpen) setSideDrawOpen(!sideDrawOpen);
  };

  const exitDrawerToggleClickHandler = () => {
    if (sideDrawOpen) setSideDrawOpen(!sideDrawOpen);
  };

  const exitLoginModalToggleClickHandler = () => {
    setLoginModalShow(!loginModalShow);
  };

  let backdrop;

  if (sideDrawOpen) {
    backdrop = <Backdrop drawerClickHandler={exitDrawerToggleClickHandler} />;
  } else {
    backdrop = "";
  }

  if (isMobile) {
    return (
      <Router>
        <div className="container-center-horizontal">
          <div className="desktop-1366-ver2 screen">
            <div className="overlay_mobile">
              <Header
                drawerClickHandler={drawerToggleClickHandler}
                loginModalClickHandler={loginModalToggleClickHandler}
              />
              <Hero />
            </div>
            <Benefits />
            <HowToBuy />
            <PropertyList />
            <Partners />
            <Subscribe />
            <FAQs />
            <FurtherQuestions />
            <Footer />
            {backdrop}
            <SideDrawer
              drawerClickHandler={exitDrawerToggleClickHandler}
              show={sideDrawOpen}
              loginModalClickHandler={loginModalToggleClickHandler}
            />
            <Login
              loginModalExitClickHandler={exitLoginModalToggleClickHandler}
              show={loginModalShow}
            />
          </div>
        </div>
      </Router>
    );
  } else {
    return (
      <Router>
        <div className="container-center-horizontal">
          <div className="desktop-1366-ver2 screen">
            <Header
              drawerClickHandler={drawerToggleClickHandler}
              loginModalClickHandler={loginModalToggleClickHandler}
            />
            <HeroDesktop />
            <Benefits />
            <HowToBuy />
            <PropertyList />
            <Partners />
            <Subscribe />
            <FAQs />
            <FurtherQuestions />
            <Footer />
            {backdrop}
            <Login
              loginModalExitClickHandler={exitLoginModalToggleClickHandler}
              show={loginModalShow}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;