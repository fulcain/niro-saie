import Image from "next/image";
import ContactUsCard from "./ContactUsCard";
import FooterLinks from "./FooterLinks";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="p-[40px] bg-[url('/images/footer/footer-bg.png')] w-full bg-palette-pearl text-palette-gray">
      <div className="container">
        <div className="flex items-center flex-row justify-between ">
          <ContactUsCard />
          <FooterLinks links={footerLinks} title="خدمات" />

          {/* TODO: add animation */}
          <Image
            src="/images/footer/footer-circle.png"
            alt="footer shape"
            width={130}
            height={130}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
