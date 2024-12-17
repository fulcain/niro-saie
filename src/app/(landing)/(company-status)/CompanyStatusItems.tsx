import Image from "next/image";
import { companyStatusData } from "./companyStatusData";

const CompanyStatusItems = () => {
  const divider1 = (
    <Image
      src="/images/company-status/divider-1.svg"
      width={95}
      height={30}
      alt="divider 1"
      className="hidden md:block mb-[120px] absolute left-[-50px] top-[80px]"
    />
  );

  const divider2 = (
    <Image
      src="/images/company-status/divider-2.svg"
      width={95}
      height={30}
      alt="divider 2"
      className="hidden lg:block mb-[120px] absolute left-[-50px] top-[80px]"
    />
  );

  return (
    <div className="flex md:items-start items-center justify-center">
      <div className="grid place-items-start sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[320px] md:max-w-none mt-[60px]">
        {companyStatusData.map((item, idx) => {
          const isEven = idx % 2 === 0;
          const isLast = idx === companyStatusData.length - 1;

          // must not be last and chosen based on being odd or even
          const divider = !isLast ? (isEven ? divider1 : divider2) : null;

          return (
            <div className="flex items-center justify-center relative">
              <div
                className="flex items-center gap-6 justify-center flex-col"
                key={idx}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={200}
                  height={155}
                />
                <div className="flex flex-col gap-2 items-center justify-center text-center">
                  <h3 className="text-[18px] text-palette-pearl">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-palette-gray">
                    {item.description}
                  </p>
                </div>
              </div>
              {divider}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyStatusItems;
