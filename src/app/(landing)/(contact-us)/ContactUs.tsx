import SectionTitle from "@/components/SectionTitle";
import { phoneNumber } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
  return (
    <section id="contact-us" className="container">
      <SectionTitle title="راه ارتباط با ما" subTitle="ارتباط با ما" />
      {/* TODO: change image color */}
      <div className="relative flex justify-between items-center mt-[60px] bg-[url('/images/contact-us/contact-us-bg.png')] w-full h-[250px] rounded-[10px]">
        <Image
          src="/images/contact-us/operator.png"
          width={300}
          height={340}
          alt="contact-us"
        />
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
