import SectionTitle from "@/components/SectionTitle";
import Service from "./Service";
import { servicesInfo } from "./servicesInfo";

const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col gap-10 bg-gradient-to-b from-white via-slate-50/60 to-white py-12 md:gap-12 md:py-24"
    >
      <div className="container flex flex-col gap-8 md:gap-12">
        <SectionTitle title="انواع خدمات ما" subTitle="بهترین خدمات ما" />
        <div className="grid grid-cols-2 gap-3 justify-items-center md:gap-6 xl:grid-cols-4">
          {servicesInfo.map((service, idx) => (
            <Service
              key={idx}
              title={service.title}
              description={service.description}
              logo={service.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;