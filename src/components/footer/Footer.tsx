import Image from "next/image";
import ContactUsCard from "./ContactUsCard";

const Footer = () => {
  return (
    <footer className="bg-[url('/images/footer/footer-bg.png')] w-full bg-palette-pearl text-palette-gray">
      <div className="container">
        <div className="flex items-center flex-row justify-start ">
          <ContactUsCard />
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
