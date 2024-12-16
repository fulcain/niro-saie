import Image from "next/image";
import { links } from "./linksData";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { phoneNumber } from "@/constants";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white shadow">
      <div className="container flex md:justify-between">
        <div id="right-side" className="flex items-center gap-[40px]">
          <Link href="/">
            <Image
              src="/images/general/niro-saei.png"
              width={90}
              height={0}
              alt="PDL"
              className="w-[50px] md:w-[90px]"
            />
          </Link>
          <div id="links" className="flex gap-5">
            {links.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="relative group font-[200] text-[14px] md:text-[20px] transition hover:text-palette-secondary"
              >
                {item.text}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-palette-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
        <div id="left-side" className="hidden md:flex gap-2 items-center">
          <div className="item flex gap-2 items-center">
            <FaPhone className="text-palette-primary" />
            <a
              href={`tel:${phoneNumber}`}
              className="text-palette-gray mt-[2px] hover:text-palette-primary transition"
            >
              {phoneNumber}
            </a>
          </div>

          <div className="item flex gap-2 items-center">
            <FaLocationDot className="text-palette-primary" />
            <a
              href="#"
              className="text-palette-gray hover:text-palette-primary transition"
            >
              ایران، بوشهر
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
