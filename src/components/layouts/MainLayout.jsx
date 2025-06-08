import { useEffect } from "react";
import Navbar from "./Navbar";
import useDarkMode from "../../hooks/useDarkMode";

export default function MainLayout({ children }) {
  const [isDark] = useDarkMode();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 transition-colors duration-200">
      <main className="container mx-auto pb-24 px-5">
        {/* Extra padding for navbar */}
        {children}
      </main>
      <Navbar />
    </div>
  );
}
