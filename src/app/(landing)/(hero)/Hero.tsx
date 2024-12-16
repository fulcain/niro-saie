const Hero = () => {
  return (
    // TODO: consider using bg-fixed
    <section className="bg-[url('/images/hero/hero-bg.svg')] h-[100vh] bg-no-repeat bg-center bg-cover">
      <div className="container text-palette-primary flex items-center justify-center h-full">
        <div className="flex flex-col">
          <h1 className="text-[80px]">Power Diligence Luminosity</h1>
          <h2 className="text-[40px]">نیرو ساعی درخش</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
