import React, {useEffect} from 'react';
import {loadTimelineData} from 'anima-timeline';
import './index.css';
import TopLogo from './../../../assets/images/logo.png';
import HeroImg from './../../../assets/images/pexels-cottonbro-45693391.png';
import Fade from './../../../assets/images/fade.png';
import Search from './../../../assets/images/search.png';
import Partner1 from './../../../assets/images/partner1.png';
import Line from './../../../assets/images/line1.png';
import Calendly from './../../../assets/images/calendly.png';
import LogoFooter from './../../../assets/images/logo-footer.png';
import LogoIcon from './../../../assets/images/logo-icon.png';
import OneYear from './../../../assets/images/support_agent_black_24dp.png';
import Verified from './../../../assets/images/admin_panel_settings_black_24dp1.png';
import Legal from './../../../assets/images/history_edu_black_24dp.png';
import List1Image from './../../../assets/images/list1.png';
import List1Frame from './../../../assets/images/list11.png';
import List2Image from './../../../assets/images/list2.png';
import List2Frame from './../../../assets/images/list22.png';
import List3Image from './../../../assets/images/list3.png';
import List3Frame from './../../../assets/images/list33.png';
import List4Image from './../../../assets/images/list4.png';
import List4Frame from './../../../assets/images/list44.png';
import List5Image from './../../../assets/images/list5.png';
import List5Frame from './../../../assets/images/list55.png';
import List6Image from './../../../assets/images/list6.png';
import List6Frame from './../../../assets/images/list66.png';

function App() {
  return <Desktop1366Ver2 {...desktop1366Ver2Data} />;
}

export default App;

