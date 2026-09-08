import LinkUnderLine from "@/components/link-underline/LinkUnderline";
import { phoneNumber } from "@/constants";
import Image from "next/image";

const CallNow = () => {
  return (
    <div className="flex w-fit shrink-0 flex-col items-center gap-3 rounded-2xl bg-white/95 p-7 shadow-lift backdrop-blur-sm">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-palette-secondary to-palette-primary shadow-glow">
        <Image
          src="/images/contact-us/phone-call.svg"
          width={40}
          height={40}
          alt="phone call"
          className="h-9 w-auto"
        />
      </div>
      <span className="text-[17px] font-bold text-palette-pearl">
        اکنون تماس بگیرید
      </span>
      <LinkUnderLine text={phoneNumber} href={`tel:${phoneNumber}`} />
    </div>
  );
};

export default CallNow;