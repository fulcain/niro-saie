import { FaRegClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { phoneNumber } from "../../constants";

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
    title: "ایران، بوشهر",
    subTitle: "",
    icon: <FaMapMarkerAlt className="text-palette-primary" />,
  },
  {
    title: phoneNumber,
    subTitle: "",
    icon: <FaPhoneAlt className="text-palette-primary" />,
    href: `tel:${phoneNumber}`,
  },
];

// footer
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
