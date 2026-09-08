import SectionTitle from "@/components/SectionTitle";
import { appName } from "@/constants";

const stats = [
  { value: "۱۴۰۱", label: "سال تأسیس" },
  { value: "۱۴۰۳", label: "اخذ مجوزهای رسمی" },
  { value: "برق و انرژی", label: "حوزه تخصصی" },
];

const AboutUs = () => {
  return (
    <section className="flex flex-col gap-10 py-12 md:gap-12 md:py-24" id="about-us">
      <SectionTitle subTitle="درباره ما" title={appName} />
      <div className="relative overflow-hidden bg-gradient-to-l from-palette-mirage via-palette-pearl to-palette-pearl">
        {/* Decorative glows */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-palette-secondary/20 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-palette-primary/40 blur-3xl"></div>

        <div className="container relative flex flex-col gap-10 py-16 md:py-20">
          <div className="flex max-w-3xl flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-10 rounded-full bg-gradient-to-l from-palette-secondary to-transparent"></span>
              <h5 className="text-[15px] md:text-[17px] font-bold text-palette-secondary">
                درباره شرکت ما
              </h5>
            </div>
            <h3 className="text-[20px] md:text-[30px] font-extrabold leading-snug text-white">
              ما در خدمات مهندسی، پیمانکاری و مشاوره تخصص داریم و پروژه های
              صنعتی را طراحی و اجرا میکنیم.
            </h3>
          </div>

          <p className="max-w-4xl text-[14px] md:text-[16px] leading-8 text-slate-300">
            {appName} در سال ۱۴۰۱ با هدف ارائه خدمات تخصصی در حوزه صنعت برق و با
            همت جمعی از مهندسان باتجربه و متخصص تأسیس شد. از همان ابتدا، تمرکز
            اصلی ما بر ارائه خدمات باکیفیت، نوآورانه و مطابق با استانداردهای روز
            جهانی در حوزه برق و انرژی بود. پس از دو سال تلاش مستمر و برنامه‌ریزی
            دقیق، در سال ۱۴۰۳ موفق به دریافت مجوزهای لازم از سازمان برنامه و
            بودجه، اداره کار و رفاه اجتماعی و نهادهای ایمنی مرتبط شدیم. این
            دستاورد گواهی بر تعهد ما به رعایت اصول ایمنی، استانداردهای کاری و
            مسئولیت‌پذیری در فعالیت‌های حرفه‌ای است. امروز شرکت نیرو ساعتی درخش
            با تکیه بر دانش فنی تیم متخصص خود و بهره‌گیری از تجربه چندین ساله در
            صنعت برق، آماده ارائه خدمات گسترده به مشتریان و همکاران محترم
            می‌باشد و همواره در تلاش است تا گامی مؤثر در ارتقاء این صنعت و توسعه
            زیرساخت‌های کشور بردارد.
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur-sm sm:px-6 sm:py-5"
              >
                <span className="text-[22px] md:text-[28px] font-extrabold text-palette-secondary">
                  {stat.value}
                </span>
                <span className="text-[13px] text-slate-300">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;