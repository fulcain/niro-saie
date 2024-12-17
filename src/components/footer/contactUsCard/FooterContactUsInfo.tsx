import { FooterContactUsTypes } from "@/components/footer/footerConstants";
import LinkUnderLine from "@/components/link-underline/LinkUnderline";

type FooterContactUsInfoProps = {
  info: FooterContactUsTypes;
};

const FooterContactUsInfo = ({ info }: FooterContactUsInfoProps) => {
  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-row gap-2 justify-center items-center">
        {info.icon}
        {info.href ? (
          <LinkUnderLine text={info.title} href={info.href} />
        ) : (
          info.title
        )}
      </div>
      {info.subTitle && <div>{info.subTitle}</div>}
    </div>
  );
};

export default FooterContactUsInfo;
