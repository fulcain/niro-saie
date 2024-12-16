import SectionTitle from "@/components/SectionTitle";

const Documents = () => {
  return (
    <main className="mt-10">
      <SectionTitle subTitle="جزوه های درسی" title="لیست جزوه ها" />

      <div id="documents-list" className="flex flex-wrap gap-10"></div>
    </main>
  );
};

export default Documents;