function Desktop1366Ver2(props) {
  const {
    pexelsCottonbro45693391,
    fade,
    text2,
    text3,
    inputType,
    inputPlaceholder,
    text1,
    text4,
    text5,
    text11,
    vector1,
    ourPartners,
    image1,
    image3,
    image2,
    image4,
    image5,
    overlapGroup5,
    text12,
    text13,
    text6,
    calendlySection,
    overlapGroup,
    logo,
    buyProperties,
    buyAProperty,
    getAMortgage,
    makeAnOffer,
    buyerBenefits,
    business,
    company,
    ourPartners2,
    partnerWithUs,
    soldProperties,
    privacyAndTerms,
    text16,
    privacyPolicy,
    trustAndSafety,
    dataProtection,
    sellProperties,
    sellAProperty,
    pricing,
    sellerBenefits,
    agents,
    listingAsAnAgent,
    text17,
    text18,
    typeinvisibleProps,
    typeinvisible2Props,
    typebasicProps,
    typeghostProps,
    iconssearchProps,
    typebasic2Props,
    typeinvisibleHoverProps,
    typeinvisibleHover2Props,
    typeinvisibleHover3Props,
    typeinvisibleHover4Props,
    group1Props,
    group2Props,
    group22Props,
    group1Props2,
    group2Props2,
    group22Props2,
    typebasic2Props2,
    property1rightSelectedProps,
    benefitsProps,
    benefits2Props,
    benefits3Props,
    inputProps,
    typebasic3Props,
    property1FAQReplyProps,
    property1FAQQuestionProps,
    property1FAQQuestion2Props,
    property1FAQQuestion3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-1366-ver2 screen">
        <div className="header">
          <img className="vector" src={TopLogo} />
          <div className="frame-1">
            <Typeinvisible>{typeinvisibleProps.children}</Typeinvisible>
            <Typeinvisible className={typeinvisible2Props.className}>{typeinvisible2Props.children}</Typeinvisible>
            <div className="frame-3">
              <Typebasic>{typebasicProps.children}</Typebasic>
              <Typeghost>{typeghostProps.children}</Typeghost>
            </div>
          </div>
        </div>
        <div className="overlap-group2">
          <div className="hero-image">
            <div className="overlap-group3">
              <img className="pexels-cottonbro-4569339-1" src={HeroImg} />
              <div className="fade"></div>
              <img className="fade-1" src={Fade} />
            </div>
          </div>
          <div className="top-text-and-search">
            <div className="frame-6">
              <h1 className="text-2">{text2}</h1>
              <div className="text-3">{text3}</div>
            </div>
            <div className="searchinput">
              <div className="search">
                <IconslocationOn />
                <input
                  className="search-for-location"
                  name="searchforlocation"
                  placeholder={inputPlaceholder}
                  type={inputType}
                />
              </div>
              <div className="ctasearch">
                <Iconssearch overlapGroup3={iconssearchProps.overlapGroup3} />
              </div>
            </div>
          </div>
        </div>
        <div className="text-1 axiforma-bold-cod-gray-28px">{text1}</div>
        <div className="filters">
          <Typebasic2>{typebasic2Props.children}</Typebasic2>
          <TypeinvisibleHover>{typeinvisibleHoverProps.children}</TypeinvisibleHover>
          <TypeinvisibleHover className={typeinvisibleHover2Props.className}>
            {typeinvisibleHover2Props.children}
          </TypeinvisibleHover>
          <TypeinvisibleHover className={typeinvisibleHover3Props.className}>
            {typeinvisibleHover3Props.children}
          </TypeinvisibleHover>
          <TypeinvisibleHover className={typeinvisibleHover4Props.className}>
            {typeinvisibleHover4Props.children}
          </TypeinvisibleHover>
        </div>
        <div className="flex-row">
          <Group1
            propertiPreviewProps={group1Props.propertiPreviewProps}
            iconskeyboardArrowLeftProps={group1Props.iconskeyboardArrowLeftProps}
            iconskeyboardArrowLeftProps2={group1Props.iconskeyboardArrowLeftProps2}
          />
          <Group2 propertiPreviewProps={group2Props.propertiPreviewProps} />
          <Group2 propertiPreviewProps={group22Props.propertiPreviewProps}  />
        </div>
        <div className="flex-row-1">
          <Group2 className={group1Props2.className} propertiPreviewProps={group1Props2.propertiPreviewProps}  />
          <Group2 propertiPreviewProps={group2Props2.propertiPreviewProps} />
          <Group2 propertiPreviewProps={group22Props2.propertiPreviewProps} />
        </div>
        <Typebasic className={typebasic2Props2.className}>{typebasic2Props2.children}</Typebasic>
        <div className="overlap-group1">
          <div className="text axiforma-bold-cod-gray-28px">{text4}</div>
          <div className="text axiforma-bold-cod-gray-28px">{text5}</div>
        </div>
        <Property1rightSelected text7={property1rightSelectedProps.text7} text8={property1rightSelectedProps.text8} />
        <div className="benefits">
          <Benefits
            text9={benefitsProps.text9}
            text10={benefitsProps.text10}
            iconssupportAgentBlack24dpProps={benefitsProps.iconssupportAgentBlack24dpProps}
          />
          <Benefits2
            freeSupportI31654={benefits2Props.freeSupportI31654}
            oneYearSupportOn={benefits2Props.oneYearSupportOn}
            iconsadminPanelSettingsBlack24dp1Pr={benefits2Props.iconsadminPanelSettingsBlack24dp1Pr}
          />
          <Benefits3
            freeSupportI31655={benefits3Props.freeSupportI31655}
            oneYearSupportOn={benefits3Props.oneYearSupportOn}
            iconshistoryEduBlack24dpProps={benefits3Props.iconshistoryEduBlack24dpProps}
          />
        </div>
        <p className="text-11">{text11}</p>
        <img className="vector-1" src={Line} />
        <div className="our-partners">{ourPartners}</div>
        <div className="logos">
          <img className="image-1" src={Partner1} />
          <img className="image" src={Partner1} />
          <img className="image" src={Partner1} />
          <img className="image-4" src={Partner1} />
          <img className="image-5" src={Partner1} />
        </div>
        <div className="banner">
          <div className="overlap-group5" style={{ backgroundImage: `url(${overlapGroup5})` }}>
            <div className="frame-25">
              <div className="frame-24">
                <div className="text-12">{text12}</div>
                <div className="text-13">{text13}</div>
              </div>
              <div className="frame-23">
                <Input>{inputProps.children}</Input>
                <Typebasic className={typebasic3Props.className}>{typebasic3Props.children}</Typebasic>
              </div>
            </div>
          </div>
        </div>
        <div className="text-6 axiforma-bold-cod-gray-28px">{text6}</div>
        <div className="faq">
          <Property1FAQReply
            text14={property1FAQReplyProps.text14}
            vector2={property1FAQReplyProps.vector2}
            text15={property1FAQReplyProps.text15}
          />
          <Property1FAQQuestion
            howIsLandearnDiff={property1FAQQuestionProps.howIsLandearnDiff}
            vector2={property1FAQQuestionProps.vector2}
          />
          <Property1FAQQuestion
            howIsLandearnDiff={property1FAQQuestion2Props.howIsLandearnDiff}
            vector2={property1FAQQuestion2Props.vector2}
          />
          <Property1FAQQuestion
            howIsLandearnDiff={property1FAQQuestion3Props.howIsLandearnDiff}
            vector2={property1FAQQuestion3Props.vector2}
          />
        </div>
        <img className="calendly-section" src={Calendly} />
        <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <div className="frame-43">
            <img className="logo" src={LogoFooter} />
            <div className="footer-items">
              <div className="frame-39">
                <div className="frame-36">
                  <div className="buy-properties axiforma-bold-black-14px">{buyProperties}</div>
                  <div className="frame-35">
                    <div className="buy-a-property axiforma-medium-black-12px">{buyAProperty}</div>
                    <div className="get-a-mortgage axiforma-medium-black-12px">{getAMortgage}</div>
                    <div className="make-an-offer axiforma-medium-black-12px">{makeAnOffer}</div>
                    <div className="buyer-benefits axiforma-medium-black-12px">{buyerBenefits}</div>
                  </div>
                </div>
                <div className="frame-37">
                  <div className="business axiforma-bold-black-14px">{business}</div>
                  <div className="frame-35-1">
                    <div className="company axiforma-medium-black-12px">{company}</div>
                    <div className="our-partners-1 axiforma-medium-black-12px">{ourPartners2}</div>
                    <div className="partner-with-us axiforma-medium-black-12px">{partnerWithUs}</div>
                    <div className="sold-properties axiforma-medium-black-12px">{soldProperties}</div>
                  </div>
                </div>
                <div className="frame-38">
                  <div className="privacy-and-terms axiforma-bold-black-14px">{privacyAndTerms}</div>
                  <div className="frame-35-2">
                    <div className="text-16 axiforma-medium-black-12px">{text16}</div>
                    <div className="privacy-policy axiforma-medium-black-12px">{privacyPolicy}</div>
                    <div className="trust-and-safety axiforma-medium-black-12px">{trustAndSafety}</div>
                    <div className="data-protection axiforma-medium-black-12px">{dataProtection}</div>
                  </div>
                </div>
              </div>
              <div className="items">
                <div className="frame-36-1">
                  <div className="sell-properties axiforma-bold-black-14px">{sellProperties}</div>
                  <div className="frame-35-3">
                    <div className="sell-a-property axiforma-medium-black-12px">{sellAProperty}</div>
                    <div className="pricing axiforma-medium-black-12px">{pricing}</div>
                    <div className="seller-benefits axiforma-medium-black-12px">{sellerBenefits}</div>
                  </div>
                </div>
                <div className="bottom">
                  <div className="agents axiforma-bold-black-14px">{agents}</div>
                  <div className="frame-35-4">
                    <div className="listing-as-an-agent axiforma-medium-black-12px">{listingAsAnAgent}</div>
                    <div className="text-17 axiforma-medium-black-12px">{text17}</div>
                    <div className="text-18 axiforma-medium-black-12px">{text18}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Typeinvisible(props) {
  const { children, className } = props;

  useEffect(() => {
    loadTimelineData(x31612TimelineData);
  }, []);

  return (
    <div className={`x31612 component component-wrapper not-ready ${className || ""}`}>
      <div className="button-i316122135-dMLMMl">{children}</div>
    </div>
  );
}

const x31612TimelineData = [
  {
    initial_state_name: "Type=invisible",
    root_element: ".x31612",
    states_flow: {
      "Type=basic": {
        listeners: [],
        overrides: {},
      },
      "Type=basic-Hover": {
        listeners: [],
        overrides: {},
      },
      "Type=ghost": {
        listeners: [],
        overrides: {},
      },
      "Type=invisible": {
        listeners: [],
        overrides: {},
      },
      "Type=invisible-Hover": {
        listeners: [],
        overrides: {},
      },
    },
  },
];


function Typebasic(props) {
  const { children, className } = props;

  useEffect(() => {
    loadTimelineData(x31615TimelineData);
  }, []);

  return (
    <div className={`x31615 component component-wrapper not-ready ${className || ""}`}>
      <div className="button-i31615249-OAYiOw">{children}</div>
    </div>
  );
}

const x31615TimelineData = [
  {
    initial_state_name: "Type=basic",
    root_element: ".x31615",
    states_flow: {
      "Type=basic": {
        listeners: [],
        overrides: {},
      },
      "Type=basic-Hover": {
        listeners: [],
        overrides: {},
      },
      "Type=ghost": {
        listeners: [],
        overrides: {},
      },
      "Type=invisible": {
        listeners: [],
        overrides: {},
      },
      "Type=invisible-Hover": {
        listeners: [],
        overrides: {},
      },
    },
  },
];


function Typeghost(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x31616TimelineData);
  }, []);

  return (
    <div className="x31616 component component-wrapper not-ready">
      <div className="button-i316162181-SbgD5E">{children}</div>
    </div>
  );
}

