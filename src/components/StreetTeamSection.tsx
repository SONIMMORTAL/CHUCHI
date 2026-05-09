import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteContent } from "@/data/siteContent";
import { Users, Megaphone, Globe, Building2 } from "lucide-react";

export default function StreetTeamSection() {
  const { streetTeam } = siteContent;
  const serviceIcons = [Users, Globe, Building2, Megaphone];

  return (
    <div className="bg-plum">
      {/* Hero Banner */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(145deg, #0A0A14 0%, #1A1040 50%, #2A1060 100%)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
          <p className="text-[11px] tracking-[4px] uppercase text-berry/70 mb-4">{streetTeam.label}</p>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-light text-cream leading-tight mb-2">The Bridge Between</h2>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-light leading-tight mb-8">
            <span className="italic text-gradient-neon">Events & Community</span>
          </h2>
          <p className="text-sm sm:text-base text-cream/50 leading-relaxed max-w-2xl mb-8">{streetTeam.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {streetTeam.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-berry/30 text-berry-light text-[11px] px-4 py-1.5 rounded-full font-normal tracking-wider">{tag}</Badge>
            ))}
          </div>
        </div>

        {/* Decorative text */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rotate-90 font-heading text-6xl sm:text-8xl font-light text-gold/[0.03] tracking-[8px] pointer-events-none select-none whitespace-nowrap">STREET TEAM</div>
        <div className="deco-circle w-[400px] h-[400px] -bottom-32 -left-32 opacity-20" />
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <p className="text-[11px] tracking-[4px] uppercase text-berry mb-8">What the Street Team Does</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {streetTeam.services.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <Card key={i} className="border-t-[3px] border-t-berry border-[#2A2050] bg-plum-mid rounded-xl hover:shadow-lg hover:shadow-berry/5 transition-all duration-300 group">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-lg bg-berry/10 text-berry flex items-center justify-center mb-3 group-hover:bg-berry/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="font-heading text-lg sm:text-xl font-semibold text-cream">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-brand leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-plum-mid py-16 sm:py-20 text-center border-t border-[#2A2050]">
        <h3 className="font-heading text-2xl sm:text-4xl font-light text-cream mb-4">Join the <span className="italic text-berry-light">Street Team</span></h3>
        <p className="text-sm text-cream/40 mb-8">Be part of the grassroots force that connects events to communities</p>
        <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }} className="inline-block px-10 py-3.5 border border-berry text-berry-light text-[12px] tracking-[3px] uppercase rounded-sm hover:bg-berry hover:text-white transition-all duration-300">
          Get Involved
        </a>
      </div>
    </div>
  );
}
