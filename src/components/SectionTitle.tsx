const SectionTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="title flex flex-col  items-center">
      <div className="flex gap-2 justify-center items-center">
        <span className="h-[2px] w-[30px] bg-palette-primary"></span>
        <h5 className="text-[16px] md:text-[18px] text-palette-primary italic">
          {subTitle}
        </h5>
        <span className="h-[2px] w-[30px] bg-palette-primary"></span>
      </div>
      <h2 className="text-palette-pearl text-[30px] md:text-[40px]">{title}</h2>
    </div>
  );
};

export default SectionTitle;
