import { companyStatusData } from "./companyStatusData";
import { Trophy, TrendingUp, Megaphone, MonitorSmartphone } from "lucide-react";

const icons = [Trophy, TrendingUp, Megaphone, MonitorSmartphone];

const CompanyStatusItems = () => {
  return (
    <div className="mt-8 grid grid-cols-2 gap-3 md:mt-14 md:gap-6 lg:grid-cols-4">
      {companyStatusData.map((item, idx) => {
        const Icon = icons[idx % icons.length];

        return (
          <div
            key={idx}
            className="card card-hover group flex flex-col items-center gap-3 p-4 text-center md:gap-5 md:p-7"
          >
            <div className="icon-tile h-10 w-10 text-[18px] transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16 md:text-[26px]">
              <Icon />
            </div>
            <h3 className="text-[14px] font-extrabold leading-6 text-palette-pearl md:text-[18px] md:font-bold md:leading-snug">
              {item.title}
            </h3>
            <p className="text-[11.5px] font-medium leading-5 text-slate-600 md:text-[14px] md:font-normal md:leading-7">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CompanyStatusItems;