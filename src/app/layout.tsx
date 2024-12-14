import type { Metadata } from "next";
import "./globals.scss";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PDL | نیرو ساعی درخش",
  description:
    "در سال ۱۴۰۱ با هدف ارائه خدمات تخصصی در حوزه صنعت برق و با همت جمعی از مهندسان باتجربه و متخصص تأسیس شد. از همان ابتدا، تمرکز اصلی ما بر ارائه خدمات باکیفیت، نوآورانه و مطابق با استانداردهای روز جهانی در حوزه برق و انرژی بود.  پس از دو سال تلاش مستمر و برنامه‌ریزی دقیق، در سال ۱۴۰۳ موفق به دریافت مجوزهای لازم از سازمان برنامه و بودجه، اداره کار و رفاه اجتماعی و نهادهای ایمنی مرتبط شدیم. این دستاورد گواهی بر تعهد ما به رعایت اصول ایمنی، استانداردهای کاری و مسئولیت‌پذیری در فعالیت‌های حرفه‌ای است.  امروز شرکت نیرو ساعتی درخش با تکیه بر دانش فنی تیم متخصص خود و بهره‌گیری از تجربه چندین ساله در صنعت برق، آماده ارائه خدمات گسترده به مشتریان و همکاران محترم می‌باشد و همواره در تلاش است تا گامی مؤثر در ارتقاء این صنعت و توسعه زیرساخت‌های کشور بردارد.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/site.webmanifest" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
