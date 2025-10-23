import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NavigationButtons from "@/components/NavigationButtons";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <NavigationButtons />
      </main>
      <Footer />
    </div>
  );
}
