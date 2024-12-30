import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[url('/images/hero/hero-background.png')] h-[80vh] md:h-[100vh] bg-no-repeat bg-center bg-cover relative">
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-palette-primary/20 to-palette-primary"></div>
      <div className="absolute inset-0 bg-palette-primary/85 md:hidden"></div>
      <div className="container z-2 text-white flex justify-start items-center h-full relative p-[10px]">
        <div className="flex flex-col justify-between gap-[50px]">
          <div className="title">
            <h1 className="text-[25px] md:text-[50px]">
              Power Diligence Luminosity
            </h1>
            <h2 className="text-[15px] text-palette-secondary md:text-[40px]">
              نیرو ساعی درخش
            </h2>
          </div>
          <div>
            <p>
              تخصص در خدمات مهندسی، پیمانکاری و مشاوره؛ طراحی و اجرای پروژه‌های
              صنعتی
            </p>
            <button className="mt-[10px] bg-palette-secondary text-white rounded-[8px] w-fit p-2  md:p-[10px] font-[300] text-[12px] md:text-[18px] cursor-pointer hover:bg-palette-pearl transition duration-500">
              <Link href="#contact-us">تماس بگیرید</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
