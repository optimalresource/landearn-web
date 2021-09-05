import React, { useState } from 'react';
import Header from './header';
import { useMediaQuery } from 'react-responsive'
import { mediaQueries } from '../responsive'
import Backdrop from './backdrop'
import SideDrawer from './sidedrawer'
import Hero from './hero'
import HeroDesktop from './hero-desktop'
import Benefits from './benefits';
import HowToBuy from './how-to-buy';
import PropertyList from './property-list';
import Subscribe from './subscribe';
import Footer from './footer';
import Partners from './partners';
import "./main.css";
import FAQs from './faqs';
import FurtherQuestions from './further-questions'

function App() {
    const [sideDrawOpen, setSideDrawOpen] = useState(false);

    const isMobile = useMediaQuery({query: mediaQueries.mobileQuery});
    const drawerToggleClickHandler = () => {
        setSideDrawOpen((previous) => {
            return !previous.sideDrawOpen
        })
    }

    const exitDrawerToggleClickHandler = () => {
        setSideDrawOpen(!sideDrawOpen)
    }

    let backdrop;
    // let sidedraw;

    if(sideDrawOpen) {
        backdrop = <Backdrop drawerClickHandler={exitDrawerToggleClickHandler} />;
        // sidedraw = <SideDrawer drawerClickHandler={exitDrawerToggleClickHandler} />;
    }else {
        backdrop = "";
        // sidedraw = "";
    }

    if(isMobile) {
        return (
          <div className="container-center-horizontal">
            <div className="desktop-1366-ver2 screen">
              <div className="overlay_mobile">
                <Header drawerClickHandler={drawerToggleClickHandler} />
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
              {/* { sidedraw } */}
              <SideDrawer
                drawerClickHandler={exitDrawerToggleClickHandler}
                show={sideDrawOpen}
              />
            </div>
          </div>
        );
    }else {
        return (
          <div className="container-center-horizontal">
            <div className="desktop-1366-ver2 screen">
              <Header drawerClickHandler={drawerToggleClickHandler} />
              <HeroDesktop />
              <Benefits />
              <HowToBuy />
              <PropertyList />
              <Partners />
              <Subscribe />
              <FAQs />
              <FurtherQuestions />
              <Footer />
            </div>
          </div>
        );
    }
}

export default App;