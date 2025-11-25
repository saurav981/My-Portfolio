import Icon from "../ui/Icon";
import ThemeToggle from "../ui/ThemeToggle";

const navLinks = [
  { full: "Projects", short: "Work" },
  { full: "Experience", short: "Exp" },
  { full: "Contact", short: "Chat" },
];

export default function Navbar() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 px-3 sm:px-6 py-1 rounded-full shadow-lg z-50 max-w-[95vw]">
      <div className="flex gap-2 sm:gap-6 items-center">
        {navLinks.map((link, i) => (
          <a
            href={`#${link.full.toLowerCase()}`}
            className="text-xs sm:text-sm font-medium whitespace-nowrap"
            key={i}
          >
            <span className="hidden sm:inline">{link.full}</span>
            <span className="sm:hidden">{link.short}</span>
          </a>
        ))}

        <div className="flex-shrink-0">
          <ThemeToggle />
        </div>

        <a
          href="/assets/Saurav Backend Resume.pdf"
          target="_blank"
          rel="noopener"
          className="flex-shrink-0"
        >
          <Icon name="resume" className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
}
