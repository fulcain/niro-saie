import Link from "next/link";

type LinkUnderLineType = {
  href: string;
  text: string;
};

const LinkUnderLine = ({ href, text }: LinkUnderLineType) => {
  return (
    <Link
      href={href}
      className="relative group hover:text-palette-primary transition"
    >
      {text}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-palette-primary transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default LinkUnderLine;
