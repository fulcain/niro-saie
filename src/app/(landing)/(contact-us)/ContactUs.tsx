import SectionTitle from "@/components/SectionTitle";
import { phoneNumber } from "@/constants";
import CallNow from "./CallNow";
import { PhoneCall } from "lucide-react";

const ContactUs = () => {
  return (
    <section id="contact-us" className="container py-12 md:py-24">
      <SectionTitle title="راه ارتباط با ما" subTitle="ارتباط با ما" />
      <div className="relative mt-14 overflow-hidden rounded-3xl bg-gradient-to-l from-palette-secondary via-palette-primary to-palette-pearl shadow-lift">
        {/* Decorative glows */}
        <div className="pointer-events-none absolute -left-16 -top-16 h-60 w-60 rounded-full bg-white/10 blur-2xl"></div>
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-palette-secondary/40 blur-2xl"></div>

        <div className="relative flex flex-col items-center gap-8 p-8 md:flex-row md:items-center md:gap-12 md:p-12">
          <CallNow />
          <div className="flex flex-1 flex-col items-center gap-5 text-center text-white md:items-start md:text-right">
            <div className="flex flex-col gap-2">
              <p className="text-[22px] md:text-[28px] font-extrabold">
                شرکت نیرو ساعی
              </p>
              <p className="text-[14px] md:text-[16px] text-white/85">
                ما می‌توانیم یک راه‌حل قابل‌اعتماد به شما ارائه دهیم.
              </p>
            </div>
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-[15px] font-bold text-palette-primary shadow-card transition hover:bg-slate-100"
            >
              <PhoneCall size={18} />
              اکنون تماس بگیرید!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
