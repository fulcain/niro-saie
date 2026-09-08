import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { appName, instagram } from "@/constants";

const FooterContactUsCard = () => {
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="flex items-center gap-3">
        <Image
          src="/images/general/niro-saei.png"
          alt="PDL"
          width={90}
          height={90}
          className="h-auto w-14 md:w-16"
        />
        <span className="text-[17px] font-bold text-white">{appName}</span>
      </div>
      <p className="max-w-xs text-[13px] leading-7 text-palette-gray">
        تخصص در خدمات مهندسی، پیمانکاری و مشاوره؛ طراحی و اجرای پروژه‌های صنعتی
      </p>
      <Link
        target="_blank"
        href={instagram}
        aria-label="اینستاگرام"
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-transparent hover:bg-palette-secondary"
      >
        <FaInstagram size={20} />
      </Link>
    </div>
  );
};

export default FooterContactUsCard;