import { siteContent } from "@/data/siteContent";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedShinyButton from "@/components/ui/AnimatedShinyButton";
import RevealText from "@/components/ui/RevealText";

export default function HeroSection() {
  const { brand } = siteContent;

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0D0815]"
    >
      {/* Base Background Image (Portrait) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/FINALLY.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      />
      
      {/* Gradient overlay - Mobile gets a vertical fade to protect text, Desktop gets horizontal */}
      <div 
        className="absolute inset-0 pointer-events-none sm:hidden"
        style={{
          background: "linear-gradient(to right, #0D0815 0%, rgba(13,8,21,0.9) 50%, rgba(13,8,21,0.3) 100%)"
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none hidden sm:block"
        style={{
          background: "linear-gradient(90deg, #0D0815 0%, rgba(13,8,21,0.85) 35%, rgba(13,8,21,0) 100%)"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-28 sm:py-40 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow with RevealText */}
          <div className="mb-6 sm:mb-8">
            <RevealText
              delay={200}
              direction="up"
              className="text-[10px] sm:text-[12px] font-normal tracking-[4px] sm:tracking-[5px] uppercase text-gold/80"
            >
              {brand.eyebrow}
            </RevealText>
          </div>

          {/* Headline with staggered RevealText per line */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-cream leading-[1.1] sm:leading-[1.05] tracking-tight mb-8 sm:mb-10">
            <span className="block">
              <RevealText delay={400} direction="up" className="opacity-90">
                Amplifying Artists.
              </RevealText>
            </span>
            <span className="block">
              <RevealText delay={550} direction="up" className="text-gold italic">
                Feeding Communities.
              </RevealText>
            </span>
            <span className="block">
              <RevealText delay={700} direction="up" className="opacity-90">
                Building Culture.
              </RevealText>
            </span>
          </h1>

          {/* Subheadline */}
          <div className="mb-12">
            <RevealText
              delay={900}
              direction="up"
              className="text-base sm:text-lg font-light text-cream/50 max-w-xl leading-relaxed"
            >
              A movement centered around empowerment, collaboration, and long-term success.
            </RevealText>
          </div>

          {/* Primary CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center gap-6"
          >
            <AnimatedShinyButton onClick={() => handleScroll("#showcase")}>
              Explore the Movement
            </AnimatedShinyButton>
            
            <button 
              onClick={() => handleScroll("#podcast")}
              className="text-[11px] uppercase tracking-[2px] text-cream/40 hover:text-gold transition-colors duration-300"
            >
              Listen to the Podcast
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-8 sm:left-auto flex flex-col items-start sm:items-center gap-3"
        >
          <span className="text-[9px] tracking-[4px] uppercase text-cream/30">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 text-gold/40 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
