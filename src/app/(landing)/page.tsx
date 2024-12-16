import Banner from "./(banner)/Banner";
import CompanyStatus from "./(company_status)/CompanyStatus";
import Hero from "./(hero)/Hero";
import Personel from "./(personel)/page";
import Services from "./(services)/Services";

export default function Home() {
  return (
    <main className="grid gap-[50px]">
      <Hero />
      <CompanyStatus />
      <Services />
      <Personel />
      <Banner />
    </main>
  );
}
