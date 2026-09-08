import Image from "next/image";

const PersonelCard = ({
  name,
  image,
  role,
}: {
  name: string;
  image: string;
  role: string;
}) => {
  return (
    <div className="card card-hover group flex w-full items-center gap-4 p-4 sm:p-5 md:w-[300px] md:flex-col md:items-center md:gap-5 md:p-6">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-palette-selago to-white p-2 shadow-soft transition-transform duration-300 group-hover:scale-105 md:h-32 md:w-32 md:p-4">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="h-auto w-full object-contain"
        />
      </div>
      <div className="flex min-w-0 flex-col gap-1.5 text-right md:items-center md:gap-2 md:text-center">
        <h3 className="truncate text-[16px] font-bold text-palette-pearl md:text-[18px]">
          {name}
        </h3>
        <span className="w-fit rounded-full bg-palette-secondary/10 px-3 py-1 text-[12px] font-semibold text-palette-secondary md:px-4 md:py-1.5 md:text-[13px]">
          {role}
        </span>
      </div>
    </div>
  );
};

export default PersonelCard;