import React from "react";
import { Check } from "lucide-react";

const Service = ({
  logo,
  title,
  description,
}: {
  logo: React.ReactNode;
  title: string;
  description: string[];
}) => {
  return (
    <div className="card card-hover group relative flex w-full flex-col items-center gap-3 overflow-hidden p-4 md:max-w-[370px] md:gap-5 md:p-8">
      {/* Top accent bar */}
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-palette-secondary to-palette-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

      <div className="icon-tile h-10 w-10 text-[18px] transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16 md:text-[28px]">
        {logo}
      </div>

      <h3 className="text-[14px] font-extrabold leading-6 text-palette-pearl transition group-hover:text-palette-secondary md:text-[22px] md:font-bold md:leading-snug">
        {title}
      </h3>

      <ul className="flex w-full flex-col gap-2 md:gap-3">
        {description.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-1.5 text-[11.5px] font-medium leading-5 text-slate-600 md:gap-2.5 md:text-[14px] md:font-normal md:leading-6"
          >
            <Check
              size={15}
              className="mt-0.5 shrink-0 text-palette-secondary md:mt-1"
            />
            <span className="text-right">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Service;