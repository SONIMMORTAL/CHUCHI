import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { siteContent } from "@/data/siteContent";
import { Sparkles, Star, MapPin } from "lucide-react";
import RevealText from "@/components/ui/RevealText";

export default function ArtistShowcase() {
  const { artistShowcase } = siteContent;

  return (
    <div className="bg-plum">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Section Header */}
        <p className="text-[11px] tracking-[4px] uppercase text-gold mb-4">
          <RevealText triggerOnView delay={0} direction="up">{artistShowcase.label}</RevealText>
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-cream leading-tight mb-2">
          <RevealText triggerOnView delay={100} direction="up">Where Emerging</RevealText>
        </h2>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-10">
          <RevealText triggerOnView delay={200} direction="up" className="italic text-gradient-gold">Artists Rise</RevealText>
        </h2>

        {/* Two-Column Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="text-sm sm:text-base text-muted-brand leading-relaxed mb-4">
              {artistShowcase.intro[0]}
            </p>
            <p className="text-sm sm:text-base text-muted-brand leading-relaxed">
              From intimate sets to full-production showcases, each event is designed
              with one goal: to make sure no talented artist goes unseen.
            </p>
          </div>
          <div>
            <p className="text-sm sm:text-base text-muted-brand leading-relaxed mb-4">
              <strong className="text-cream font-medium">
                {artistShowcase.intro[1].split(".")[0]}.
              </strong>{" "}
              {artistShowcase.intro[1].split(".").slice(1).join(".")}
            </p>
            <p className="text-sm sm:text-base text-muted-brand leading-relaxed">
              Our growing community of independent and emerging artists spans
              multiple genres, neighborhoods, and backgrounds — united by the
              desire to elevate their craft and their impact.
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-px bg-[#2A2050] rounded-lg overflow-hidden mt-14 border border-[#2A2050]">
          {artistShowcase.stats.map((stat, i) => {
            const icons = [Sparkles, Star, MapPin];
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="bg-plum-mid py-6 sm:py-8 px-4 text-center group hover:bg-gold/[0.05] transition-colors"
              >
                <Icon className="w-5 h-5 text-gold/40 mx-auto mb-3 group-hover:text-gold transition-colors" />
                <div className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-cream leading-none mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-[11px] tracking-[2px] uppercase text-muted-brand">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <Separator className="my-14 bg-gold/15" />

        {/* Services Grid */}
        <p className="text-[11px] tracking-[4px] uppercase text-gold mb-8">
          What We Offer
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {artistShowcase.services.map((service, i) => (
            <Card
              key={i}
              className="border-t-[3px] border-t-gold border-[#2A2050] bg-plum-mid rounded-xl hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 group"
            >
              <CardHeader className="pb-2">
                <CardTitle className="font-heading text-lg sm:text-xl font-semibold text-cream group-hover:text-gold transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-brand leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Showcase Image */}
        <div className="mt-14 rounded-xl overflow-hidden relative h-56 sm:h-72 lg:h-80">
          <img
            src="/images/ARTISTSHOWCASE.png"
            alt="Artist Showcase — Live Performance in NYC"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-plum/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 z-10">
            <p className="font-heading text-2xl sm:text-3xl text-cream mb-1">
              Artist Showcase
            </p>
            <p className="text-[11px] tracking-[3px] uppercase text-cream/50">
              Live Performance · NYC
            </p>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-plum-mid py-16 sm:py-20 text-center border-t border-[#2A2050]">
        <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-light text-cream mb-4">
          Ready to be part of the movement?
        </h3>
        <p className="text-sm text-cream/40 mb-8">
          Call or connect with Chu-Chi Saunders directly
        </p>
        <a
          href={siteContent.brand.phoneHref}
          className="inline-block px-8 sm:px-10 py-3.5 border border-gold text-gold-light text-[11px] sm:text-[12px] tracking-[3px] uppercase rounded-sm hover:bg-gold hover:text-plum transition-all duration-300"
        >
          {siteContent.brand.phone} — Let's Talk
        </a>
      </div>
    </div>
  );
}
