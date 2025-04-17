import About from "../components/About";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Story from "../components/Story";
import Contact from "../components/contact";

function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
    </main>
  );
}

export default Home;
