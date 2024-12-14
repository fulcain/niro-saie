import Link from "next/link";

export type Links = { name: string; href: string }[];

type FooterLinksProps = {
  title: string;
  links: Links;
};

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <>
      <span className="text-white text-[18px]">{title}</span>
      {links.map((link) => (
        <Link href={link.href}>{link.name}</Link>
      ))}
    </>
  );
};

export default FooterLinks;
