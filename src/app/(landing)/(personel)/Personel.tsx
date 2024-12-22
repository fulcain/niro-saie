import SectionTitle from "@/components/SectionTitle";
import PersonelCard from "./PersonelCard";
import { personelInfo } from "./personelInfo";

const Personel = () => {
  return (
    <section className="p-5">
      <div className="container flex flex-col gap-[40px]">
        <SectionTitle
          title="با اعضای تیم ما آشنا شوید"
          subTitle="اعضای تیم ما"
        />
        <div id="personel" className="flex flex-wrap gap-5 justify-center">
          {personelInfo.map((item, idx) => (
            <PersonelCard
              key={idx}
              image={item.image}
              name={item.name}
              role={item.role}
              instagramLink={item.instagramLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Personel;
