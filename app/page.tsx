import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Programs from "./components/Programs";
import Pricing from "./components/Pricing";
import Trainers from "./components/Trainers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Programs />
      <Pricing />
      <Trainers />
      <Contact />
      <Footer />
    </main>
  );
}
