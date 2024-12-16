import Banner from "./(banner)/Banner";
import CompanyStatus from "./(company_status)/CompanyStatus";
import Hero from "./(hero)/Hero";
import Services from "./(services)/Services";

export default function Home() {
  return (
    <main className="grid gap-[24px]">
      <Hero />
      <CompanyStatus />
      <Services />
      <Banner />
    </main>
  );
}
