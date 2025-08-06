import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import warrior from "./assets/gamer-avatar.png"

interface FAQS {
  question: string;
  answer: string;
}

const FaqSection = () => {
  const faqs: FAQS[] = [
    {
      question: "1. How do I register for the tournament?",
      answer:
        "You can register by clicking the &quot;Register Now&quot; button on our homepage. Fill out the form with your gamer tag, email, and select the game you want to compete in. You'll receive a confirmation email once your registration is complete.",
    },
    {
      question: "2. What games are included in the tournament?",
      answer:
        "Our current tournament features PUBG, Call of Duty: Warzone, and Fortnite. Check the event schedule for specific times and rules for each game.",
    },
    {
      question: "3. Is there an entry fee?",
      answer:
        "Yes, the entry fee is $10 per player. This helps cover prize pools, server costs, and tournament organization. Payment can be made via PayPal or credit/debit card during registration.",
    },
    {
      question: "4. What are the prizes for the winners?",
      answer:
        "We offer cash prizes, exclusive merch, and sponsor giveaways. For example, the winner of the PUBG solo tournament will take home $500 and a custom gaming headset.",
    },
    {
      question: "5. Can I participate if I'm outside the country?",
      answer:
        "Yes! The tournament is open to international players. Just make sure you have a stable internet connection and meet the game region requirements. Time zone differences will be considered when assigning matches.",
    },
  ];
  return (
    <section className="game-bg-7 py-8" id="faq">
      <div className="max-w-screen-xl flex justify-between mx-auto px-4 py-8">
        <div className="w-[45%]">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Having Questions About The Tournament? We Have Just The Right
            Answers For You.
          </h2>
          <img src={warrior} alt="Battle Warrior" />
        </div>
        <div className="w-[45%]">
          <h3 className="text-2xl font-semibold mb-20 text-white">FAQ</h3>
          <Accordion type="single" className="" collapsible>
            {faqs.map((item, index) => (
              <AccordionItem
                value={`item-${index + 1}`}
                key={index + 1}
                className="mb-4"
              >
                <AccordionTrigger className="text-white text-xl font-semibold mb-2">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-white text-lg mb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
