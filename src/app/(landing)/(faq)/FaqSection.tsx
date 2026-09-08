import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import Faq from "./Faq";

const FaqSection = () => {
  return (
    <section className="container py-12 md:py-24">
      <SectionTitle title="سوالات متداول روند کاری" subTitle="سوالات متداول" />
      <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-fit">
          <Image
            src="/images/faq/faq.svg"
            alt="faq"
            width={400}
            height={385}
            sizes="(max-width: 1054px) 300px, 400px"
            className="h-auto w-[300px] md:w-[400px] rounded-3xl shadow-card"
            loading="lazy"
          />
          <span className="faq-chip right-4 top-6 md:right-6 md:top-8">
            پشتیبانی امور مشتریان
          </span>
          <span className="faq-chip bottom-8 right-8 md:bottom-12 md:right-14">
            آموزش های تخصصی
          </span>
          <span className="faq-chip left-2 top-1/2 -translate-y-1/2 md:-left-6">
            پروژه های موفق
          </span>
        </div>
        <Faq />
      </div>
    </section>
  );
};

export default FaqSection;