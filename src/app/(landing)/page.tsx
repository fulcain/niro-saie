import Banner from "./(banner)/Banner";
import Hero from "./(hero)/Hero";
import Services from "./(services)/Services";

export default function Home() {
  return (
    <main className="grid gap-[24px]">
      <Hero />
      <Services />
      <Banner />
    </main>
  );
}
