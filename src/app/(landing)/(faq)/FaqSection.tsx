import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import "./_faq.scss";
import SpinCircle from "./SpinCircle";
import Faq from "./Faq";

const FaqSection = () => {
  return (
    <section className="container">
      <SectionTitle title="سوالات متداول روند کاری" subTitle="سوالات متداول" />
      <div className="mt-[60px] grid grid-cols-1 between-lg-md:grid-cols-2 gap-y-16 gap-x-8 place-items-center">
        <div className="relative text-[15px]">
          <SpinCircle
            title={`پشتیبانی\nامور مشتریان`}
            extraClasses="top-[-20px] right-[-20px] md:top-[-40px] md:right-[-30px]"
          />
          <Image
            src="/images/faq/faq.png"
            alt="faq"
            width={300}
            height={285}
            sizes="(max-width: 1054px) 300px, 400px"
            className="h-auto md:w-[400px] md:h-[385px]"
            loading="lazy"
          />
          <SpinCircle
            title={`آموزش های\nتخصصی`}
            extraClasses="bottom-[-20px] right-[-20px] md:bottom-[-40px] md:right-[-30px]"
          />
          <div
            className={`top-1/2 -translate-y-1/2 left-[-40px] md:left-[-80px] text-center whitespace-pre-line absolute flex items-center justify-center bg-palette-pearl p-10 rounded-full w-[130px] h-[130px] md:w-[180px] md:h-[180px] border-[12px] text-[13.3px] border-white`}
          >
            <div>
              <span className="text-white">پروژه های موفق</span>
            </div>
          </div>
        </div>
        <Faq />
      </div>
    </section>
  );
};

export default FaqSection;
