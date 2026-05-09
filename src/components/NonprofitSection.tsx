import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteContent } from "@/data/siteContent";
import { Heart, HandHeart, Gift, Handshake } from "lucide-react";
import RevealText from "@/components/ui/RevealText";

export default function NonprofitSection() {
  const { nonprofit, brand } = siteContent;
  const involvedIcons = [HandHeart, Gift, Handshake];

  return (
    <div className="bg-plum">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <p className="text-[11px] tracking-[4px] uppercase text-sage mb-4">
          <RevealText triggerOnView delay={0} direction="up">{nonprofit.label}</RevealText>
        </p>
        <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-light text-cream leading-tight mb-2">
          <RevealText triggerOnView delay={100} direction="up">Art That</RevealText>
        </h2>
        <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-light leading-tight mb-10">
          <RevealText triggerOnView delay={200} direction="up" className="italic text-sage">Feeds the World</RevealText>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="text-sm sm:text-base text-muted-brand leading-relaxed mb-6">{nonprofit.description}</p>
            <p className="text-sm sm:text-base text-muted-brand leading-relaxed mb-8">Founded by Chu-Chi Saunders, the nonprofit operates at the intersection of creative empowerment and direct community care. We believe that art and humanity are inseparable.</p>
            <blockquote className="font-heading text-xl sm:text-2xl font-light italic text-cream leading-snug border-l-[3px] border-sage pl-6 py-2">"{nonprofit.quote}"</blockquote>
          </div>

          <div className="bg-plum-mid rounded-xl p-6 sm:p-8 lg:p-10 border border-[#2A2050]">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-5 h-5 text-sage-light" />
              <h3 className="font-heading text-xl sm:text-2xl font-light text-cream">Our Mission in Action</h3>
            </div>
            <div className="space-y-5">
              {nonprofit.impactItems.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-2 h-2 bg-sage rounded-full flex-shrink-0 mt-2" />
                  <p className="text-sm text-cream/60 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founder Letter */}
        <div className="mt-14 bg-plum-mid border border-[#2A2050] rounded-xl p-8 sm:p-12 relative overflow-hidden">
          <span className="absolute -top-4 left-6 font-heading text-[120px] text-[#2A2050]/60 leading-none pointer-events-none select-none">"</span>
          <div className="relative z-10">
            {nonprofit.founderLetter.map((p, i) => (
              <p key={i} className="text-sm sm:text-base text-cream/60 leading-relaxed mb-5 last:mb-0">{p}</p>
            ))}
            <div className="mt-8 font-heading text-xl italic text-cream">— Chu-Chi Saunders, Founder</div>
          </div>
        </div>

        {/* Community Event Image */}
        <div className="mt-14 rounded-xl overflow-hidden relative h-52 sm:h-72">
          <img
            src="/images/community-event.png"
            alt="Community event with diverse crowd enjoying live music"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-plum/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 z-10">
            <p className="font-heading text-xl sm:text-2xl text-cream">
              Community in Action
            </p>
            <p className="text-[11px] tracking-[2px] uppercase text-cream/50">
              Where music meets service
            </p>
          </div>
        </div>

        {/* Get Involved */}
        <p className="text-[11px] tracking-[4px] uppercase text-sage mb-8 mt-14">Get Involved</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {nonprofit.getInvolved.map((item, i) => {
            const Icon = involvedIcons[i];
            const isDonate = item.title === "Donate";
            const cardContent = (
              <Card key={i} className={`border-t-[3px] border-t-sage border-[#2A2050] bg-plum-mid rounded-xl hover:shadow-lg hover:shadow-sage/5 transition-all duration-300 group ${isDonate ? "cursor-pointer" : ""}`}>
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-lg bg-sage/10 text-sage flex items-center justify-center mb-3 group-hover:bg-sage/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="font-heading text-lg sm:text-xl font-semibold text-cream">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-brand leading-relaxed">{item.description}</p>
                  {isDonate && (
                    <p className="mt-3 text-[11px] tracking-[2px] uppercase text-sage font-medium">
                      Cash App: $chuchivoice1
                    </p>
                  )}
                </CardContent>
              </Card>
            );

            return isDonate ? (
              <a key={i} href="https://cash.app/$chuchivoice1" target="_blank" rel="noopener noreferrer" className="no-underline">
                {cardContent}
              </a>
            ) : (
              <div key={i}>{cardContent}</div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-plum-mid py-16 sm:py-20 text-center border-t border-[#2A2050]">
        <h3 className="font-heading text-2xl sm:text-4xl font-light text-cream mb-4">Be part of something that <span className="italic text-sage-light">matters</span></h3>
        <p className="text-sm text-cream/40 mb-8">Reach out and join the Chuchismilkshake Events family</p>
        <a href={brand.phoneHref} className="inline-block px-10 py-3.5 border border-sage text-sage-light text-[12px] tracking-[3px] uppercase rounded-sm hover:bg-sage hover:text-white transition-all duration-300">Connect Today — {brand.phone}</a>
      </div>
    </div>
  );
}
