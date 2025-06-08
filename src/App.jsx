import MainLayout from "./components/layouts/MainLayout";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <Projects />
      <Contact />
    </MainLayout>
  );
}
