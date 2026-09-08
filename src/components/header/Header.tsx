"use client";

import Image from "next/image";
import { links } from "./linksData";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { phoneNumber, address } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { Menu, PhoneCall, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <div className="container flex items-center justify-between gap-3 py-3">
        {/* Start side (right in RTL): menu button + logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-palette-pearl shadow-soft transition hover:bg-slate-50 active:scale-95 lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link href="/" onClick={closeMenu}>
            <Image
              src="/images/general/niro-saei.png"
              width={90}
              height={90}
              alt="PDL"
              className="h-auto w-11 md:w-16"
            />
          </Link>
        </div>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="relative rounded-lg px-4 py-2 text-[15px] font-medium text-palette-pearl/80 transition hover:text-palette-secondary hover:bg-palette-secondary/5"
            >
              {item.text}
            </Link>
          ))}
        </div>

        {/* End side (left in RTL) */}
        <div className="flex items-center gap-3">
          {/* Quick call action (mobile only) */}
          <a
            href={`tel:${phoneNumber}`}
            aria-label="تماس با شرکت"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-palette-secondary text-white shadow-glow transition hover:bg-palette-primary active:scale-95 lg:hidden"
          >
            <PhoneCall size={18} />
          </a>

          {/* Desktop contact info */}
          <div className="hidden items-center gap-5 md:flex">
            <a
              href={`tel:${phoneNumber}`}
              target="_blank"
              className="flex items-center gap-2 text-[14px] text-palette-pearl/70 transition hover:text-palette-primary"
            >
              <FaPhone className="text-palette-secondary" />
              <span dir="ltr">{phoneNumber}</span>
            </a>
            <a
              href={address}
              target="_blank"
              className="flex items-center gap-2 text-[14px] text-palette-pearl/70 transition hover:text-palette-primary"
            >
              <FaLocationDot className="text-palette-secondary" />
              <span>آدرس شرکت</span>
            </a>
            <Link
              href="/#contact-us"
              className="hidden xl:inline-flex items-center rounded-xl bg-palette-secondary px-5 py-2.5 text-[14px] font-semibold text-white shadow-glow transition hover:bg-palette-primary"
            >
              تماس با ما
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu (animated slide-down) */}
      <div
        aria-hidden={!menuOpen}
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[420px] opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="border-t border-slate-200/70 bg-white/95 shadow-soft backdrop-blur-md">
          <div className="container flex flex-col py-3">
            {links.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3.5 text-[15px] font-medium text-palette-pearl/85 transition hover:bg-palette-secondary/5 hover:text-palette-secondary"
              >
                {item.text}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-3 border-t border-slate-200/70 pt-4">
              <a
                href={`tel:${phoneNumber}`}
                target="_blank"
                className="flex items-center gap-3 px-4 text-[14px] text-palette-pearl/70"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-palette-secondary/10 text-palette-secondary">
                  <FaPhone size={14} />
                </span>
                <span dir="ltr">{phoneNumber}</span>
              </a>
              <a
                href={address}
                target="_blank"
                className="flex items-center gap-3 px-4 text-[14px] text-palette-pearl/70"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-palette-secondary/10 text-palette-secondary">
                  <FaLocationDot size={14} />
                </span>
                <span>آدرس شرکت</span>
              </a>
              <Link
                href="/#contact-us"
                onClick={closeMenu}
                className="btn-primary mt-2"
              >
                تماس با ما
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;