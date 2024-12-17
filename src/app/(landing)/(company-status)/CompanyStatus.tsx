import SectionTitle from "@/components/SectionTitle";
import CompanyStatusItems from "./CompanyStatusItems";

const CompanyStatus = () => {
  return (
    <section className="container ">
      <SectionTitle title="استراتژی شرکت ما" subTitle="وضعیت شرکت ما" />
      <CompanyStatusItems />
    </section>
  );
};

export default CompanyStatus;
