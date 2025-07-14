import React, { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { gsap } from "gsap";
import { faqs } from "../assets/Questions.js"; // Adjust the import based on your file structure
const Faq = () => {
  const [expanded, setExpanded] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [searchTerm, setSearchTerm] = useState("");
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    const isOpen = expanded.includes(index);

    if (isOpen) {
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

  const searchWords = searchTerm.toLowerCase().split(" ").filter(Boolean);

  const filteredFaqs =
    searchTerm === ""
      ? faqs
      : faqs
          .map((faq) => {
            const questionText = faq.question.toLowerCase();
            const answerText = faq.answer.toLowerCase();

            let matchCount = 0;
            for (let word of searchWords) {
              if (questionText.includes(word)) matchCount++;
              if (answerText.includes(word)) matchCount++;
            }

            return { ...faq, matchCount };
          })
          .filter((faq) => faq.matchCount > 0)
          .sort((a, b) => b.matchCount - a.matchCount);

  const visibleFaqs =
    searchTerm === "" ? filteredFaqs.slice(0, visibleCount) : filteredFaqs;

  return (
    <section id="faq" className="px-6 md:px-24 py-20 text-black">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search your damnation..."
          className="w-full max-w-2xl px-6 py-4 text-xl border border-gray-300 rounded-xl focus:outline-none focus:border-pink-500 transition"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setVisibleCount(3); // Reset on new search
            setExpanded([]); // Collapse all
          }}
        />
      </div>

      <section className="flex items-center justify-center px-4 md:px-10 py-10  text-black">
        <div className="max-w-3xl w-full space-y-6 text-center m-6">
          {visibleFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl p-5 shadow-md transition-all overflow-hidden text-left"
            >
              <button
                className="w-full flex justify-between items-center text-left text-3xl font-semibold"
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

          {/* See More only when not searching and more are available */}
          {searchTerm === "" && visibleCount < faqs.length && (
            <div className="text-center pt-6">
              <button
                onClick={handleShowMore}
                className="px-6 py-3 bg-black text-white text-3xl rounded-xl hover:bg-gray-800 transition-all"
              >
                See More
              </button>
            </div>
          )}

          {filteredFaqs.length === 0 && (
            <p className="text-2xl text-gray-500 italic pt-10">
              No answers from Hell found for that...
            </p>
          )}
        </div>
      </section>
    </section>
  );
};

export default Faq;
