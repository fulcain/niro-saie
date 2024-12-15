import { footerContactUs } from "@/components/footer/footerConstants";
import Image from "next/image";
import FooterContactUsInfo from "./FooterContactUsInfo";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { instagram } from "@/constants";

const FooterContactUsCard = () => {
  return (
    <div className="relative flex flex-col gap-6 bg-palette-mirage pb-[100px] pt-[15px] px-[60px] rounded-t-[6px] md:mt-[-139px] md:mb-[-20px] md:mx-0 max-w-[330px]">
      <div className="absolute bottom-0 left-[-8px] h-[77.7%] w-2 bg-palette-primary" />
      <div className="flex flex-row items-center justify-center gap-1">
        <Image
          src="/images/general/niro-saei.png"
          alt="PDL"
          width={90}
          height={105}
        />
        <span className="min-w-full text-white text-[12px] md:text-[14px] ">
          Power Diligence Luminosity
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {footerContactUs.map((item, idx) => (
          <FooterContactUsInfo info={item} key={idx} />
        ))}
      </div>
      <Link
        target="_blank"
        href={instagram}
        className="mt-5 bg-palette-pearl hover:bg-palette-primary transition p-3 rounded-full max-w-[max-content]"
      >
        <FaInstagram className="text-white" />
      </Link>
      <div className="absolute bottom-0 right-[-8px] h-[77.7%] w-2 bg-palette-primary" />
    </div>
  );
};

export default FooterContactUsCard;
