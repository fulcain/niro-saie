import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="flex flex-col gap-[40px]" id="about-us">
      <SectionTitle subTitle="درباره ما" title="Power Diligence Luminosity" />
      <div className="content flex relative items-center p-5 min-h-[400px] bg-palette-pearl overflow-hidden">
        <Image
          src="/images/footer/footer-circle.png"
          alt="footer shape"
          width={180}
          height={130}
          className="hidden md:block animate-scales absolute right-[-110px]"
        />

        <div className="container flex flex-col gap-5">
          <div className="title max-w-[650px] flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-[15px] bg-palette-secondary"></span>
              <h5 className="text-[16px] md:text-[18px] text-palette-secondary italic">
                درباره شرکت ما
              </h5>
            </div>
            <h3 className="text-[18px] md:text-[30px] font-bold text-white ">
              ما در خدمات مهندسی، پیمانکاری و مشاوره تخصص داریم و پروژه های
              صنعتی را طراحی و اجرا میکنیم.
            </h3>
          </div>
          <p className="text-gray-200 text-[13px] md:text-[16px]">
            Power Diligence Luminosity در سال ۱۴۰۱ با هدف ارائه خدمات تخصصی در
            حوزه صنعت برق و با همت جمعی از مهندسان باتجربه و متخصص تأسیس شد. از
            همان ابتدا، تمرکز اصلی ما بر ارائه خدمات باکیفیت، نوآورانه و مطابق
            با استانداردهای روز جهانی در حوزه برق و انرژی بود. پس از دو سال تلاش
            مستمر و برنامه‌ریزی دقیق، در سال ۱۴۰۳ موفق به دریافت مجوزهای لازم از
            سازمان برنامه و بودجه، اداره کار و رفاه اجتماعی و نهادهای ایمنی
            مرتبط شدیم. این دستاورد گواهی بر تعهد ما به رعایت اصول ایمنی،
            استانداردهای کاری و مسئولیت‌پذیری در فعالیت‌های حرفه‌ای است. امروز
            شرکت نیرو ساعتی درخش با تکیه بر دانش فنی تیم متخصص خود و بهره‌گیری
            از تجربه چندین ساله در صنعت برق، آماده ارائه خدمات گسترده به مشتریان
            و همکاران محترم می‌باشد و همواره در تلاش است تا گامی مؤثر در ارتقاء
            این صنعت و توسعه زیرساخت‌های کشور بردارد.
          </p>
        </div>
        <Image
          src="/images/footer/footer-circle.png"
          alt="footer shape"
          width={180}
          height={130}
          className="hidden absolute left-[-100px] md:block animate-scales"
        />
      </div>
    </section>
  );
};

export default AboutUs;
