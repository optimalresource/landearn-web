import React, {useEffect} from 'react';
import {loadTimelineData} from 'anima-timeline';
import './index.css';
import Top1 from '../assets/images/top1.png';
import Bottom1 from '../assets/images/bottom1.png';
import Top2 from '../assets/images/top2.png';
import Bottom2 from '../assets/images/bottom2.png';
import Top3 from '../assets/images/top3.png';
import Bottom3 from '../assets/images/bottom3.png';
import Top4 from '../assets/images/top4.png';
import Bottom4 from '../assets/images/bottom4.png';
import Top5 from '../assets/images/top5.png';
import Bottom5 from '../assets/images/bottom5.png';
import Top6 from '../assets/images/top6.png';
import Bottom6 from '../assets/images/bottom6.png';

import HeroImg from '../assets/images/hero-img1.png';
import GreenLogo from '../assets/images/mobile/logo_green_desktop.png';

function App() {
  return <Desktop1366Ver2 {...desktop1366Ver2Data} />;
}

export default App;

function Desktop1366Ver2(props) {
  const {
    logo,
    overlapGroup2,
    text35,
    text36,
    cta_Search,
    text34,
    text37,
    text38,
    howToBuyWithUs,
    ourPartners,
    overlapGroup3,
    text44,
    text45,
    text39,
    logo2,
    frame1Props,
    filtersProps,
    group12Props,
    group13Props,
    group15Props,
    group16Props,
    typebasicProps,
    benefitsProps,
    benefits2Props,
    benefits3Props,
    inputProps,
    typebasic2Props,
    property1FAQReplyProps,
    property1FAQQuestionProps,
    property1FAQQuestion2Props,
    property1FAQQuestion3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-1366-ver2 screen">
        <div className="header">
          <a href="#"><img className="logo" src={logo} alt="Good" /></a>
          <Frame1
            typeinvisibleProps={frame1Props.typeinvisibleProps}
            typeinvisible2Props={frame1Props.typeinvisible2Props}
            typebasicProps={frame1Props.typebasicProps}
          />
        </div>
        <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
          <div className="top-text-and-search">
            <div className="frame-6">
              <h1 className="text-2">{text35}</h1>
              <div className="text-3">{text36}</div>
            </div>
            <div className="searchinput">
              <Search />
              <img className="ctasearch" src={cta_Search} alt="Good" />
            </div>
          </div>
        </div>
        <div className="text-1 axiforma-bold-cod-gray-28px">{text34}</div>
        <Filters
          typeinvisibleHoverProps={filtersProps.typeinvisibleHoverProps}
          typeinvisibleHover2Props={filtersProps.typeinvisibleHover2Props}
          typeinvisibleHover3Props={filtersProps.typeinvisibleHover3Props}
          typeinvisibleHover4Props={filtersProps.typeinvisibleHover4Props}
        />
        <div className="flex-row">
          <Group1 top={Top1} bottom={Bottom1} />
          <Group1 className={group12Props.className} top={Top2} bottom={Bottom2} />
          <Group1 className={group13Props.className} top={Top3} bottom={Bottom3} />
        </div>
        <div className="flex-row-1">
          <Group1 top={Top4} bottom={Bottom4} />
          <Group1 className={group15Props.className} top={Top5} bottom={Bottom5} />
          <Group1 className={group16Props.className} top={Top6} bottom={Bottom6} />
        </div>
        <Typebasic className={typebasicProps.className}>{typebasicProps.children}</Typebasic>
        <div className="overlap-group1">
          <div className="text axiforma-bold-cod-gray-28px">{text37}</div>
          <div className="text axiforma-bold-cod-gray-28px">{text38}</div>
        </div>
        <Property1rightSelected />
        <div className="benefits">
          <Benefits
            iconsSupport_Agent_Black_24Dp={benefitsProps.iconsSupport_Agent_Black_24Dp}
            text9={benefitsProps.text9}
            text10={benefitsProps.text10}
          />
          <Benefits2
            freeSupportI31654={benefits2Props.freeSupportI31654}
            oneYearSupportOn={benefits2Props.oneYearSupportOn}
          />
          <Benefits3
            freeSupportI31655={benefits3Props.freeSupportI31655}
            oneYearSupportOn={benefits3Props.oneYearSupportOn}
            iconshistoryEduBlack24dpProps={benefits3Props.iconshistoryEduBlack24dpProps}
          />
        </div>
        <p className="how-to-buy-with-us axiforma-bold-cod-gray-14px">{howToBuyWithUs}</p>
        <img
          className="vector-1"
          alt="Good"
          src="https://anima-uploads.s3.amazonaws.com/projects/611bfeda331562400fadc1b1/releases/611c37a298305a35d443c704/img/vector-1@1x.svg"
        />
        <div className="our-partners">{ourPartners}</div>
        <Logos />
        <div className="overlap-group3" style={{ backgroundImage: `url(${overlapGroup3})` }}>
          <div className="frame-25">
            <div className="frame-24">
              <div className="text-11">{text44}</div>
              <div className="text-12">{text45}</div>
            </div>
            <div className="frame-23">
              <Input inputType={inputProps.inputType} inputPlaceholder={inputProps.inputPlaceholder} />
              <Typebasic className={typebasic2Props.className}>{typebasic2Props.children}</Typebasic>
            </div>
          </div>
        </div>
        <div className="text-6 axiforma-bold-cod-gray-28px">{text39}</div>
        <div className="faq">
          <Property1FAQReply
            text13={property1FAQReplyProps.text13}
            iconsKeyboard_Arrow_Down={property1FAQReplyProps.iconsKeyboard_Arrow_Down}
            text14={property1FAQReplyProps.text14}
          />
          <Property1FAQQuestion howIsLandearnDiff={property1FAQQuestionProps.howIsLandearnDiff} />
          <Property1FAQQuestion howIsLandearnDiff={property1FAQQuestion2Props.howIsLandearnDiff} />
          <Property1FAQQuestion howIsLandearnDiff={property1FAQQuestion3Props.howIsLandearnDiff} />
        </div>
        <img
          className="calendly-section"
          src=""
          alt="Good"
        />
        <div className="overlap-group">
          <div className="frame-43">
            <img className="logo-1" src={logo2} alt="Good" />
            <div className="footer-items">
              <div className="frame-39">
                <Frame36 />
                <Frame37 />
                <Frame38 />
              </div>
              <div className="items">
                <Frame362 />
                <Bottom />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Frame1(props) {
  const { typeinvisibleProps, typeinvisible2Props, typebasicProps } = props;

  return (
    <div className="frame-1">
      <Typeinvisible>{typeinvisibleProps.children}</Typeinvisible>
      <Typeinvisible className={typeinvisible2Props.className}>{typeinvisible2Props.children}</Typeinvisible>
      <div className="frame-3">
        <Typebasic>{typebasicProps.children}</Typebasic>
        <TypeSecondary />
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
    <div className={`x31612 component component-wrapper ${className || ""}`}>
      <div className="button-i316122135-dMLMMl">
        <a href="#" >{children}</a></div>
    </div>
  );
}

const x31612TimelineData = [
  {
    initial_state_name: "Type=invisible",
    root_element: ".x31612",
    states_flow: {
      "Type=Secondary": {
        listeners: [],
        overrides: {},
      },
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
    <a href="#">
    <div className={`x31615 component component-wrapper not-ready ${className || ""}`}>
      <div className="button-i31615249-OAYiOw">{children}</div>
    </div>
    </a>
  );
}

const x31615TimelineData = [
  {
    initial_state_name: "Type=basic",
    root_element: ".x31615",
    states_flow: {
      "Type=Secondary": {
        listeners: [],
        overrides: {},
      },
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


function TypeSecondary() {
  useEffect(() => {
    loadTimelineData(x31616TimelineData);
  }, []);

  return (
    <a href="#">
    <div className="x31616 component component-wrapper not-ready">
      <div className="button-i316164470-SbgD5E">Login</div>
    </div>
    </a>
  );
}

const x31616TimelineData = [
  {
    initial_state_name: "Type=Secondary",
    root_element: ".x31616",
    states_flow: {
      "Type=Secondary": {
        listeners: [],
        overrides: {},
      },
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


function Search() {
  return (
    <div className="search">
      <img
        className="iconslocationon"
        alt="Good"
        src="https://anima-uploads.s3.amazonaws.com/projects/611bfeda331562400fadc1b1/releases/611c37a298305a35d443c704/img/icons-location-on@2x.png"
      />
      <input
        className="search-for-location axiforma-medium-cod-gray-18px"
        name="searchforlocation"
        placeholder="Search for location"
        type="text"
      />
    </div>
  );
}


function Filters(props) {
  const {
    typeinvisibleHoverProps,
    typeinvisibleHover2Props,
    typeinvisibleHover3Props,
    typeinvisibleHover4Props,
  } = props;

  return (
    <div className="filters">
      <Typebasic2 />
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
  );
}


function Typebasic2() {
  useEffect(() => {
    loadTimelineData(x31642TimelineData);
  }, []);

  return (
    <div className="x31642 component component-wrapper not-ready">
      <div className="button-i316422277-4ndSxV">Featured properties</div>
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
  const { className, top, bottom } = props;

  return (
    <div className={`group-2 ${className || ""}`}>
      <PropertiPreview top={top} bottom={bottom} />
    </div>
  );
}


function PropertiPreview(props) {
  const { top, bottom } = props;
  return (
    <div className="properti-preview">
      <img
        className="image"
        src={top}
        alt="Good"
      />
      <img
        className="frame-12"
        src={bottom}
        alt="Good"
      />
    </div>
  );
}


function Property1rightSelected() {
  useEffect(() => {
    loadTimelineData(x31651TimelineData);
  }, []);

  return (
    <div className="x31651 component component-wrapper not-ready">
      <div className="frame-17-qUTKev">
        <div className="frame-16-xzEGZJ">
          <div className="text-7-GfdtPY">For buyers</div>
        </div>
        <div className="frame-15-xzEGZJ">
          <div className="text-8-dBGksx">For sellers</div>
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
  const { iconsSupport_Agent_Black_24Dp, text9, text10 } = props;

  return (
    <div className="benefits-1 border-1px-dark300">
      <div className="frame-19">
        <img className="iconssupportagentblack24dp" src={iconsSupport_Agent_Black_24Dp} alt="Good" />
        <div className="text-9 axiforma-bold-amazon-18px">{text9}</div>
      </div>
      <p className="text-10 axiforma-regular-normal-black-14px">{text10}</p>
    </div>
  );
}


function Benefits2(props) {
  const { freeSupportI31654, oneYearSupportOn } = props;

  return (
    <div className="benefits-2 border-1px-dark300">
      <div className="frame-19-1">
        <IconsadminPanelSettingsBlack24dp1 />
        <div className="free-support-i31654 axiforma-bold-amazon-18px">{freeSupportI31654}</div>
      </div>
      <p className="one-year-support-on axiforma-regular-normal-black-14px">{oneYearSupportOn}</p>
    </div>
  );
}


function IconsadminPanelSettingsBlack24dp1() {
  return (
    <div className="iconsadminpane-gsblack24dp-1">
      <div className="overlap-group4">
        <img
          className="vector"
          alt="Good"
          src="https://anima-uploads.s3.amazonaws.com/projects/611bfeda331562400fadc1b1/releases/611c37a298305a35d443c704/img/vector@2x.png"
        />
        <div className="group-3"></div>
      </div>
    </div>
  );
}


function Benefits3(props) {
  const { freeSupportI31655, oneYearSupportOn, iconshistoryEduBlack24dpProps } = props;

  return (
    <div className="benefits-3 border-1px-dark300">
      <div className="frame-19-2">
        <IconshistoryEduBlack24dp group={iconshistoryEduBlack24dpProps.group} />
        <div className="free-support-i31655 axiforma-bold-amazon-18px">{freeSupportI31655}</div>
      </div>
      <p className="one-year-support-on-1 axiforma-regular-normal-black-14px">{oneYearSupportOn}</p>
    </div>
  );
}


function IconshistoryEduBlack24dp(props) {
  const { group } = props;

  return (
    <div className="iconshistoryedublack24dp">
      <div className="overlap-group4-1">
        <img
          className="vector-2"
          alt="Good"
          src="https://anima-uploads.s3.amazonaws.com/projects/611bfeda331562400fadc1b1/releases/611c37a298305a35d443c704/img/vector@2x.png"
        />
        <img className="group-4" src={group} alt="Good" />
      </div>
    </div>
  );
}


function Logos() {
  return (
    <div className="logos">
      <img
        className="image-1-1"
        alt="Good"
        src="https://anima-uploads.s3.amazonaws.com/projects/611bfeda331562400fadc1b1/releases/611c37a298305a35d443c704/img/image-1@2x.png"
      />
      <img
        className="image-1"
        alt="Good"
        src="https://anima-uploads.s3.amazonaws.com/projects/611bfeda331562400fadc1b1/releases/611c37a298305a35d443c704/img/image-3@2x.png"
      />
      <img
        className="image-1"
        alt="Good"
        src="https://anima-uploads.s3.amazonaws.com/projects/611bfeda331562400fadc1b1/releases/611c37a298305a35d443c704/img/image-2@2x.png"
      />
      <img
        className="image-4"
        alt="Good"
        src="https://anima-uploads.s3.amazonaws.com/projects/611bfeda331562400fadc1b1/releases/611c37a298305a35d443c704/img/image-4@2x.png"
      />
      <img
        className="image-5"
        alt="Good"
        src="https://anima-uploads.s3.amazonaws.com/projects/611bfeda331562400fadc1b1/releases/611c37a298305a35d443c704/img/image-5@2x.png"
      />
    </div>
  );
}


function Input(props) {
  const { inputType, inputPlaceholder } = props;

  return (
    <div className="input">
      <input className="placeholder-i3166831372" name="placeholder" placeholder={inputPlaceholder} type={inputType} />
    </div>
  );
}


function Property1FAQReply(props) {
  const { text13, iconsKeyboard_Arrow_Down, text14 } = props;

  useEffect(() => {
    loadTimelineData(x31685TimelineData);
  }, []);

  return (
    <div className="x31685 component component-wrapper not-ready">
      <div className="frame-27-6Qgaoy">
        <div className="text-13-0BLqHP">{text13}</div>
        <img className="iconskeyboardarrowdown-0BLqHP" src={iconsKeyboard_Arrow_Down} alt="Good" />
      </div>
      <div className="frame-28-6Qgaoy">
        <div className="text-14-ULAsjc">{text14}</div>
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
  const { howIsLandearnDiff } = props;

  useEffect(() => {
    loadTimelineData(x31686TimelineData);
  }, []);

  return (
    <div className="x31686 component component-wrapper not-ready">
      <div className="how-is-landearn-diff-e1YXdj">{howIsLandearnDiff}</div>
      <img
        className="iconskeyboardarrowright-e1YXdj"
        alt="Good"
        src="https://anima-uploads.s3.amazonaws.com/projects/611bfeda331562400fadc1b1/releases/611c37a298305a35d443c704/img/icons-keyboard-arrow-right@2x.png"
      />
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


function Frame36() {
  return (
    <div className="frame-36">
      <div className="buy axiforma-bold-black-14px">Buy properties</div>
      <div className="frame-35">
        <div className="buy axiforma-medium-black-12px">Buy a property</div>
        <div className="frame-35-item axiforma-medium-black-12px">Get a mortgage</div>
        <div className="frame-35-item axiforma-medium-black-12px">Make an offer</div>
        <div className="frame-35-item axiforma-medium-black-12px">Buyer benefits</div>
      </div>
    </div>
  );
}


function Frame37() {
  return (
    <div className="frame-37">
      <div className="business axiforma-bold-black-14px">Business</div>
      <div className="frame-35-1">
        <div className="company axiforma-medium-black-12px">Company</div>
        <div className="frame-35-item-1 axiforma-medium-black-12px">Our partners</div>
        <div className="frame-35-item-1 axiforma-medium-black-12px">Partner with us</div>
        <div className="frame-35-item-1 axiforma-medium-black-12px">Sold properties</div>
      </div>
    </div>
  );
}


function Frame38() {
  return (
    <div className="frame-38">
      <div className="privacy-and-terms axiforma-bold-black-14px">Privacy and Terms</div>
      <div className="frame-35-2">
        <div className="text-15 axiforma-medium-black-12px">Terms and condiitions</div>
        <div className="frame-35-item-2 axiforma-medium-black-12px">Privacy policy</div>
        <div className="frame-35-item-2 axiforma-medium-black-12px">Trust and Safety</div>
        <div className="frame-35-item-2 axiforma-medium-black-12px">Data protection</div>
      </div>
    </div>
  );
}


function Frame362() {
  return (
    <div className="frame-36-1">
      <div className="sell axiforma-bold-black-14px">Sell properties</div>
      <div className="frame-35-3">
        <div className="sell axiforma-medium-black-12px">Sell a property</div>
        <div className="frame-35-item-3 axiforma-medium-black-12px">Pricing</div>
        <div className="frame-35-item-3 axiforma-medium-black-12px">Seller benefits</div>
      </div>
    </div>
  );
}


function Bottom() {
  return (
    <div className="bottom">
      <div className="agent axiforma-bold-black-14px">Agents</div>
      <div className="frame-35-4">
        <div className="agent axiforma-medium-black-12px">Listing as an agent</div>
        <div className="text-1-1 axiforma-medium-black-12px">Become a Landern agent</div>
        <div className="text-1-1 axiforma-medium-black-12px">Traditional agent pricing</div>
      </div>
    </div>
  );
}

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

const frame1Data = {
    typeinvisibleProps: typeinvisibleData,
    typeinvisible2Props: typeinvisible2Data,
    typebasicProps: typebasicData,
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

const filtersData = {
    typeinvisibleHoverProps: typeinvisibleHoverData,
    typeinvisibleHover2Props: typeinvisibleHover2Data,
    typeinvisibleHover3Props: typeinvisibleHover3Data,
    typeinvisibleHover4Props: typeinvisibleHover4Data,
};

const group12Data = {
    className: "group-1",
};

const group13Data = {
    className: "group-1",
};

const group15Data = {
    className: "group-1",
};

const group16Data = {
    className: "group-1",
};

const typebasic3Data = {
    children: "View all 15 256 verified properties",
    className: "x31650",
};

const benefitsData = {
    iconsSupport_Agent_Black_24Dp: "https://anima-uploads.s3.amazonaws.com/projects/611bfeda331562400fadc1b1/releases/611c37a298305a35d443c704/img/icons-support-agent-black-24dp@2x.png",
    text9: "Free support",
    text10: "One year support on your home inspection, enquiry or issues.",
};

const benefits2Data = {
    freeSupportI31654: "Verified offers",
    oneYearSupportOn: "Properties are of valid titles and information stated is as is.",
};

const iconshistoryEduBlack24dpData = {
    group: "https://anima-uploads.s3.amazonaws.com/projects/611bfeda331562400fadc1b1/releases/611c37a298305a35d443c704/img/group-1@2x.png",
};

const benefits3Data = {
    freeSupportI31655: "Legal help",
    oneYearSupportOn: "Documents are prepared for you by Landearn legal team.",
    iconshistoryEduBlack24dpProps: iconshistoryEduBlack24dpData,
};

const inputData = {
    inputType: "text",
    inputPlaceholder: "Email address",
};

const typebasic4Data = {
    children: "Subscribe",
    className: "x31669",
};

const property1FAQReplyData = {
    text13: "How is Landearn different from traditional real estate sites and agents?",
    iconsKeyboard_Arrow_Down: "https://anima-uploads.s3.amazonaws.com/projects/611bfeda331562400fadc1b1/releases/611c37a298305a35d443c704/img/icons-keyboard-arrow-down@2x.png",
    text14: "Landearn is a real estate brokerage firm with a model developed with a developing nations first approach. Given too many irregularities around finding a property with the right title and the ones without known dispute, Landearn decided to partner with relevant bodies to help the buyer undertake the responsibility of performing due diligence. Aside from due diligence, Landearn helps buyers perform documentations, reduce the number of bottlenecks in obtaining a property, reduce too many hidden charges, buy at affordable rates, access mortgage facilities faster and easier, and finish the buying process in record time. For the sellers, Landearn helps them sell faster, given the portal is accessible for anyone around the world to make purchase from any given location and be rest assured that the purchase is done in good faith, and through our network, a lot more persons can access and find the property. In order words, we offer advertisement on a very large scale. Sellers also benefits from the clear and concise legal works we render, document handling, and having the advantage of managing properties he sells on his dashboard and make reference to them any time.",
};

const property1FAQQuestionData = {
    howIsLandearnDiff: "How is Landearn different from traditional agents",
};

const property1FAQQuestion2Data = {
    howIsLandearnDiff: "What are your refund policies?",
};

const property1FAQQuestion3Data = {
    howIsLandearnDiff: "How do I create scheduled messages and send them to guests automatically?",
};

const desktop1366Ver2Data = {
    logo: GreenLogo,
    overlapGroup2: HeroImg,
    text35: "Buy verified properties",
    text36: "Buy trusted properties from any location at a cheaper rate, alongside legal services and deed transfers all covered for you.",
    cta_Search: "https://anima-uploads.s3.amazonaws.com/projects/611bfeda331562400fadc1b1/releases/611c37a298305a35d443c704/img/cta-search@2x.png",
    text34: "Explore verified properties with Landearn",
    text37: "Why work with Landearn",
    text38: "Why work with Landearn",
    howToBuyWithUs: "How to buy with us",
    ourPartners: "OUR PARTNERS",
    overlapGroup3: "https://anima-uploads.s3.amazonaws.com/projects/611bfeda331562400fadc1b1/releases/611c37a298305a35d443c704/img/banner-3@2x.png",
    text44: <>Don’t miss the best verified <br />offers on Landearn</>,
    text45: "Subscribe today to get fresh offers faster",
    text39: "Frequently Asked Questions",
    logo2: "https://anima-uploads.s3.amazonaws.com/projects/611bfeda331562400fadc1b1/releases/611c37a298305a35d443c704/img/logo-1@2x.png",
    frame1Props: frame1Data,
    filtersProps: filtersData,
    group12Props: group12Data,
    group13Props: group13Data,
    group15Props: group15Data,
    group16Props: group16Data,
    typebasicProps: typebasic3Data,
    benefitsProps: benefitsData,
    benefits2Props: benefits2Data,
    benefits3Props: benefits3Data,
    inputProps: inputData,
    typebasic2Props: typebasic4Data,
    property1FAQReplyProps: property1FAQReplyData,
    property1FAQQuestionProps: property1FAQQuestionData,
    property1FAQQuestion2Props: property1FAQQuestion2Data,
    property1FAQQuestion3Props: property1FAQQuestion3Data,
};

