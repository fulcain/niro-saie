import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";

const PersonelCard = ({
  name,
  image,
  role,
  instagramLink,
}: {
  name: string;
  image: string;
  role: string;
  instagramLink: string;
}) => {
  return (
    <div className="group overflow-hidden relative rounded-[20px] p-2 bg-palette-selago w-[270px] h-full md:w-[370px]  flex flex-col justify-between items-center">
      {/* Background skew effect */}
      <span className="absolute inset top-[-2px] duration-[500ms] z-[1] transition group-hover:bg-gray-300 bg-gray-200 skew-x-[-38deg] h-[110%] w-[50%]"></span>

      {/* Content */}
      <div className="content gap-10 z-[2] p-5 h-full flex flex-col justify-between">
        {/* Image */}
        <div className="logo">
          <Image
            src={image}
            alt={name}
            width={0}
            height={0}
            layout="responsive"
            className="rounded-[20px] w-full max-w-[300px]"
          />
        </div>

        {/* Info Section */}
        <div className="info flex gap-10 justify-start cursor-pointer items-center">
          {/* Name and Role */}
          <div id="info-section">
            <h3 className="font-[700] text-[18px]">{name}</h3>
            <span className="font-[200] text-[16px]">{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonelCard;
