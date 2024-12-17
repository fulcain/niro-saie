import SectionTitle from "@/components/SectionTitle";
import { phoneNumber } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import "./_contact-us.scss";
import LinkUnderLine from "@/components/link-underline/LinkUnderline";
import CallNow from "./CallNow";

const ContactUs = () => {
  return (
    <section id="contact-us" className="container">
      <SectionTitle title="راه ارتباط با ما" subTitle="ارتباط با ما" />
      {/* TODO: change image color */}
      <div className="relative flex flex-col md:flex-row gap-10 items-center p-3 mt-[60px] bg-[url('/images/contact-us/contact-us-bg.png')] bg-cover bg-no-repeat bg-center w-full h-[250px] rounded-[10px]">
        <CallNow />
        <div className="flex flex-col gap-4 text-white">
          <div className="flex flex-row gap-1 items-start justify-center text-[22px]">
            <p>شرکت نیرو ساعی</p>{" "}
            <Link
              className="text-palette-primary"
              href={`tel:${phoneNumber}`}
            >
              اکنون تماس بگیرید!
            </Link>
          </div>
          <p>ما می‌توانیم یک راه‌حل قابل‌اعتماد به شما ارائه دهیم.</p>
        </div>
        <Link
          className="hidden lg:block text-white absolute top-1/2 -translate-y-1/2 left-10 rotate-270 bg-palette-primary hover:bg-white hover:text-black p-2 rounded-[12px] transition"
          href={`tel:${phoneNumber}`}
        >
          تماس بگیرید
        </Link>
      </div>
    </section>
  );
};

export default ContactUs;
