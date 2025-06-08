import { portfolioData } from "../../assets/data";

export default function Experience() {
  const { experience } = portfolioData;

  if (!experience) return <div className="py-20">Loading experience...</div>;

  return (
    <section id="experience">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Work Experience
      </h2>

      {experience &&
        experience.map((exp, i) => (
          <div className="flex items-start gap-3 py-2.5" key={i}>
            <div
              className={`${exp.color} size-12 rounded-full flex items-center justify-center flex-shrink-0`}
            >
              <span className="text-white font-bold text-lg">
                {exp.company[0]}
              </span>
            </div>
            <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-0.5">
                  {exp.role}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {exp.company}
                </p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 md:mt-0">
                {exp.duration}
              </span>
            </div>
          </div>
        ))}
    </section>
  );
}
