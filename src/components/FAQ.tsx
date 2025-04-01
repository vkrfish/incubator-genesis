
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long is the incubator program?",
    answer: "The program is designed to be flexible, ranging from 30 days to 3 months depending on your startup's needs and stage of development."
  },
  {
    question: "Do I need to have a fully developed business plan?",
    answer: "No, we accept early-stage founders without fully developed business plans. We focus on your ambition, potential, and willingness to execute."
  },
  {
    question: "Is there a fee to join the incubator?",
    answer: "There are no upfront fees or hidden costs. We believe in a success-based model where we win when you win."
  },
  {
    question: "How much time commitment is required?",
    answer: "The program is designed to be flexible and self-paced, but we recommend dedicating at least 20 hours per week to get the most value from the program."
  },
  {
    question: "Do I need to relocate to participate?",
    answer: "No, our program is fully remote, allowing founders from anywhere in the world to participate without relocation."
  },
  {
    question: "What types of startups do you accept?",
    answer: "We accept startups from various industries, but we primarily focus on technology-enabled businesses with scalable models."
  },
  {
    question: "What happens after the incubator program ends?",
    answer: "Graduates become part of our alumni network with continued access to our community, resources, and special events."
  },
  {
    question: "What are the $500K+ in startup deals?",
    answer: "We've partnered with leading service providers to offer exclusive discounts and credits for essential business tools and services, including cloud hosting, marketing tools, legal services, and more."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-incubator-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Get answers to the most common questions about our incubator program.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 hover:text-incubator-secondary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
