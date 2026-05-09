import { siteContent } from "@/data/siteContent";
import { Heart } from "lucide-react";

export default function Footer() {
  const { brand, footer } = siteContent;

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 sm:py-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
          {/* Brand */}
          <div>
            <p className="font-heading text-xl sm:text-2xl font-light text-gold-light tracking-wide mb-1">
              {brand.name}
            </p>
            <p className="text-[10px] tracking-[3px] uppercase text-cream/20">
              {brand.org}
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleScroll(link.href)}
                className="text-[11px] tracking-[1px] text-cream/30 hover:text-gold transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/5 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-cream/15">
            © {new Date().getFullYear()} {brand.org}. All rights reserved.
          </p>
          <p className="text-[11px] text-cream/15 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-berry/40" /> for the community
          </p>
        </div>
      </div>
    </footer>
  );
}
