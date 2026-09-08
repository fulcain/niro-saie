import { FooterContactUsTypes } from "@/components/footer/footerConstants";
import LinkUnderLine from "@/components/link-underline/LinkUnderline";

type FooterContactUsInfoProps = {
  info: FooterContactUsTypes;
};

const FooterContactUsInfo = ({ info }: FooterContactUsInfoProps) => {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-palette-secondary/15 text-palette-secondary">
        {info.icon}
      </span>
      <div className="flex flex-col gap-0.5 text-[13px] leading-6">
        {info.href ? (
          <LinkUnderLine
            text={info.title}
            href={info.href}
            className="text-white/90 hover:text-palette-secondary"
          />
        ) : (
          <span className="text-palette-gray">{info.title}</span>
        )}
        {info.subTitle && (
          <span className="text-[12px] text-palette-gray/70">
            {info.subTitle}
          </span>
        )}
      </div>
    </div>
  );
};

export default FooterContactUsInfo;