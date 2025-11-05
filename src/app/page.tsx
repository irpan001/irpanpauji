import About from "./home/partials/about";
import Choice from "./home/partials/choice";
import Faq from "./home/partials/faq";
import Hero from "./home/partials/hero";
import Navbar from "./home/partials/navbar";
import Portofolio from "./home/partials/portofolio";
import Service from "./home/partials/service";
import Skills from "./home/partials/skills";
import Footer from "./home/partials/footer";

export default function Home() {
  return (
    <div className="bg-base-black w-full">
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Skills />
      <Choice />
      <Portofolio />
      <Faq />
      <Footer />
    </div>
  );
}
