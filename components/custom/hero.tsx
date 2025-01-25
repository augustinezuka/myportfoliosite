import Gravity, { MatterBody } from "../fancy/gravity";

const skills = [
  { name: "Nest JS", color: "bg-pink-600" },
  { name: "TypeScript", color: "bg-blue-600" },
  { name: "Motion", color: "bg-teal-600" },
  { name: "Tailwind", color: "bg-red-400" },
  { name: "Drei", color: "bg-orange-500" },
  { name: "React-JS", color: "bg-blue-400" },
  { name: "Node.js", color: "bg-green-600" },
  { name: "Svelte", color: "bg-orange-600" },
  { name: "Python", color: "bg-yellow-500" },
  { name: "Next.js", color: "bg-gray-900" },
  { name: "Material UI", color: "bg-blue-300" },
  { name: "GraphQL", color: "bg-pink-400" },
  { name: "PostgreSQL", color: "bg-indigo-500" },
  { name: "Redux", color: "bg-purple-500" },
];

export default function HeroSec() {
  return (
    <div className="w-full z-10 h-[100vh] flex flex-col relative font-azeretMono">
      <div className="pt-20 text-6xl sm:text-7xl md:text-8xl w-full text-center font-calendas italic">
        My Tech Stack
      </div>
      <p className="pt-4 text-base sm:text-xl md:text-2xl text-foreground/70 w-full text-center">
        These are some of my skills
      </p>
      <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
        {skills.map((skill) => (
          <MatterBody
            key={skill.name}
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x={`${Math.floor(Math.random() * 100)}%`}
            y={`${Math.floor(Math.random() * 30)}%`}
          >
            <div
              className={`text-xl sm:text-2xl md:text-3xl ${skill.color} text-white rounded-full hover:cursor-grab px-8 py-4`}
            >
              {skill.name}
            </div>
          </MatterBody>
        ))}
      </Gravity>
    </div>
  );
}
