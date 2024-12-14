import Image from "next/image";

const ContactUsCard = () => {
  return (
    <>
      <div className="flex bg-palette-mirage py-[45px] px-[60px] rounded translate-y-[-170px] justify-center items-center max-w-[330px] flex-row gap-1">
        <Image
          src="/images/general/niro-saei.png"
          alt="PDL"
          width={90}
          height={105}
        />
        <span className="min-w-full text-white">
          Power Diligence Luminosity
        </span>
      </div>
    </>
  );
};

export default ContactUsCard;
