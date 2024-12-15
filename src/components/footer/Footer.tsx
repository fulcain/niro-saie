import Image from "next/image";
import FooterContactUsCard from "./contactUsCard/FooterContactUsCard";
import FooterLinks from "./FooterLinks";
import { footerLinks } from "@/components/footer/footerTexts";

const Footer = () => {
  return (
    <footer className="mt-32 md:mt-52 pb-[130px] md:pb-[60px] pt-[40px] bg-[url('/images/footer/footer-bg.png')] w-full bg-palette-pearl text-palette-gray">
      <div className="container">
        <div className="flex items-center justify-center flex-col gap-5 md:flex-row md:justify-between">
          <FooterContactUsCard />

          <FooterLinks links={footerLinks} title="خدمات" />

          <Image
            src="/images/footer/footer-circle.png"
            alt="footer shape"
            width={130}
            height={130}
            className="hidden md:block animate-scales"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
