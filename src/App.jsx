import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Works from "./components/Works";

function App() {
  return (
    <div
      className="h-screen bg-gradient-to-r from-black
    to-blue-950
    animate-gradient-y snap-y snap-mandatory scroll-smooth overflow-y-auto "
    >
      <Hero />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