const x31616TimelineData = [
  {
    initial_state_name: "Type=ghost",
    root_element: ".x31616",
    states_flow: {
      "Type=basic": {
        listeners: [],
        overrides: {},
      },
      "Type=basic-Hover": {
        listeners: [],
        overrides: {},
      },
      "Type=ghost": {
        listeners: [],
        overrides: {},
      },
      "Type=invisible": {
        listeners: [],
        overrides: {},
      },
      "Type=invisible-Hover": {
        listeners: [],
        overrides: {},
      },
    },
  },
];


function IconslocationOn() {
  return (
    <div className="iconslocationon">
      <div className="overlap-group3-1">
        {/* <img className="vector-2" src={OneYear} /> */}
      </div>
    </div>
  );
}


function Iconssearch(props) {
  const { overlapGroup3 } = props;

  return (
    <div className="iconssearch">
      <div className="overlap-group3-2" style={{ backgroundImage: `url(${overlapGroup3})` }}>
        <img className="vector-3" src={Search} />
      </div>
    </div>
  );
}


function Typebasic2(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x31642TimelineData);
  }, []);

  return (
    <div className="x31642 component component-wrapper not-ready">
      <div className="button-i316422277-4ndSxV">{children}</div>
    </div>
  );
}

const x31642TimelineData = [
  {
    initial_state_name: "Type=basic",
    root_element: ".x31642",
    states_flow: {
      "Type=basic": {
        listeners: [],
        overrides: {},
      },
      "Type=basic-Hover": {
        listeners: [],
        overrides: {},
      },
      "Type=ghost": {
        listeners: [],
        overrides: {},
      },
      "Type=invisible": {
        listeners: [],
        overrides: {},
      },
      "Type=invisible-Hover": {
        listeners: [],
        overrides: {},
      },
    },
  },
];


