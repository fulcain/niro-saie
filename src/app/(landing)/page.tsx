import Banner from "./(banner)/Banner";
import Hero from "./(hero)/Hero";
import Services from "./(services)/Services";

export default function Home() {
  return (
    <main className="grid gap-[50px]">
      <Services />
      <Personel />
      <Banner />
    </main>
  );
}
