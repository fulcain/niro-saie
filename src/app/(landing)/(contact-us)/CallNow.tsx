import LinkUnderLine from "@/components/link-underline/LinkUnderline";
import { phoneNumber } from "@/constants";
import Image from "next/image";

const CallNow = () => {
  return (
    <div className="flex flex-col p-2 items-center justify-center relative call-now h-[230px] w-[300px] bg-[url('/images/contact-us/call-now-bg.png')] bg-cover bg-no-repeat bg-center rounded-[8px]">
      <div className="z-[2] bg-palette-primary rounded-full">
        <Image
          src="/images/contact-us/phone-call.svg"
          width={60}
          height={60}
          alt="phone call"
          sizes="(max-width: 768px) 60px, 60px"
          className="p-5 h-auto md:w-[84px] md:h-[84px]"
        />
      </div>
      <div className="z-[2] mt-3 flex flex-col items-center justify-center gap-2">
        <span className="text-[18px] font-bold">اکنون تماس بگیرید</span>
        <LinkUnderLine text={phoneNumber} href={`tel:${phoneNumber}`} />
      </div>
    </div>
  );
};

export default CallNow;
