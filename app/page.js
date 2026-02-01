import Navbar from "@/components/navbar";
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import About from "@/components/home/about";
import Contact from "@/components/home/contact"; 
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <About /> 
      <Contact />
      <Footer />
    </main>
  );
}
