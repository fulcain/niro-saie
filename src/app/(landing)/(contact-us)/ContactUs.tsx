import SectionTitle from "@/components/SectionTitle";
import { phoneNumber } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import "./_contact-us.scss";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import LinkUnderLine from "@/components/link-underline/LinkUnderline";

const ContactUs = () => {
  return (
    <section id="contact-us" className="container">
      <SectionTitle title="راه ارتباط با ما" subTitle="ارتباط با ما" />
      {/* TODO: change image color */}
      <div className="relative flex justify-between items-center p-3 mt-[60px] bg-[url('/images/contact-us/contact-us-bg.png')] bg-cover bg-no-repeat bg-center w-full h-[250px] rounded-[10px]">
        <div className="flex flex-col items-center justify-center relative call-now h-[230px] w-[300px] bg-[url('/images/contact-us/call-now-bg.png')] bg-cover bg-no-repeat bg-center rounded-[8px]">
          <div className="z-[2] bg-palette-primary rounded-full">
            <Image
              src="/images/contact-us/phone-call.svg"
              width={84}
              height={84}
              alt="phone call"
              className="p-5"
            />
          </div>
          <div className="z-[2] mt-3 flex flex-col items-center justify-center gap-2">
            <span className="text-[18px] font-bold">اکنون تماس بگیرید</span>
            <LinkUnderLine text={phoneNumber} href={`tel:${phoneNumber}`} />
          </div>
        </div>
        <Link
          className="text-white absolute top-1/2 -translate-y-1/2 left-10 rotate-270 bg-palette-primary hover:bg-white hover:text-black p-2 rounded-[12px] transition"
          href={`tel:${phoneNumber}`}
        >
          تماس بگیرید
        </Link>
      </div>
    </section>
  );
};

export default ContactUs;
