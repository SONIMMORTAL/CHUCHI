import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

interface VideoCardProps {
  videoId: string;
  title: string;
  episode: number;
  featured?: boolean;
}

function VideoCard({ videoId, title, episode, featured = false }: VideoCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <>
      <div className={`group relative rounded-xl overflow-hidden ${featured ? "aspect-video" : "aspect-video"}`}>
        <button
          onClick={() => setLightboxOpen(true)}
          className="w-full h-full cursor-pointer block relative overflow-hidden"
        >
          {/* Thumbnail with scale to crop 4:3 black bars */}
          <div className="w-full h-full relative">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover scale-[1.35] transition-transform duration-700 group-hover:scale-[1.40]"
            />
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 group-hover:via-black/30 transition-all duration-500" />

          {/* Play button — glass circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/25 transition-all duration-300 shadow-2xl"
            >
              <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
            </motion.div>
          </div>

          {/* Episode label — bottom left */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
            <div className="flex items-end gap-3">
              <span className="text-[10px] tracking-[3px] uppercase text-berry-light font-medium">
                EP {String(episode).padStart(2, "0")}
              </span>
            </div>
            <p className={`font-heading text-cream mt-1 leading-snug text-left ${featured ? "text-lg sm:text-xl" : "text-sm sm:text-base"}`}>
              {title}
            </p>
          </div>
        </button>
      </div>

      {lightboxOpen && (
        <VideoLightbox
          videoId={videoId}
          title={title}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}

// Lightbox modal for fullscreen viewing
function VideoLightbox({
  videoId,
  title,
  onClose,
}: {
  videoId: string;
  title: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="w-full max-w-5xl aspect-video relative rounded-xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </motion.div>

        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

export { VideoCard, VideoLightbox };
