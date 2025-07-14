import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  tg1,
  tg2,
  tg3,
  tg4,
  tg5,
  tg6,
  tg7,
  tg8,
  tg9,
  tg10,
  tg11,
  tg12,
  tg13,
  tg14,
  tg15,
  tg16,
  tg17,
  tg18,
  tg19,
  tg20,
  tg21,
} from "../assets/tortureImages";

gsap.registerPlugin(ScrollTrigger);

const tortures = [
  {
    title: "💄 Lust Lashes",
    description: "A kiss that burns into your bones. Soft lips, sharp teeth.",
    img: tg1,
  },
  {
    title: "🔥 The Furnace Embrace",
    description: "Arms that hold too tight, warmth that melts your will.",
    img: tg13,
  },
  {
    title: "🖤 The Craving Chair",
    description:
      "You sit, you ache, you remember everything you ever wanted. But never get it.",
    img: tg20,
  },
  {
    title: "🩸 Whispers of the Wicked",
    description: "Words so sweet they rot your sanity.",
    img: tg11,
  },
  {
    title: "👠 Heels of Regret",
    description: "You chased her, now she walks all over your soul.",
    img: tg15,
  },
  {
    title: "🕷 Web of Whispers",
    description: "You’re wrapped in lies — and you begged for it.",
    img: tg17,
  },
  {
    title: "🔗 Shackles of Shame",
    description: "Every time you squirm, the memories tighten.",
    img: tg2,
  },
  {
    title: "🩶 Mirror of Sin",
    description: "See yourself as they saw you — and scream.",
    img: tg6,
  },
  {
    title: "🎭 The Liar's Mask",
    description: "Smile all you want. It’s stitched on now.",
    img: tg14,
  },
  {
    title: "🐍 Venom Caress",
    description: "They loved you — with poison in their touch.",
    img: tg7,
  },
  {
    title: "🔮 The Guilt Seer",
    description: "Visions of who you were, and who you destroyed.",
    img: tg5,
  },
  {
    title: "🧨 Desire Detonator",
    description: "Every craving is a trap. Every climax a bomb.",
    img: tg18,
  },
  {
    title: "👅 Tongue of Fire",
    description: "She spoke your name — now it only screams.",
    img: tg4,
  },
  {
    title: "🪞 Echoes of Her",
    description: "She calls from every corner. But never comes back.",
    img: tg3,
  },
  {
    title: "🕯 Candle of Longing",
    description: "Burns slow. Smells sweet. Scars forever.",
    img: tg8,
  },
  {
    title: "🪰 Flies of Regret",
    description: "They buzz with everything you never said.",
    img: tg9,
  },
  {
    title: "🛏 Bed of Nails & Whispers",
    description: "Lie back. Remember. Bleed silently.",
    img: tg12,
  },
  {
    title: "🔒 Vault of Secrets",
    description: "You locked them away. Now they scream to get out.",
    img: tg16,
  },
  {
    title: "⏳ Hourglass of Her Absence",
    description: "Time flows slower when you’re haunted.",
    img: tg10,
  },
  {
    title: "💔 The Heartcrush Waltz",
    description: "One dance. One break. Again and again.",
    img: tg21,
  },
  {
    title: "👁️ The Hunter’s Curse",
    description:
      "You watched her. Followed her. Whispered filth behind her back. Now the eyes never blink, and the screams never stop.",
    img: tg19,
  },
];

const TortureGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const cardsRef = useRef([]);

  const visibleTortures = showAll ? tortures : tortures.slice(0, 6);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#torture-gallery",
          start: "top 80%",
        },
      }
    );
  }, [showAll]);

  return (
    <section id="torture-gallery" className="bg-black py-16 px-4 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-red-500 mb-12">
        Tortures That Turn You On… Then Tear You Apart
      </h2>

      <div className="columns-1 sm:columns-2 lg:columns-3 2xl:columns-4 gap-6 max-w-7xl mx-auto px-4 space-y-6">
        {visibleTortures.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="break-inside-avoid bg-zinc-900 rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.03] transition-transform duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full object-cover max-h-[600px]"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-pink-400">{item.title}</h3>
              <p className="text-zinc-300 text-lg mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-full text-white font-semibold text-lg"
          >
            See All Tortures
          </button>
        </div>
      )}
    </section>
  );
};

export default TortureGallery;
