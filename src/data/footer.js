import GreenLogo from "../assets/images/mobile/logo_green.png";
import AppleStore from "../assets/images/mobile/apple_store.png";
import PlayStore from "../assets/images/mobile/play_store.png";
import FacebookIcon from "../assets/images/mobile/facebook.svg";
import LinkedinIcon from "../assets/images/mobile/linkedin.svg";
import InstagramIcon from "../assets/images/mobile/instagram.svg";
import TwitterIcon from "../assets/images/mobile/twitter.svg";

export const footer = {
  logo: GreenLogo,
  appleStore: AppleStore,
  playStore: PlayStore,
  social: [
    {
      url: "https://twitter.com/landearncom",
      src: TwitterIcon,
      alt: "Twitter",
    },
    {
      url: "https://instagram.com/landearncom",
      src: InstagramIcon,
      alt: "Instagram",
    },
    {
      url: "https://linkedin.com/company/landearn-homes",
      src: LinkedinIcon,
      alt: "Linkedin",
    },
    {
      url: "https://www.facebook.com/landearnhomesltd",
      src: FacebookIcon,
      alt: "Facebook",
    },
  ],
  siteMap: [
    {
      title: "Buy properties",
      menuLinks: [
        {
          url: "#",
          linkText: "Buy a property",
        },
        {
          url: "#",
          linkText: "Get a mortgage",
        },
        {
          url: "#",
          linkText: "Make an offer",
        },
        {
          url: "#",
          linkText: "Buyer benefits",
        },
      ],
    },
    {
      title: "Business",
      menuLinks: [
        {
          url: "#",
          linkText: "Company",
        },
        {
          url: "#",
          linkText: "Our partners",
        },
        {
          url: "#",
          linkText: "Partner with us",
        },
        {
          url: "#",
          linkText: "Sold properties",
        },
      ],
    },
    {
      title: "Privacy and terms",
      menuLinks: [
        {
          url: "#",
          linkText: "Terms and conditions",
        },
        {
          url: "#",
          linkText: "Privacy policy",
        },
        {
          url: "#",
          linkText: "Trust and safety",
        },
        {
          url: "#",
          linkText: "Data protection",
        },
      ],
    },
    {
      title: "Sell properties",
      menuLinks: [
        {
          url: "#",
          linkText: "Sell a property",
        },
        {
          url: "#",
          linkText: "Pricing",
        },
        {
          url: "#",
          linkText: "Seller benefits",
        },
        {
          url: "#",
          linkText: "How we verify listings",
        },
      ],
    },
    {
      title: "Agents and Estates",
      menuLinks: [
        {
          url: "#",
          linkText: "Listing as an estate",
        },
        {
          url: "#",
          linkText: "Listing as an agent",
        },
        {
          url: "#",
          linkText: "Become a landearn agent",
        },
        {
          url: "#",
          linkText: "Benefits to agents and Estates",
        },
      ],
    },
  ],
};
