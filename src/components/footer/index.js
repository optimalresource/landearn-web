import React from 'react';
import './index.css';
import { footer } from "../../data/footer";
import MenuListGroup from './menu-list-group';
import { useMediaQuery } from "react-responsive";
import { mediaQueries } from "../../responsive";

const Footer = () => {
    const buyPropertiesLinks = footer.siteMap[0];
    const sellPropertiesLinks = footer.siteMap[3];
    const businessLinks = footer.siteMap[1];
    const agentsLinks = footer.siteMap[4];
    const privacyLinks = footer.siteMap[2];
    const isTablet = useMediaQuery({ query: mediaQueries.tabletMinQuery });
    if (isTablet){
      return (
        <>
          <div className="footer-wrapper">
            <div className="footer screen">
              <div className="overlap-group1">
                <div className="footer-logo">
                  <img src={footer.logo} alt="logo" className="logo-img" />
                </div>
                <MenuListGroup
                  menu1={buyPropertiesLinks}
                  menu2={sellPropertiesLinks}
                  menu3={businessLinks}
                />
                <MenuListGroup
                  menu1={privacyLinks}
                  menu2={agentsLinks}
                  needSpace={isTablet}
                />
              </div>

              <div className="overlap-group2">
                <div className="mobile-section">
                  <div className="mobile-apps axiforma-bold-black-14px">
                    Our mobile apps (coming soon)
                  </div>

                  <div className="coming-soon">
                    <div className="img-container">
                      <img
                        className="apple-store"
                        src={footer.appleStore}
                        alt="Download on the App Store"
                      />
                      <img
                        className="play-store"
                        src={footer.playStore}
                        alt="Get it on Google Play"
                      />
                    </div>
                  </div>
                </div>

                <div className="social-copy">
                  <div className="social-medias">
                    {footer.social.map((icon, index) => {
                      return (
                        <img
                          src={icon.src}
                          alt={icon.alt}
                          key={index}
                          className="social-icon"
                          onClick={() => window.open(icon.url, "_blank")}
                        />
                      );
                    })}
                  </div>

                  <div className="copyright">
                    <div className="copyright-text axiforma-regular-normal-jumbo-12px">
                      Copyright &copy; Landearn Homes Limited 2021
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }else {
        return (
          <>
            <div className="footer-wrapper">
              <div className="footer screen">
                <div className="overlap-group1">
                  <div className="footer-logo">
                    <img src={footer.logo} alt="logo" className="logo-img" />
                  </div>
                  <MenuListGroup
                    menu1={buyPropertiesLinks}
                    menu2={sellPropertiesLinks}
                  />
                  <MenuListGroup menu1={businessLinks} menu2={privacyLinks} />
                  <MenuListGroup menu1={agentsLinks} />
                </div>

                <div className="overlap-group2">
                  <div className="mobile-section">
                    <div className="mobile-apps axiforma-bold-black-14px">
                      Our mobile apps (coming soon)
                    </div>

                    <div className="coming-soon">
                      <div className="img-container">
                        <img
                          className="apple-store"
                          src={footer.appleStore}
                          alt="Download on the App Store"
                        />
                        <img
                          className="play-store"
                          src={footer.playStore}
                          alt="Get it on Google Play"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="social-copy">
                    <div className="social-medias">
                      {footer.social.map((icon, index) => {
                        return (
                          <img
                            src={icon.src}
                            alt={icon.alt}
                            key={index}
                            className="social-icon"
                            onClick={() => window.open(icon.url, "_blank")}
                          />
                        );
                      })}
                    </div>

                    <div className="copyright">
                      <div className="copyright-text axiforma-regular-normal-jumbo-12px">
                        Copyright &copy; Landearn Homes Limited 2021
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
}

export default Footer;