import Banner from "./(banner)/Banner";
import Personel from "./(personel)/page";
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
