import React from "react";

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
    <div className="service group border border-gray-200 w-full md:max-w-[370px] p-3 rounded flex flex-col items-center gap-2 md:gap-5">
      <div className="logo group-hover:bg-palette-secondary transition rounded-full bg-palette-primary p-2 w-[60px] h-[60px] flex justify-center text-white text-[30px] items-center">
        {logo}
      </div>
      <h3 className="title font-[500] text-[18px] md:text-[25px] transition group-hover:text-palette-secondary text-palette-pearl">
        {title}
      </h3>
      <p className="description font-[300] text-center text-[12px] md:text-[16px] text-gray-500">
        {description.map((item, idx) => (
          <span key={idx}>
            {item} <br />
          </span>
        ))}
      </p>
    </div>
  );
};

export default Service;
