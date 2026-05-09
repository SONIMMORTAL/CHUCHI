import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { siteContent } from "@/data/siteContent";
import { Send, CheckCircle, Phone } from "lucide-react";

export default function ContactSection() {
  const { contact, brand } = siteContent;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="relative bg-plum py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div>
            <p className="text-[11px] tracking-[4px] uppercase text-gold mb-4">{contact.label}</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-cream leading-tight mb-6">{contact.title}</h2>
            <p className="text-sm sm:text-base text-muted-brand leading-relaxed mb-10">{contact.description}</p>

            <div className="space-y-4">
              <a href={brand.phoneHref} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] tracking-[2px] uppercase text-muted-brand">Phone</p>
                  <p className="text-sm font-medium text-cream">{brand.phone}</p>
                </div>
              </a>
              <a href="https://www.instagram.com/on_the_spot_withchu/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-berry/10 text-berry flex items-center justify-center group-hover:bg-berry/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </div>
                <div>
                  <p className="text-[11px] tracking-[2px] uppercase text-muted-brand">Follow</p>
                  <p className="text-sm font-medium text-cream">@on_the_spot_withchu</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-plum-mid border border-[#2A2050] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-sage mb-4" />
                <h3 className="font-heading text-2xl text-cream mb-2">Message Sent!</h3>
                <p className="text-sm text-muted-brand">Chu-Chi will be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-[11px] tracking-[2px] uppercase text-muted-brand mb-2 block">Name</Label>
                  <Input id="name" placeholder="Your full name" required className="bg-plum/50 border-[#2A2050] text-cream placeholder:text-cream/30 focus:border-gold focus:ring-gold/20 h-11 rounded-lg" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="email" className="text-[11px] tracking-[2px] uppercase text-muted-brand mb-2 block">Email</Label>
                    <Input id="email" type="email" placeholder="you@email.com" required className="bg-plum/50 border-[#2A2050] text-cream placeholder:text-cream/30 focus:border-gold focus:ring-gold/20 h-11 rounded-lg" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-[11px] tracking-[2px] uppercase text-muted-brand mb-2 block">Phone</Label>
                    <Input id="phone" type="tel" placeholder="(000) 000-0000" className="bg-plum/50 border-[#2A2050] text-cream placeholder:text-cream/30 focus:border-gold focus:ring-gold/20 h-11 rounded-lg" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="interest" className="text-[11px] tracking-[2px] uppercase text-muted-brand mb-2 block">I'm Interested In</Label>
                  <Select required>
                    <SelectTrigger className="w-full bg-plum/50 border-[#2A2050] text-cream focus:border-gold focus:ring-gold/20 h-11 rounded-lg">
                      <SelectValue placeholder="Select an option..." />
                    </SelectTrigger>
                    <SelectContent className="bg-plum-mid border-[#2A2050]">
                      {contact.interests.map((interest) => (
                        <SelectItem key={interest} value={interest.toLowerCase().replace(/\s+/g, "-")} className="cursor-pointer text-cream hover:bg-gold/10 focus:bg-gold/10 focus:text-cream">
                          {interest}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-[11px] tracking-[2px] uppercase text-muted-brand mb-2 block">Message</Label>
                  <Textarea id="message" placeholder="Tell us about yourself and what you're looking for..." rows={4} required className="bg-plum/50 border-[#2A2050] text-cream placeholder:text-cream/30 focus:border-gold focus:ring-gold/20 rounded-lg resize-none" />
                </div>

                <Button type="submit" disabled={loading} className="w-full bg-gold hover:bg-gold-light text-plum text-[12px] tracking-[2px] uppercase font-medium h-12 rounded-lg transition-all hover:shadow-lg hover:shadow-gold/20 cursor-pointer disabled:opacity-50">
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-plum/30 border-t-plum rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
