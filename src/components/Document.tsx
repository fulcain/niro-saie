"use client";

import { convertToPersianDate } from "@/helpers/convertToPersianDate";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

const Document = ({
  title,
  description,
  downloadLink,
  date,
}: {
  title: string;
  description: string;
  downloadLink: string;
  date: string;
}) => {
  const [day, month, year] = convertToPersianDate(
    date ? new Date(date) : new Date(),
  ).split(" ");

  return (
    <div className="card card-hover group flex min-w-[300px] max-w-[360px] flex-col overflow-hidden rounded-2xl">
      <div className="relative flex items-center justify-center bg-gradient-to-br from-palette-primary to-palette-pearl px-6 pb-7 pt-10">
        <Image
          src="/images/general/pdf.png"
          width={80}
          height={90}
          alt="pdf"
          className="h-20 w-auto object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 flex flex-col items-center rounded-xl bg-white px-3 py-2 text-center shadow-soft">
          <span className="text-[16px] font-extrabold leading-5 text-palette-primary">
            {day}
          </span>
          <span className="text-[11px] font-semibold text-palette-gray">
            {month}
          </span>
          <span className="text-[10px] text-gray-400">{year}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-[18px] font-bold text-palette-pearl">{title}</h3>
        <p className="text-[13px] font-medium leading-6 text-slate-600">
          {description}
        </p>
      </div>

      {downloadLink && (
        <a
          href={downloadLink}
          download
          className="mx-6 mb-6 flex items-center justify-center gap-2 rounded-xl bg-palette-secondary/10 py-2.5 text-[14px] font-bold text-palette-secondary transition hover:bg-palette-secondary hover:text-white"
        >
          <FaDownload size={15} />
          <span>دانلود جزوه</span>
        </a>
      )}
    </div>
  );
};

export default Document;