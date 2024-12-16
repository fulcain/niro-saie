import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import Document from "@/components/Document";
import { documents } from "@/data/documents";

const Documents = () => {
  const lastThreeDocuments = documents.slice(0, 3);
  return (
    <section id="documents">
      <div className="container flex flex-col gap-[40px]">
        <SectionTitle subTitle="جزوه های درسی" title="آخرین جزوه ها" />
        <div
          id="documents-list"
          className="flex flex-wrap justify-center gap-10"
        >
          {documents.length >= 1 ? (
            lastThreeDocuments.map((item, idx) => (
              <Document
                key={idx}
                title={item.title}
                description={item.description}
                downloadLink={item.downloadLink}
                date={item.date}
              />
            ))
          ) : (
            <span className="text-yellow-500 font-bold">
              جزوه ای وجود ندارد
            </span>
          )}
        </div>
        {documents.length ? (
          <button className="bg-palette-primary text-white rounded-[8px] w-fit p-2 font-[200] self-center text-[14px] cursor-pointer hover:bg-palette-pearl transition duration-500">
            <Link href="/documents">مشاهده لیست جزوه ها</Link>
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default Documents;
