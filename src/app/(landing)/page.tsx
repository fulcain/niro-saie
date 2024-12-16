import Banner from "./(banner)/Banner";
import CompanyStatus from "./(company_status)/CompanyStatus";
import Hero from "./(hero)/Hero";
import Personel from "./(personel)/page";
import Services from "./(services)/Services";
import AboutUs from "./(about-us)/AboutUs";
import Documents from "./(documents)/Documents";

export default function Home() {
  return (
    <main className="grid gap-[50px]">
      <Hero />
      <CompanyStatus />
      <Services />
      <AboutUs />
      <Personel />
      <Documents />
      <Banner />
    </main>
  );
}
