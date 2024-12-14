import Image from "next/image";

const ContactUsCard = () => {
  return (
    <>
      <div className="flex bg-palette-mirage justify-center items-center max-w-[330px] flex-row gap-1">
        <Image
          src="/images/general/niro-saei.png"
          alt="PDL"
          width={90}
          height={105}
        />
        <span>Power Diligence Luminosity</span>
      </div>
    </>
  );
};

export default ContactUsCard;
