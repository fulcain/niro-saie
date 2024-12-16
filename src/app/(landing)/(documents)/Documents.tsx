import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import Document from "./Document";

const Documents = () => {
  return (
    <section id="documents">
      <div className="container flex flex-col gap-[40px]">
        <SectionTitle subTitle="جزوه های درسی" title="آخرین جزوه ها" />
        <div id="documents-list" className="flex flex-wrap gap-10">
          <Document
            title="جزوه"
            description="توضیحات جزوه"
            downloadLink=""
            date=""
          />
        </div>
        <button className="bg-palette-primary text-white rounded-[8px] w-fit p-2 font-[200] self-end text-[14px] cursor-pointer hover:bg-palette-pearl transition duration-500">
          <Link href="/documents">مشاهده لیست جزوه ها</Link>
        </button>
      </div>
    </section>
  );
};

export default Documents;
