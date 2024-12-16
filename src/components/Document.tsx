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
    <div className="document flex flex-col gap-5 border min-w-[320px] rounded-[5px]">
      <div className="pdf-image flex flex-col relative pt-[40px]">
        <Image
          src="/images/general/pdf.png"
          width={0}
          height={0}
          layout="responsive"
          alt="pdf"
          className="absolute !w-[180px] left-[50%] translate-x-[-50%] top-[8px] z-[1]"
        />
        <div className="bg-palette-primary h-[70px]"></div>
        <div className="bg-gray-100 h-[150px] relative">
          <div className="absolute w-[55px] h-[55px] right-0 bottom-0 bg-palette-primary flex flex-col text-white items-center justify-center">
            <span className="font-[700]">{day}</span>
            <span>{month}</span>

            <span className="bg-palette-primary w-[10px] h-[10px] absolute right-[50px] bottom-[50%] translate-y-[50%] rotate-[45deg]"></span>
            <span className="text-[13px] text-gray-400 absolute right-[70px] bottom-[50%] translate-y-[50%]">
              {year}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 info p-5">
        <h3 className="font-[700] text-[22px]">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
      {downloadLink && (
        <a
          href={downloadLink}
          download
          className="flex items-center gap-2 text-[16px] text-palette-primary px-5 py-2"
        >
          <span>دانلود جزوه</span>
          <FaDownload />
        </a>
      )}
    </div>
  );
};

export default Document;
