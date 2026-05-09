import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedShinyButton({
  children,
  className,
  onClick
}: AnimatedShinyButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "group relative flex items-center justify-center gap-2 overflow-hidden rounded-full border border-gold/30 bg-plum/50 px-8 py-3 backdrop-blur-md transition-all hover:bg-plum/80 hover:shadow-[0_0_20px_rgba(201,150,58,0.2)]",
        className
      )}
    >
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
        <div className="relative h-full w-8 bg-white/20" />
      </div>
      <span className="relative text-[11px] font-medium uppercase tracking-[3px] text-cream">
        {children}
      </span>
    </motion.button>
  );
}
