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
      className="w-[90vw] md:w-full mx-5 rounded border border-palette-gray border-opacity-80"
      type="single"
      collapsible
      defaultValue="item-1"
      dir="rtl"
    >
      {faqs.map((faq, idx) => (
        <AccordionItem key={idx} value={`item-${idx + 1}`}>
          <AccordionTrigger className="px-4 data-[state=open]:text-white data-[state=open]:bg-palette-primary">
            <div className="flex items-center justify-center gap-2">
              <FaCheckCircle className="text-palette-primary accordion-check-icon" />
              <span>{faq.question}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="py-4 px-6">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Faq;
