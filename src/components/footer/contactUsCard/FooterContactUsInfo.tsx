import { FooterContactUsTypes } from "@/components/footer/footerTexts";
import Link from "next/link";

type FooterContactUsInfoProps = {
  info: FooterContactUsTypes;
};

const FooterContactUsInfo = ({ info }: FooterContactUsInfoProps) => {
  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-row gap-2 justify-center items-center">
        {info.icon}
        {info.href ? (
          <Link
            href={info.href}
            className="relative group hover:text-palette-primary transition"
          >
            {info.title}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-palette-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ) : (
          info.title
        )}
      </div>
      {info.subTitle && <div>{info.subTitle}</div>}
    </div>
  );
};

export default FooterContactUsInfo;
