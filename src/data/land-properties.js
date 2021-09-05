import Unsplash1 from "../assets/images/mobile/unsplash1.png";
import Unsplash2 from "../assets/images/mobile/unsplash2.png";
import Unsplash3 from "../assets/images/mobile/unsplash3.png";
import Unsplash4 from "../assets/images/mobile/unsplash4.png";
import Bath from "../assets/images/mobile/bath.svg";
import Bed from "../assets/images/mobile/bed.svg";
import SQM from "../assets/images/mobile/sqm.svg";

export const land_properties = [
  {
    id: 2,
    favorite: 0,
    src: Unsplash2,
    images: [Unsplash2, Unsplash4, Unsplash1, Unsplash3],
    title: "1 Bedroom Apartment + Study",
    location: "Lekki, Lagos",
    price: "256,564",
    currencySymbol: "$",
    description:
      "Properties are of valid titles and information stated is accurate.",
    features: [
      {
        icon: Bed,
        amount: 4,
      },
      {
        icon: Bath,
        amount: 6,
      },
      {
        icon: SQM,
        amount: 1500,
      },
    ],
  },
  {
    id: 1,
    favorite: 0,
    src: Unsplash1,
    images: [Unsplash1, Unsplash2, Unsplash4, Unsplash3],
    title: "3 Bedroom Detached Townhouse",
    location: "Awoyaya, Lagos",
    price: "123,456",
    currencySymbol: "$",
    description: "One year support on your home inspection, enquiry or issues.",
    features: [
      {
        icon: Bed,
        amount: 3,
      },
      {
        icon: Bath,
        amount: 5,
      },
      {
        icon: SQM,
        amount: 1200,
      },
    ],
  },
  {
    id: 3,
    favorite: 0,
    src: Unsplash3,
    images: [Unsplash3, Unsplash2, Unsplash4, Unsplash1],
    title: "4 Bedroom Semi-Detached Duplex",
    location: "Ikorodu, Lagos",
    price: "56,000",
    currencySymbol: "$",
    description: "Documents are prepared for you by Landearn legal team.",
    features: [
      {
        icon: Bed,
        amount: 2,
      },
      {
        icon: Bath,
        amount: 4,
      },
      {
        icon: SQM,
        amount: 900,
      },
    ],
  },
  {
    id: 4,
    favorite: 0,
    src: Unsplash4,
    images: [Unsplash4, Unsplash2, Unsplash1, Unsplash3],
    title: "5 plot of Land",
    location: "Garki, Abuja",
    price: "120,000",
    currencySymbol: "$",
    description: "Documents are prepared for you by Landearn legal team.",
    features: [
      {
        icon: Bed,
        amount: 4,
      },
      {
        icon: Bath,
        amount: 4,
      },
      {
        icon: SQM,
        amount: 1300,
      },
    ],
  },
];
