import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ArtistShowcase from "@/components/ArtistShowcase";
import PodcastSection from "@/components/PodcastSection";
import NonprofitSection from "@/components/NonprofitSection";
import StreetTeamSection from "@/components/StreetTeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/ui/FadeInSection";

function App() {
  return (
    <div className="min-h-screen bg-cream selection:bg-gold/30">
      <Navbar />
      <main>
        <HeroSection />
        
        <div className="relative bg-plum pt-12 pb-32 space-y-32">
          {/* Vertical layout using simple spacing and fade-ins */}
          <div id="showcase">
            <FadeInSection>
              <ArtistShowcase />
            </FadeInSection>
          </div>

          <div id="podcast">
            <FadeInSection>
              <PodcastSection />
            </FadeInSection>
          </div>

          <div id="nonprofit">
            <FadeInSection>
              <NonprofitSection />
            </FadeInSection>
          </div>

          <div id="street-team">
            <FadeInSection>
              <StreetTeamSection />
            </FadeInSection>
          </div>
        </div>

        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
