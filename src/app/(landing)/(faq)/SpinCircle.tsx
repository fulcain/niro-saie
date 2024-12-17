type SpinCircleType = {
  title: string;
  extraClasses?: string;
};

const SpinCircle = ({ title, extraClasses }: SpinCircleType) => {
  return (
    <div
      className={`${extraClasses} text-center whitespace-pre-line absolute flex items-center justify-center bg-palette-primary p-10 rounded-full w-[130px] h-[130px] md:w-[175px] md:h-[175px]`}
    >
      <div className="spin-dotted">
        <span className="text-white">{title}</span>
      </div>
    </div>
  );
};

export default SpinCircle;
