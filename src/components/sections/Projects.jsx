import Icon from "../ui/Icon";
import { portfolioData } from "../../assets/data";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white md:text-center mb-8 md:mb-10">
        Projects
      </h2>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-neutral-950 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 ease-out h-full flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`/assets/images/${project.image}`}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top border-b dark:border-gray-700"
                />
              </div>

              {/* Project Content */}
              <div className="p-2 flex flex-col flex-grow">
                <h3 className="text-gray-800 dark:text-white md:text-lg font-semibold md:font-bold mb-1">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-[.85rem] mb-3 flex-grow">
                  {project.desc}
                </p>

                {project.stack && project.stack.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-200 font-semibold rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs px-2 py-1 bg-gray-800 dark:bg-white text-white dark:text-black rounded-md hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
                    >
                      <Icon
                        name="external"
                        className="w-3 h-3 invert dark:invert-0"
                      />
                      Website
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs px-2 py-1 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-md hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
                    >
                      <Icon
                        name="github"
                        className="w-3 h-3 invert dark:invert-0"
                      />
                      Source
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs px-2 py-1 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-md hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
                    >
                      <Icon
                        name="external"
                        className="w-3 h-3 invert dark:invert-0"
                      />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
