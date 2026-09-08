import SectionTitle from "@/components/SectionTitle";
import PaginatedItems from "./PaginatedItems";

const Documents = () => {
  return (
    <main className="flex flex-col gap-12 py-14 md:py-20">
      <div className="container flex flex-col gap-12">
        <SectionTitle subTitle="جزوه های درسی" title="لیست جزوه ها" />
        <PaginatedItems itemsPerPage={6} />
      </div>
    </main>
  );
};

export default Documents;