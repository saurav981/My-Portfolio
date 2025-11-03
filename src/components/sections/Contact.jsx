import Icon from "../ui/Icon";
import { portfolioData } from "../../assets/data";

export default function Contact() {
  const { socialLinks } = portfolioData;

  return (
    <section id="contact" className="pt-20 pb-10">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Want to discuss a project or just say hi? Reach out through any of
          these channels:
        </p>
        <div className="flex gap-8 justify-center">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name={link.name} className="size-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
