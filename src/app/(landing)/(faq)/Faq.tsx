import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "./faqTexts";
import { FaCheckCircle } from "react-icons/fa";

const Faq = () => {
  return (
    <Accordion
      className="flex w-full flex-col gap-4"
      type="single"
      collapsible
      defaultValue="item-1"
      dir="rtl"
    >
      {faqs.map((faq, idx) => (
        <AccordionItem
          key={idx}
          value={`item-${idx + 1}`}
          className="card overflow-hidden rounded-2xl border-slate-200/80 data-[state=open]:border-palette-secondary/40 data-[state=open]:shadow-card"
        >
          <AccordionTrigger className="gap-3 px-5 py-4 text-[15px] md:text-[16px] font-bold text-palette-pearl">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-palette-secondary/10 text-palette-secondary">
                <FaCheckCircle size={15} />
              </span>
              <span>{faq.question}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 pr-[56px] text-[14px] leading-7 text-slate-600">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Faq;