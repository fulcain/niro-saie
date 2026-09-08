import Link from "next/link";

export type Links = { name: string; href: string }[];

type FooterLinksProps = {
  title: string;
  links: Links;
};

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className="flex flex-col gap-6">
      <span className="text-[18px] font-bold text-white">{title}</span>
      <div className="flex flex-col gap-3">
        {links.map((link, idx) => (
          <Link
            key={idx}
            className="w-fit text-[14px] text-palette-gray transition hover:text-white"
            href={link.href || ""}
            scroll={false}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;