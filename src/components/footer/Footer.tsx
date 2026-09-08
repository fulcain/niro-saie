import FooterContactUsCard from "./contactUsCard/FooterContactUsCard";
import FooterContactUsInfo from "./contactUsCard/FooterContactUsInfo";
import FooterLinks from "./FooterLinks";
import { footerContactUs, footerLinks } from "@/components/footer/footerConstants";
import { appName } from "@/constants";

const Footer = () => {
  return (
    <footer className="mt-10 bg-gradient-to-b from-palette-mirage to-palette-pearl text-palette-gray">
      <div className="container grid grid-cols-1 gap-12 py-16 md:grid-cols-3 md:py-20">
        <FooterContactUsCard />

        <div className="flex flex-col gap-6">
          <h4 className="text-[18px] font-bold text-white">تماس با ما</h4>
          <div className="flex flex-col gap-5">
            {footerContactUs.map((item, idx) => (
              <FooterContactUsInfo info={item} key={idx} />
            ))}
          </div>
        </div>

        <FooterLinks links={footerLinks} title="خدمات" />
      </div>

      <div className="border-t border-white/10 py-6 text-center text-[13px] text-palette-gray/70">
        © {new Date().getFullYear()} {appName} — تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;