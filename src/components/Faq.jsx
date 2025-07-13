import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { gsap } from "gsap";

const faqs = [
  {
    question: "What is this token about?",
    answer: "It's a next-gen decentralized token for global scalability.",
  },
  {
    question: "How do I buy the token?",
    answer: "Click the 'Buy Token' button and follow the instructions.",
  },
  {
    question: "Is this token secure?",
    answer: "Yes, it follows industry best practices and audits.",
  },
  {
    question: "What wallets are supported?",
    answer: "Popular wallets like MetaMask, Trust Wallet, and WalletConnect.",
  },
  {
    question: "What is the total supply?",
    answer: "The total supply is fixed at 1 billion tokens.",
  },
  {
    question: "Will there be staking options?",
    answer: "Yes, staking options will launch in the next phase.",
  },
];

const Faq = () => {
  const [expanded, setExpanded] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    const isOpen = expanded.includes(index);

    if (isOpen) {
      // Animate closing
      gsap.to(answerRefs.current[index], {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          setExpanded((prev) => prev.filter((i) => i !== index));
        },
      });
    } else {
      setExpanded((prev) => [...prev, index]);
      gsap.fromTo(
        answerRefs.current[index],
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, faqs.length));
  };

  return (
    <section className="bg-white px-6 md:px-24 py-20 text-black">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <section className=" flex items-center justify-center px-4 md:px-10 py-16 bg-white text-black">
        <div className="max-w-3xl w-full space-y-6 text-center m-6">
          {faqs.slice(0, visibleCount).map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl p-5 shadow-md transition-all overflow-hidden text-left"
            >
              <button
                className="w-full flex justify-between items-center text-left text-3xl  font-semibold"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {expanded.includes(index) ? (
                  <ChevronUp className="ml-2" />
                ) : (
                  <ChevronDown className="ml-2" />
                )}
              </button>
              <div
                ref={(el) => (answerRefs.current[index] = el)}
                style={{
                  height: expanded.includes(index) ? "auto" : 0,
                  overflow: "hidden",
                  opacity: expanded.includes(index) ? 1 : 0,
                }}
                className="faq-answer text-gray-600 text-3xl mt-3 text-justify"
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}

          {visibleCount < faqs.length && (
            <div className="text-center pt-6">
              <button
                onClick={handleShowMore}
                className="px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all"
              >
                See More
              </button>
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default Faq;
