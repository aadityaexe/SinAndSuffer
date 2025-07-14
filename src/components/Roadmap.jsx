import phaseOneImage from "../assets/p1.jpg";
import phaseTwoImage from "../assets/p2.png";
import phaseThreeImage from "../assets/p3.jpg";
import phaseFourImage from "../assets/p4.jpg";

const Roadmap = () => {
  const phases = [
    {
      title: "Phase 1: Gather Support",
      description:
        "Start by talking to classmates and gathering support for your candidacy.",
      image: phaseOneImage,
    },
    {
      title: "Phase 2: Create a Campaign Plan",
      description:
        "Draft a detailed plan that outlines your goals and strategies for your campaign.",
      image: phaseTwoImage,
    },
    {
      title: "Phase 3: Promote Your Candidacy",
      description:
        "Use posters, social media, and word of mouth to promote your campaign.",
      image: phaseThreeImage,
    },
    {
      title: "Phase 4: Election Day!",
      description:
        "Remind your supporters to vote and celebrate the journey together!",
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
