import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="min-h-fit">
      <Navbar />
      <HeroSection />
      <Footer />
    </main>
  );
}
