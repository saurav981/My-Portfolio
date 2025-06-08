import { portfolioData } from "../../assets/data";

export default function Skills() {
  const { skills } = portfolioData;

  if (!skills) return <div className="py-20">Loading skills...</div>;

  return (
    <section id="skills">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Skills
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-neutral-800 dark:bg-neutral-50 text-white dark:text-neutral-900 text-xs font-semibold hover:bg-neutral-700 dark:hover:bg-neutral-300 hover:cursor-pointer transition-colors duration-200 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
