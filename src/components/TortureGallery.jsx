import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tg1 from "../assets/tg1.jpg";
import tg2 from "../assets/tg2.jpg";
gsap.registerPlugin(ScrollTrigger);

// 👿 Add as many torture cards as you like
const tortures = [
  {
    title: "💄 Lust Lashes",
    description: "A kiss that burns into your bones. Soft lips, sharp teeth.",
    img: tg1,
  },
  {
    title: "🔥 The Furnace Embrace",
    description: "Arms that hold too tight, warmth that melts your will.",
    img: "/images/furnace.jpg",
  },
  {
    title: "🖤 The Craving Chair",
    description:
      "You sit, you ache, you remember everything you ever wanted. But never get it.",
    img: "/images/craving.jpg",
  },
  {
    title: "🩸 Whispers of the Wicked",
    description: "Words so sweet they rot your sanity.",
    img: "/images/whispers.jpg",
  },
  {
    title: "👠 Heels of Regret",
    description: "You chased her, now she walks all over your soul.",
    img: "/images/heels.jpg",
  },
  {
    title: "🕷 Web of Whispers",
    description: "You’re wrapped in lies — and you begged for it.",
    img: "/images/web.jpg",
  },
  {
    title: "🔗 Shackles of Shame",
    description: "Every time you squirm, the memories tighten.",
    img: tg2,
  },
  {
    title: "🩶 Mirror of Sin",
    description: "See yourself as they saw you — and scream.",
    img: "/images/mirror.jpg",
  },
  {
    title: "🎭 The Liar's Mask",
    description: "Smile all you want. It’s stitched on now.",
    img: "/images/mask.jpg",
  },
  {
    title: "🐍 Venom Caress",
    description: "They loved you — with poison in their touch.",
    img: "/images/venom.jpg",
  },
  {
    title: "🔮 The Guilt Seer",
    description: "Visions of who you were, and who you destroyed.",
    img: "/images/seer.jpg",
  },
  {
    title: "🧨 Desire Detonator",
    description: "Every craving is a trap. Every climax a bomb.",
    img: "/images/detonator.jpg",
  },
  {
    title: "👅 Tongue of Fire",
    description: "She spoke your name — now it only screams.",
    img: "/images/tongue.jpg",
  },
  {
    title: "🪞 Echoes of Her",
    description: "She calls from every corner. But never comes back.",
    img: "/images/echo.jpg",
  },
  {
    title: "🕯 Candle of Longing",
    description: "Burns slow. Smells sweet. Scars forever.",
    img: "/images/candle.jpg",
  },
  {
    title: "🪰 Flies of Regret",
    description: "They buzz with everything you never said.",
    img: "/images/flies.jpg",
  },
  {
    title: "🛏 Bed of Nails & Whispers",
    description: "Lie back. Remember. Bleed silently.",
    img: "/images/bed.jpg",
  },
  {
    title: "🔒 Vault of Secrets",
    description: "You locked them away. Now they scream to get out.",
    img: "/images/vault.jpg",
  },
  {
    title: "⏳ Hourglass of Her Absence",
    description: "Time flows slower when you’re haunted.",
    img: "/images/hourglass.jpg",
  },
  {
    title: "💔 The Heartcrush Waltz",
    description: "One dance. One break. Again and again.",
    img: "/images/waltz.jpg",
  },
  {
    title: "👁️ The Hunter’s Curse",
    description:
      "You watched her. Followed her. Whispered filth behind her back. Now the eyes never blink, and the screams never stop.",
    img: "/images/hunter.jpg",
  },
];

const TortureGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const cardsRef = useRef([]);

  const visibleTortures = showAll ? tortures : tortures.slice(0, 6);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 1,
        delay: Math.random() * 0.3,
        ease: "power3.out",
      });
    });
  }, [showAll]); // Animate on toggle

  return (
    <section id="torture-gallery" className="bg-black py-16 px-4 text-white">
      <h2 className="text-4xl font-bold text-center text-red-500 mb-12">
        Tortures That Turn You On… Then Tear You Apart
      </h2>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto space-y-6">
        {visibleTortures.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="break-inside-avoid bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full object-cover h-auto max-h-[300px]"
            />
            <div className="p-4">
              <h3 className="text-3xl font-bold text-pink-400">{item.title}</h3>
              <p className="text-zinc-300 text-2xl mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-full text-white font-semibold"
          >
            See All Tortures
          </button>
        </div>
      )}
    </section>
  );
};

export default TortureGallery;
