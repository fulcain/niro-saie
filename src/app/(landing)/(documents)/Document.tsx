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
  return (
    <div className="document flex flex-col gap-5 p-5 border">
      <div className="flex flex-col gap-2 info">
        <h3 className="font-[700]">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
      <button className="flex items-center gap-2 text-palette-primary">
        <span>دانلود جزوه</span>
        <FaDownload />
      </button>
    </div>
  );
};

export default Document;
