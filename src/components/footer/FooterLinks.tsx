import Link from "next/link";

export type Links = { name: string; href: string }[];

type FooterLinksProps = {
  title: string;
  links: Links;
};

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className="flex flex-col gap-y-5">
      <span className="text-white text-[18px]">{title}</span>
      <div className="flex flex-col gap-y-2.5">
        {links.map((link) => (
          <Link className="text-palette-gray" href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
