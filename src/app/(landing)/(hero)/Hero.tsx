import { appName } from "@/constants";
import Link from "next/link";
import { ArrowLeft, PhoneCall } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-[80vh] md:min-h-[92vh] items-center overflow-hidden bg-[url('/images/hero/hero-background.png')] bg-cover bg-center bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-palette-pearl/95 via-palette-pearl/80 to-palette-primary/70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-palette-pearl/60 to-transparent"></div>

      <div className="container relative z-[2] flex items-center py-20 md:py-0">
        <div className="flex max-w-2xl flex-col gap-7 text-white">
          <span className="flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[13px] md:text-[14px] font-semibold text-white/90 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-palette-secondary"></span>
            مهندسی • پیمانکاری • مشاوره
          </span>

          <div className="flex flex-col gap-3">
            <h1 className="text-[34px] md:text-[58px] font-extrabold leading-[1.15] text-white">
              {appName}
            </h1>
            <h2 className="text-[20px] md:text-[32px] font-bold text-palette-secondary">
              نیرو ساعی درخش
            </h2>
          </div>

          <p className="max-w-xl text-[15px] md:text-[19px] leading-8 text-white/85">
            تخصص در خدمات مهندسی، پیمانکاری و مشاوره؛ طراحی و اجرای پروژه‌های
            صنعتی
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Link href="#contact-us" className="btn-primary">
              <PhoneCall size={18} />
              تماس بگیرید
            </Link>
            <Link href="#services" className="btn-outline-light">
              آشنایی با خدمات
              <ArrowLeft size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;