function TypeinvisibleHover(props) {
  const { children, className } = props;

  useEffect(() => {
    loadTimelineData(x31643TimelineData);
  }, []);

  return (
    <div className={`x31643 component component-wrapper not-ready ${className || ""}`}>
      <div className="button-i316432285-LWwZsd">{children}</div>
    </div>
  );
}

const x31643TimelineData = [
  {
    initial_state_name: "Type=invisible-Hover",
    root_element: ".x31643",
    states_flow: {
      "Type=basic": {
        listeners: [],
        overrides: {},
      },
      "Type=basic-Hover": {
        listeners: [],
        overrides: {},
      },
      "Type=ghost": {
        listeners: [],
        overrides: {},
      },
      "Type=invisible": {
        listeners: [],
        overrides: {},
      },
      "Type=invisible-Hover": {
        listeners: [],
        overrides: {},
      },
    },
  },
];


function Group1(props) {
  const { propertiPreviewProps, iconskeyboardArrowLeftProps, iconskeyboardArrowLeftProps2 } = props;

  return (
    <div className="group-1">
      <div className="overlap-group6">
        <PropertiPreview image={propertiPreviewProps.image} frame12={propertiPreviewProps.frame12} />
        <div className="arrows">
          <div className="arrows-1">
            <IconskeyboardArrowLeft overlapGroup3={iconskeyboardArrowLeftProps.overlapGroup3} />
          </div>
          <div className="frame-14">
            <IconskeyboardArrowRight overlapGroup3={iconskeyboardArrowLeftProps2.overlapGroup3} />
          </div>
        </div>
      </div>
    </div>
  );
}


