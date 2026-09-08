import SectionTitle from "@/components/SectionTitle";
import PersonelCard from "./PersonelCard";
import { personelInfo } from "./personelInfo";

const Personel = () => {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50/70 py-12 md:py-24">
      <div className="container flex flex-col gap-8 md:gap-12">
        <SectionTitle
          title="با اعضای تیم ما آشنا شوید"
          subTitle="اعضای تیم ما"
        />
        <div id="personel" className="grid grid-cols-1 gap-4 md:flex md:flex-wrap md:justify-center md:gap-5">
          {personelInfo.map((item, idx) => (
            <PersonelCard
              key={idx}
              image={item.image}
              name={item.name}
              role={item.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Personel;
