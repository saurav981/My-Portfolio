import { portfolioData } from "../../assets/data";

export const About = () => {
  const { about } = portfolioData;

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
        About
      </h2>
      <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
        <p>{about}</p>
      </div>
    </div>
  );
};
