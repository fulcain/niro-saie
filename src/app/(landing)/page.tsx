import Banner from "./(banner)/Banner";
import Services from "./(services)/Services";

export default function Home() {
  return (
    <main className="grid gap-[24px]">
      <Services />
      <Banner />
    </main>
  );
}
