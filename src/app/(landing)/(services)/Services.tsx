import SectionTitle from "@/components/SectionTitle";
import Service from "./Service";
import { servicesInfo } from "./servicesInfo";

const Services = () => {
  return (
    <section className="flex flex-col gap-[50px] p-5">
      <SectionTitle title="انواع خدمات ما" subTitle="بهترین خدمات ما" />
      <div id="services" className="flex flex-wrap gap-5 justify-center">
        {servicesInfo.map((service, idx) => (
          <Service
            key={idx}
            title={service.title}
            description={service.description}
            logo={service.logo}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