function PropertiPreview(props) {
  const { image, frame12, className } = props;

  return (
    <div className={`properti-preview-1 ${className || ""}`}>
      <img className="image-2" src={image} />
      <img className="frame-12" src={frame12} />
    </div>
  );
}


function IconskeyboardArrowLeft(props) {
  const { overlapGroup3 } = props;

  return (
    <div className="iconskeyboardarrowleft">
      <div className="overlap-group3-3" style={{ backgroundImage: `url(${overlapGroup3})` }}>
        <img className="vector-4" src="" />
      </div>
    </div>
  );
}


function IconskeyboardArrowRight(props) {
  const { overlapGroup3 } = props;

  return (
    <div className="iconskeyboardarrowright">
      <div className="overlap-group3-4" style={{ backgroundImage: `url(${overlapGroup3})` }}>
        <img className="vector-5" src="" />
      </div>
    </div>
  );
}


function Group2(props) {
  const { className, propertiPreviewProps } = props;

  return (
    <div className={`group-2 ${className || ""}`}>
      <PropertiPreview
        image={propertiPreviewProps.image}
        frame12={propertiPreviewProps.frame12}
        className={propertiPreviewProps.className}
      />
    </div>
  );
}


function Property1rightSelected(props) {
  const { text7, text8 } = props;

  useEffect(() => {
    loadTimelineData(x31651TimelineData);
  }, []);

  return (
    <div className="x31651 component component-wrapper not-ready">
      <div className="frame-17-qUTKev">
        <div className="frame-16-xzEGZJ">
          <div className="text-7-GfdtPY">{text7}</div>
        </div>
        <div className="frame-15-xzEGZJ">
          <div className="text-8-dBGksx">{text8}</div>
        </div>
      </div>
    </div>
  );
}

const x31651TimelineData = [
  {
    initial_state_name: "Property-1=right-selected",
    root_element: ".x31651",
    states_flow: {
      "Property-1=left-selected": {
        listeners: [],
        overrides: {},
      },
      "Property-1=right-selected": {
        listeners: [],
        overrides: {},
      },
    },
  },
];


function Benefits(props) {
  const { text9, text10, iconssupportAgentBlack24dpProps } = props;

  return (
    <div className="benefits-1 border-1px-dark300">
      <div className="frame-19">
        <IconssupportAgentBlack24dp
          overlapGroup4={iconssupportAgentBlack24dpProps.overlapGroup4}
          vector2={iconssupportAgentBlack24dpProps.vector2}
          vector3={iconssupportAgentBlack24dpProps.vector3}
          vector4={iconssupportAgentBlack24dpProps.vector4}
        />
        <div className="text-9 axiforma-bold-amazon-18px">{text9}</div>
      </div>
      <p className="text-10 axiforma-regular-normal-black-14px">{text10}</p>
    </div>
  );
}


function IconssupportAgentBlack24dp(props) {
  const { overlapGroup4, vector2, vector3, vector4 } = props;

  return (
    <div className="iconssupportagentblack24dp">
      <div className="overlap-group3-5">
        <img className="vector-6" src="" />
        <div className="group-3">
          <div className="overlap-group4" style={{ backgroundImage: `url(${overlapGroup4})` }}>
            <img className="vector-7" src={OneYear} />
            <img className="vector-8" src={OneYear} />
            <img className="vector-9" src={OneYear} />
          </div>
        </div>
      </div>
    </div>
  );
}


