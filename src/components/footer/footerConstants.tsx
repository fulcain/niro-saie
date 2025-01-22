import { FaRegClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { address, phoneNumber } from "../../constants";

export type FooterContactUsTypes = {
  title: string;
  subTitle?: string;
  icon: React.ReactNode;
  href?: string;
};

export const footerContactUs: FooterContactUsTypes[] = [
  {
    title: "ساعت کاری:",
    subTitle: "۷ صبح تا ۵ بعد از ظهر",
    icon: <FaRegClock className="text-palette-primary" />,
  },
  {
    title:
      "ایران، بوشهر، ریشهر، خیابان سلمان فارسی، خیابان پارسیان، نبش کوچه قلعه یک",
    subTitle: "",
    icon: <FaMapMarkerAlt className="text-palette-primary" />,
    href: `${address}`,
  },
  {
    title: phoneNumber,
    subTitle: "",
    icon: <FaPhoneAlt className="text-palette-primary" />,
    href: `tel:${phoneNumber}`,
  },
];

export const footerLinks = [
  {
    name: "مهندسی",
    href: "",
  },
  {
    name: "طراحی",
    href: "",
  },
  {
    name: "پیمان کاری",
    href: "",
  },
  {
    name: "مشاوره",
    href: "",
  },
];
