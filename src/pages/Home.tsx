import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ValueProposition from "@/components/home/ValueProposition";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <ValueProposition />
        <FeaturedPrograms />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
