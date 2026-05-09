import { Badge } from "@/components/ui/badge";
import { siteContent } from "@/data/siteContent";
import { Play } from "lucide-react";
import RevealText from "@/components/ui/RevealText";
import { VideoCard } from "@/components/ui/VideoCard";

const EPISODES = [
  { id: "-VMl5cg1P2Y", title: "On The Spot Withchu host Chu-Chi" },
  { id: "xxOXUYYe6QE", title: "On The Spot — The Culture Talk" },
  { id: "dLWya0TOtkA", title: "On The Spot — Real Conversations" },
  { id: "TTr_7vMlSkw", title: "On The Spot — Community Voices" },
  { id: "_ow3VCaSaOo", title: "On The Spot — Behind the Scenes" },
  { id: "Xz67dQs8aNY", title: "On The Spot — The Movement" },
];

export default function PodcastSection() {
  const { podcast } = siteContent;

  return (
    <div className="bg-plum">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Section Header */}
        <p className="text-[11px] tracking-[4px] uppercase text-berry mb-4">
          <RevealText triggerOnView delay={0} direction="up">{podcast.label}</RevealText>
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-cream leading-tight mb-2">
          <RevealText triggerOnView delay={100} direction="up">On The Spot</RevealText>
        </h2>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-cream leading-tight mb-10">
          <RevealText triggerOnView delay={200} direction="up" className="italic text-berry-light">with Chu</RevealText>
        </h2>

        {/* Podcast Intro Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
          <div>
            <p className="text-sm sm:text-base text-muted-brand leading-relaxed mb-4">
              {podcast.description}
            </p>
            <p className="text-sm sm:text-base text-muted-brand leading-relaxed">
              Expect sit-downs with emerging artists, community leaders, music
              industry insiders, and everyday people doing extraordinary things.
            </p>
          </div>
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {podcast.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-[#2A2050] text-muted-brand text-[11px] px-3 py-1 rounded-full font-normal"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <a
              href="https://www.youtube.com/@chuchivoice1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-berry hover:bg-berry-light text-white text-[11px] sm:text-[12px] tracking-[2px] uppercase font-medium px-8 h-11 rounded-sm transition-all hover:shadow-lg hover:shadow-berry/20"
            >
              <Play className="w-4 h-4" />
              Watch on YouTube
            </a>
          </div>
        </div>

        {/* Featured Episode */}
        <div className="mb-8">
          <p className="text-[11px] tracking-[4px] uppercase text-berry mb-5">Featured Episode</p>
          <VideoCard
            videoId={EPISODES[0].id}
            title={EPISODES[0].title}
            episode={1}
            featured
          />
        </div>

        {/* Episode Grid — Bento-style: 2 large + 3 small */}
        <p className="text-[11px] tracking-[4px] uppercase text-berry mb-5">More Episodes</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* First two are slightly taller on desktop */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <VideoCard videoId={EPISODES[1].id} title={EPISODES[1].title} episode={2} />
            <VideoCard videoId={EPISODES[2].id} title={EPISODES[2].title} episode={3} />
          </div>
          <div>
            <VideoCard videoId={EPISODES[3].id} title={EPISODES[3].title} episode={4} />
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <VideoCard videoId={EPISODES[4].id} title={EPISODES[4].title} episode={5} />
            <VideoCard videoId={EPISODES[5].id} title={EPISODES[5].title} episode={6} />
          </div>
        </div>

        {/* Podcast Studio Image */}
        <div className="mt-14 rounded-xl overflow-hidden relative h-48 sm:h-64">
          <img
            src="/images/PODCAST.png"
            alt="On The Spot with Chu — Podcast studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-plum/80 via-plum/30 to-transparent" />
          <div className="absolute bottom-6 left-6 z-10">
            <p className="font-heading text-xl sm:text-2xl text-cream/90">
              The Studio
            </p>
            <p className="text-[11px] tracking-[3px] uppercase text-cream/40">
              Where conversations come alive
            </p>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-plum-mid py-16 sm:py-20 text-center border-t border-[#2A2050]">
        <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-light text-cream mb-4">
          Don't miss a <span className="italic text-berry-light">single episode</span>
        </h3>
        <p className="text-sm text-cream/40 mb-8">
          Follow Chu-Chi Saunders on all platforms for new episodes
        </p>
        <a
          href="https://www.youtube.com/@chuchivoice1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 sm:px-10 py-3.5 border border-berry text-berry-light text-[11px] sm:text-[12px] tracking-[3px] uppercase rounded-sm hover:bg-berry hover:text-white transition-all duration-300"
        >
          Follow & Subscribe
        </a>
      </div>
    </div>
  );
}