function Benefits2(props) {
  const { freeSupportI31654, oneYearSupportOn, iconsadminPanelSettingsBlack24dp1Pr } = props;

  return (
    <div className="benefits-2 border-1px-dark300">
      <div className="frame-19-1">
        <IconsadminPanelSettingsBlack24dp1
          vector2={iconsadminPanelSettingsBlack24dp1Pr.vector2}
          vector3={iconsadminPanelSettingsBlack24dp1Pr.vector3}
          vector4={iconsadminPanelSettingsBlack24dp1Pr.vector4}
        />
        <div className="free-support-i31654 axiforma-bold-amazon-18px">{freeSupportI31654}</div>
      </div>
      <p className="one-year-support-on axiforma-regular-normal-black-14px">{oneYearSupportOn}</p>
    </div>
  );
}


function IconsadminPanelSettingsBlack24dp1(props) {
  const { vector2, vector3, vector4 } = props;

  return (
    <div className="iconsadminpane-gsblack24dp-1">
      <div className="overlap-group3-6">
        <img className="vector-10" src="" />
        <div className="group-5">
          <div className="overlap-group4-1">
            <img className="vector-11" src={Verified} />
            <img className="vector-12" src={Verified} />
            <img className="vector-13" src={Verified} />
          </div>
        </div>
      </div>
    </div>
  );
}


function Benefits3(props) {
  const { freeSupportI31655, oneYearSupportOn, iconshistoryEduBlack24dpProps } = props;

  return (
    <div className="benefits-3 border-1px-dark300">
      <div className="frame-19-2">
        <IconshistoryEduBlack24dp vector2={iconshistoryEduBlack24dpProps.vector2} />
        <div className="free-support-i31655 axiforma-bold-amazon-18px">{freeSupportI31655}</div>
      </div>
      <p className="one-year-support-on-1 axiforma-regular-normal-black-14px">{oneYearSupportOn}</p>
    </div>
  );
}


function IconshistoryEduBlack24dp(props) {
  const { vector2 } = props;

  return (
    <div className="iconshistoryedublack24dp">
      <div className="overlap-group3-7">
        <img className="vector-14" src={Legal} />
        <img className="vector-15" src={Legal} />
      </div>
    </div>
  );
}


function Input(props) {
  const { children } = props;

  return (
    <div className="input">
      <div className="placeholder-i31668">{children}</div>
    </div>
  );
}


function Property1FAQReply(props) {
  const { text14, vector2, text15 } = props;

  useEffect(() => {
    loadTimelineData(x31685TimelineData);
  }, []);

  return (
    <div className="x31685 component component-wrapper not-ready">
      <div className="frame-27-6Qgaoy">
        <div className="text-14-0BLqHP">{text14}</div>
        <div className="iconskeyboardarrowdown-0BLqHP">
          <img className="vector-6TiKyZ" src="" />
          <img className="vector-5KldxP" src={vector2} />
        </div>
      </div>
      <div className="frame-28-6Qgaoy">
        <div className="text-15-ULAsjc">{text15}</div>
      </div>
    </div>
  );
}

const x31685TimelineData = [
  {
    initial_state_name: "Property-1=FAQ-reply",
    root_element: ".x31685",
    states_flow: {
      "Property-1=FAQ-question": {
        listeners: [],
        overrides: {},
      },
      "Property-1=FAQ-reply": {
        listeners: [],
        overrides: {},
      },
    },
  },
];


function Property1FAQQuestion(props) {
  const { howIsLandearnDiff, vector2 } = props;

  useEffect(() => {
    loadTimelineData(x31686TimelineData);
  }, []);

  return (
    <div className="x31686 component component-wrapper not-ready">
      <div className="how-is-landearn-diff-e1YXdj">{howIsLandearnDiff}</div>
      <div className="iconskeyboardarrowright-e1YXdj">
        <img className="vector-vH9FoV" src="" />
        <img className="vector-UBHdQy" src={vector2} />
      </div>
    </div>
  );
}

