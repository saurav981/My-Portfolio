import useDarkMode from "../../hooks/useDarkMode";
import Icon from "./Icon";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="p-2 rounded-full"
    >
      {isDark ? (
        <Icon name="sun" className="w-5 h-5 text-yellow-400" />
      ) : (
        <Icon name="moon" className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
}
