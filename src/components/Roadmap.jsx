import phaseOneImage from "../assets/p1.jpg";
import phaseTwoImage from "../assets/p2.png";
import phaseThreeImage from "../assets/p3.jpg";
import phaseFourImage from "../assets/p4.jpg";

const Roadmap = () => {
  const phases = [
    {
      title: "Phase I: The Temptation",
      description:
        'You flirted with fire. You bit the fruit. You said, "Just once And the gates opened".',
      image: phaseOneImage,
    },
    {
      title: "Phase 2: The Seduction",
      description:
        'Demons in silk, kisses that sting, moans that echo through the flames.You begged, "Harder." Hell listened.',
      image: phaseTwoImage,
    },
    {
      title: "Phase 3: The Possession",
      description:
        'Now your skin is memory, your soul belongs to the heat.You don’t scream. You whisper "More."',
      image: phaseThreeImage,
    },
    {
      title: "Phase 4:  The Endless Night",
      description:
        "There’s no time here. Only touch, torment, and twisted love stories carved in ash.",
      image: phaseFourImage,
    },
  ];

  return (
    <div id="roadmap" className="w-full bg-no-repeat bg-cover bg-center">
      <div className="roadmap-bg max-w-6xl mx-auto p-5  bg-opacity-90">
        <h2 className="text-4xl font-bold text-center  mb-8">
          Roadmap to Becoming President
        </h2>
        <div className="flex flex-col items-center">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center mb-8"
            >
              <img
                src={phase.image}
                alt={phase.title}
                className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-4"
              />
              <div className=" p-4 rounded-lg shadow-md flex-1">
                <h3 className="text-3xl font-semibold  mb-2">{phase.title}</h3>
                <p className="text-xl">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
