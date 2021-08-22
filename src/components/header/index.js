import React from 'react';
import Menu from './menu';
import './index.css';
import WhiteIcon from '../../assets/images/mobile/white_icon.png'
import GreenLogo from '../../assets/images/mobile/logo_green_desktop.png'
import MenuSVG from '../../assets/images/mobile/menu.svg'
import WhiteLogo from '../../assets/images/mobile/logo_white.png'
import { useMediaQuery } from 'react-responsive'
import { mediaQueries } from '../../responsive'
import { data } from '../../data/basic'

const Header = ({ drawerClickHandler }) => {
    const isSmallMobile = useMediaQuery({query: mediaQueries.smallMobileQuery});
    const isMobile = useMediaQuery({query: mediaQueries.mobileQuery});
    const isTablet = useMediaQuery({query: mediaQueries.tabletQuery});
    const isDesktop = useMediaQuery({query: mediaQueries.desktopQuery});

    const { menuItems, homeUrl, logoAlt } = data;

    if(isSmallMobile) {
        return (
            <div className="header">
                <a href={homeUrl} ><img className="logo" src={WhiteIcon} alt={logoAlt} /></a>
                <img className="menu" src={MenuSVG} alt="menu" onClick={drawerClickHandler} />
            </div>
        )
    }
    else if(isMobile) {
        return (
            <div className="header">
                <a href={homeUrl} ><img className="logo" src={WhiteLogo} alt={logoAlt} /></a>
                <img className="menu" src={MenuSVG} alt="menu" onClick={drawerClickHandler} />
            </div>
        )
    }
    else if(isTablet){
        return (
            <div className="header">
                <a href={homeUrl} ><img className="logo" src={GreenLogo} alt={logoAlt} /></a>
                <Menu
                    {...menuItems}
                />
            </div>
        )
    }
    else if(isDesktop){
        return (
            <div className="header">
                <a href={homeUrl} ><img className="logo" src={GreenLogo} alt={logoAlt} /></a>
                <Menu
                    {...menuItems}
                />
            </div>
        )
    } else {
        return (
            <div className="header">
                <a href={homeUrl} ><img className="logo" src={GreenLogo} alt={logoAlt} /></a>
                <Menu
                    {...menuItems}
                />
            </div>
        )
    }
}

export default Header;