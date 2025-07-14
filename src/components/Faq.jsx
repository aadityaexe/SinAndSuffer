import React, { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { gsap } from "gsap";

const faqs = [
  {
    question: "Can I leave?",
    answer: "Why would you want to?",
  },
  {
    question: "Is it always this hot?",
    answer: "Only when you misbehave. Or behave very, very well.",
  },
  {
    question: "Who’s in charge here?",
    answer:
      "She wears heels made of bone and lipstick made of sin. You’ll meet her soon.",
  },
  {
    question: "Is there love in Hell?",
    answer: "Love? No. Obsession? Absolutely.",
  },
  {
    question: "What did I do to deserve this?",
    answer: "You already know. Don’t play innocent now.",
  },
  {
    question: "Can I scream?",
    answer: "Of course. We encourage it.",
  },
  {
    question: "Is this punishment or pleasure?",
    answer: "Here, we don’t distinguish between the two.",
  },
  {
    question: "How long will I stay?",
    answer: "Time doesn't pass here. Just suffering.",
  },
  {
    question: "Are there demons?",
    answer: "More than you can handle. And they like you.",
  },
  {
    question: "Can I make a deal?",
    answer: "You already did. That’s why you’re here.",
  },
  {
    question: "Do you take souls?",
    answer: "We collect them. Gently. Then burn them slowly.",
  },
  {
    question: "Is this real?",
    answer: "As real as your last regret.",
  },
  {
    question: "Will it hurt?",
    answer: "Oh, darling… that's the point.",
  },
  {
    question: "What’s that smell?",
    answer: "Desire. And a hint of sulfur.",
  },
  {
    question: "Do I have a room?",
    answer: "Yes. Lined with mirrors. All of them watching.",
  },
  {
    question: "Is there music?",
    answer: "Screams are the symphony. Pain is the rhythm.",
  },
  {
    question: "Who built this place?",
    answer: "Architects of agony. Designers of dread.",
  },
  {
    question: "Can I sleep?",
    answer: "Only if your guilt lets you.",
  },
  {
    question: "Why is everyone looking at me?",
    answer: "Because you’re the main event tonight.",
  },
  {
    question: "Is there escape?",
    answer: "We removed all the exits. For fun.",
  },
  {
    question: "Do you punish everyone?",
    answer: "Only the beautiful sinners.",
  },
  {
    question: "What’s her name?",
    answer: "She has many. But none you'll survive saying out loud.",
  },
  {
    question: "Can I touch her?",
    answer: "She touches first. If she likes you.",
  },
  {
    question: "Do I belong here?",
    answer: "You *fit* here perfectly. Almost like you were made for this.",
  },
  {
    question: "Will they miss me?",
    answer: "They’ve already forgotten you. That’s why you're ours now.",
  },
  {
    question: "Is this a dream?",
    answer: "Worse. It’s a craving turned real.",
  },
  {
    question: "What happens if I behave?",
    answer: "We don’t recommend that. It gets... boring.",
  },
  {
    question: "Is there fire?",
    answer: "Inside you. We just help feed it.",
  },
  {
    question: "Can I cry?",
    answer: "Your tears are currency here.",
  },
  {
    question: "Are those chains necessary?",
    answer: "Only if you fight. We hope you fight.",
  },
  {
    question: "Can I beg?",
    answer: "Yes. It excites the staff.",
  },
  {
    question: "Is there food?",
    answer: "Yes. You’re on the menu tonight.",
  },
  {
    question: "What’s the dress code?",
    answer: "Skin. And sin.",
  },
  {
    question: "Do you believe in mercy?",
    answer: "We worship the absence of it.",
  },
  {
    question: "Why is it so dark?",
    answer: "So your sins can whisper without shame.",
  },
  {
    question: "Can I dance?",
    answer: "Yes. On the ashes of your past.",
  },
  {
    question: "Is this a joke?",
    answer: "The punchline is your fate.",
  },
  {
    question: "Is she watching me?",
    answer: "She never blinks. Especially when you squirm.",
  },
  {
    question: "What’s that sound?",
    answer: "It’s you. In denial.",
  },
  {
    question: "Will I get used to it?",
    answer: "No. That’s the beauty of it.",
  },
  {
    question: "Why me?",
    answer: "Because you asked the wrong question. Now ask the right one.",
  },
  {
    question: "Is she real?",
    answer: "She’s more real than your regrets.",
  },
  {
    question: "Can I touch the fire?",
    answer: "You already have. It liked you back.",
  },
  {
    question: "Is this forever?",
    answer: "Forever starts with your next scream.",
  },
  {
    question: "Is there a leader?",
    answer: "She rules with lips like poison and a heart made of knives.",
  },
  {
    question: "Are there rules?",
    answer: "Break all of them. That’s how you earn attention.",
  },
  {
    question: "Will I be punished?",
    answer: "Constantly. Lovingly. Creatively.",
  },
  {
    question: "Why can’t I stop shaking?",
    answer: "That’s just your soul waking up.",
  },
  {
    question: "What’s her touch like?",
    answer: "Velvet wrapped around razor blades.",
  },
  {
    question: "Do I get a safe word?",
    answer: "Yes. But it only makes things worse.",
  },
  {
    question: "Are those screams real?",
    answer: "So are the smiles that follow them.",
  },
  {
    question: "Is it hot in here?",
    answer: "It’s you. Burning from the inside.",
  },
  {
    question: "Can I repent?",
    answer: "We like our sinners unwashed.",
  },
  {
    question: "What happens at midnight?",
    answer: "She comes. And she doesn't knock.",
  },
  {
    question: "Can I close my eyes?",
    answer: "Sure. We’ll just open them for you.",
  },
  {
    question: "Is this a game?",
    answer: "Yes. But only she wins.",
  },
  {
    question: "What’s her kiss like?",
    answer: "Hotter than fire. Deadlier than silence.",
  },
  {
    question: "Why does this feel good?",
    answer: "Because your shame begged for it.",
  },
  {
    question: "Do you take confessions?",
    answer: "We savor them. Slowly.",
  },
  {
    question: "Who am I here?",
    answer: "A toy. A lesson. A masterpiece in torment.",
  },
  {
    question: "What’s beneath the floor?",
    answer: "More Hell. Deeper. Wetter. Worse.",
  },
  {
    question: "Will I remember this?",
    answer: "Only when you beg to forget.",
  },
  {
    question: "What if I like it here?",
    answer: "You will. That’s the trap.",
  },
  {
    question: "Can I hide?",
    answer: "From her? Try. She loves hide and seek.",
  },
  {
    question: "Is this punishment for my desires?",
    answer: "No. This *is* your desire.",
  },
  {
    question: "What does she want?",
    answer: "Your surrender. And your silence.",
  },
  {
    question: "Will she break me?",
    answer: "She prefers to unravel you, thread by sinful thread.",
  },
  {
    question: "Are we alone?",
    answer: "We’re never alone. Especially in the dark.",
  },
  {
    question: "Will I bleed?",
    answer: "Not always red.",
  },
  {
    question: "What’s that taste?",
    answer: "Shame. Lust. Regret.",
  },
  {
    question: "Is there redemption?",
    answer: "Not for the interesting ones.",
  },
  {
    question: "Why is she smiling?",
    answer: "Because you finally stopped lying to yourself.",
  },
  {
    question: "Does Hell change people?",
    answer: "No. It reveals them.",
  },
  {
    question: "Can I resist?",
    answer: "We encourage resistance. It makes the fall so much sweeter.",
  },
  {
    question: "Is this madness?",
    answer: "It’s called clarity down here.",
  },
  {
    question: "Do I still have a heart?",
    answer: "Yes. And she’s holding it.",
  },
  {
    question: "Who are the others?",
    answer: "Past lovers. Future mistakes.",
  },
  {
    question: "Can I choose my fate?",
    answer: "You already did. She was wearing red.",
  },
  {
    question: "Why am I smiling?",
    answer: "Because pain never looked so good.",
  },
  {
    question: "Will she kiss me?",
    answer: "Eventually. After she breaks your will.",
  },
  {
    question: "What happens next?",
    answer: "You scream. She laughs. We all celebrate.",
  },
];

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
    setVisibleCount((prev) => Math.min(prev + 3, filteredFaqs.length));
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="bg-white px-6 md:px-24 py-20 text-black">
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
            setVisibleCount(3); // Reset visible count on search
            setExpanded([]); // Close all expanded answers
          }}
        />
      </div>

      <section className="flex items-center justify-center px-4 md:px-10 py-10 bg-white text-black">
        <div className="max-w-3xl w-full space-y-6 text-center m-6">
          {filteredFaqs.slice(0, visibleCount).map((faq, index) => (
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

          {visibleCount < filteredFaqs.length && (
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
