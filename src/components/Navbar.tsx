import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteContent } from "@/data/siteContent";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Showcase", href: "#showcase" },
  { label: "Podcast", href: "#podcast" },
  { label: "Nonprofit", href: "#nonprofit" },
  { label: "Street Team", href: "#street-team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-dark shadow-lg shadow-black/40 border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex flex-col cursor-pointer"
          >
            <span className="font-heading text-2xl sm:text-3xl font-light text-cream tracking-wide">
              Chu-Chi
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[4px] uppercase text-gold/70 -mt-1">
              Saunders
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-[13px] font-normal tracking-[2.5px] uppercase text-cream/60 hover:text-gold transition-all duration-300 cursor-pointer hover:drop-shadow-[0_0_6px_rgba(201,150,58,0.3)]"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={siteContent.brand.phoneHref}
              className="flex items-center gap-2 text-[13px] text-gold/80 hover:text-gold transition-colors font-light"
            >
              <Phone className="w-4 h-4" />
              {siteContent.brand.phone}
            </a>
            <Button
              onClick={() => handleNavClick("#contact")}
              className="bg-gold hover:bg-gold-light text-plum text-[12px] tracking-[2px] uppercase font-medium px-7 h-10 rounded-full cursor-pointer hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
            >
              Connect
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden text-cream/70 hover:text-gold transition-colors cursor-pointer p-2">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-plum border-l border-gold/10 p-0"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-gold/10">
                  <span className="font-heading text-2xl font-light text-cream">
                    Chu-Chi
                  </span>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-cream/50 hover:text-gold transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="flex flex-col py-4">
                  {navLinks.map((link, i) => (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="px-6 py-4 text-left text-[13px] tracking-[2px] uppercase text-cream/50 hover:text-gold hover:bg-gold/5 transition-all cursor-pointer"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>

                {/* Mobile Footer */}
                <div className="mt-auto p-6 border-t border-gold/10">
                  <a
                    href={siteContent.brand.phoneHref}
                    className="flex items-center gap-3 text-gold/70 hover:text-gold transition-colors mb-4"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{siteContent.brand.phone}</span>
                  </a>
                  <Button
                    onClick={() => handleNavClick("#contact")}
                    className="w-full bg-gold hover:bg-gold-light text-plum text-[11px] tracking-[2px] uppercase font-medium h-10 rounded-full cursor-pointer"
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
