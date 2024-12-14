import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-palette-pearl text-palette-gray">
			<div>footer</div>
			{/* TODO: add animation */}
      <Image
        src="/images/footer-shape-1.png"
        alt="footer shape"
        width={130}
        height={130}
      />
    </footer>
  );
};

export default Footer;