const x31686TimelineData = [
  {
    initial_state_name: "Property-1=FAQ-question",
    root_element: ".x31686",
    states_flow: {
      "Property-1=FAQ-question": {
        listeners: [],
        overrides: {},
      },
      "Property-1=FAQ-reply": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

const typeinvisibleData = {
    children: "Sell",
};

const typeinvisible2Data = {
    children: "Buy",
    className: "x31613",
};

const typebasicData = {
    children: "List your property",
};

const typeghostData = {
    children: "Login",
};

const iconssearchData = {
    overlapGroup3: Search,
};

const typebasic2Data = {
    children: "Featured properties",
};

const typeinvisibleHoverData = {
    children: "Homes",
};

const typeinvisibleHover2Data = {
    children: "Offices",
    className: "x31644",
};

const typeinvisibleHover3Data = {
    children: "Lands",
    className: "x31645",
};

const typeinvisibleHover4Data = {
    children: "Estate properties",
    className: "x31646",
};

const propertiPreviewData = {
    image: List1Image,
    frame12: List1Frame,
};

const iconskeyboardArrowLeftData = {
    overlapGroup3: "",
};

const iconskeyboardArrowRightData = {
    overlapGroup3: "",
};

const group1Data = {
    propertiPreviewProps: propertiPreviewData,
    iconskeyboardArrowLeftProps: iconskeyboardArrowLeftData,
    iconskeyboardArrowLeftProps2: iconskeyboardArrowRightData,
};

const propertiPreview2Data = {
    image: List2Image,
    frame12: List2Frame,
    className: "properti-preview",
};

const group2Data = {
    propertiPreviewProps: propertiPreview2Data,
};

const propertiPreview3Data = {
    image: List3Image,
    frame12: List3Frame,
    className: "properti-preview",
};

const group22Data = {
    propertiPreviewProps: propertiPreview3Data,
};

const propertiPreview4Data = {
    image: List4Image,
    frame12: List4Frame,
    className: "properti-preview",
};

const group23Data = {
    className: "group-4",
    propertiPreviewProps: propertiPreview4Data,
};

const propertiPreview5Data = {
    image: List5Image,
    frame12: List5Frame,
    className: "properti-preview",
};

const group24Data = {
    propertiPreviewProps: propertiPreview5Data,
};

const propertiPreview6Data = {
    image: List6Image,
    frame12: List6Frame,
    className: "properti-preview",
};

const group25Data = {
    propertiPreviewProps: propertiPreview6Data,
};

const typebasic3Data = {
    children: "View all 15 256 verified properties",
    className: "x31650",
};

const property1rightSelectedData = {
    text7: "For buyers",
    text8: "For sellers",
};

const iconssupportAgentBlack24dpData = {
    overlapGroup4: "",
    vector2: "",
    vector3: "",
    vector4: "",
};

const benefitsData = {
    text9: "Free support",
    text10: "One year support on your home inspection, enquiry or issues.",
    iconssupportAgentBlack24dpProps: iconssupportAgentBlack24dpData,
};

const iconsadminPanelSettingsBlack24dp1Data = {
    vector2: "",
    vector3: "",
    vector4: "",
};

const benefits2Data = {
    freeSupportI31654: "Verified offers",
    oneYearSupportOn: "Properties are of valid titles and information stated is as is.",
    iconsadminPanelSettingsBlack24dp1Pr: iconsadminPanelSettingsBlack24dp1Data,
};

const iconshistoryEduBlack24dpData = {
    vector2: "",
};

const benefits3Data = {
    freeSupportI31655: "Legal help",
    oneYearSupportOn: "Documents are prepared for you by Landearn legal team.",
    iconshistoryEduBlack24dpProps: iconshistoryEduBlack24dpData,
};

const inputData = {
    children: "Email address",
};

const typebasic4Data = {
    children: "Subscribe",
    className: "x31669",
};

const property1FAQReplyData = {
    text14: "How is Landearn different from traditional real estate sites and agents?",
    vector2: "",
    text15: "Landearn is a real estate brokerage firm with a model developed with a developing nations first approach. Given too many irregularities around finding a property with the right title and the ones without known dispute, Landearn decided to partner with relevant bodies to help the buyer undertake the responsibility of performing due diligence. Aside from due diligence, Landearn helps buyers perform documentations, reduce the number of bottlenecks in obtaining a property, reduce too many hidden charges, buy at affordable rates, access mortgage facilities faster and easier, and finish the buying process in record time. For the sellers, Landearn helps them sell faster, given the portal is accessible for anyone around the world to make purchase from any given location and be rest assured that the purchase is done in good faith, and through our network, a lot more persons can access and find the property. In order words, we offer advertisement on a very large scale. Sellers also benefits from the clear and concise legal works we render, document handling, and having the advantage of managing properties he sells on his dashboard and make reference to them any time.",
};

const property1FAQQuestionData = {
    howIsLandearnDiff: "How is Landearn different from traditional agents",
    vector2: "",
};

const property1FAQQuestion2Data = {
    howIsLandearnDiff: "What are your refund policies?",
    vector2: "",
};

const property1FAQQuestion3Data = {
    howIsLandearnDiff: "How do I create scheduled messages and send them to guests automatically?",
    vector2: "",
};

const desktop1366Ver2Data = {
    pexelsCottonbro45693391: "",
    fade: "",
    text2: "Buy verified properties",
    text3: "Buy trusted properties from any location at a cheaper rate, alongside legal services and deed transfers all covered for you.",
    inputType: "text",
    inputPlaceholder: "Search for location",
    text1: "Explore verified properties with Landearn",
    text4: "Why work with Landearn",
    text5: "Why work with Landearn",
    text11: "How to buy safely with us",
    vector1: "",
    ourPartners: "OUR PARTNERS",
    image1: "",
    image3: "",
    image2: "",
    image4: "",
    image5: "",
    overlapGroup5: "",
    text12: <>Don’t miss the best verified <br />offers on Landearn</>,
    text13: "Subscribe today to get fresh offers faster",
    text6: "Frequently Asked Questions",
    calendlySection: "",
    overlapGroup: "",
    logo: "",
    buyProperties: "Buy properties",
    buyAProperty: "Buy a property",
    getAMortgage: "Get a mortgage",
    makeAnOffer: "Make an offer",
    buyerBenefits: "Buyer benefits",
    business: "Business",
    company: "Company",
    ourPartners2: "Our partners",
    partnerWithUs: "Partner with us",
    soldProperties: "Sold properties",
    privacyAndTerms: "Privacy and Terms",
    text16: "Terms and condiitions",
    privacyPolicy: "Privacy policy",
    trustAndSafety: "Trust and Safety",
    dataProtection: "Data protection",
    sellProperties: "Sell properties",
    sellAProperty: "Sell a property",
    pricing: "Pricing",
    sellerBenefits: "Seller benefits",
    agents: "Agents",
    listingAsAnAgent: "Listing as an agent",
    text17: "Become a Landern agent",
    text18: "Traditional agent pricing",
    typeinvisibleProps: typeinvisibleData,
    typeinvisible2Props: typeinvisible2Data,
    typebasicProps: typebasicData,
    typeghostProps: typeghostData,
    iconssearchProps: iconssearchData,
    typebasic2Props: typebasic2Data,
    typeinvisibleHoverProps: typeinvisibleHoverData,
    typeinvisibleHover2Props: typeinvisibleHover2Data,
    typeinvisibleHover3Props: typeinvisibleHover3Data,
    typeinvisibleHover4Props: typeinvisibleHover4Data,
    group1Props: group1Data,
    group2Props: group2Data,
    group22Props: group22Data,
    group1Props2: group23Data,
    group2Props2: group24Data,
    group22Props2: group25Data,
    typebasic2Props2: typebasic3Data,
    property1rightSelectedProps: property1rightSelectedData,
    benefitsProps: benefitsData,
    benefits2Props: benefits2Data,
    benefits3Props: benefits3Data,
    inputProps: inputData,
    typebasic3Props: typebasic4Data,
    property1FAQReplyProps: property1FAQReplyData,
    property1FAQQuestionProps: property1FAQQuestionData,
    property1FAQQuestion2Props: property1FAQQuestion2Data,
    property1FAQQuestion3Props: property1FAQQuestion3Data,
};

