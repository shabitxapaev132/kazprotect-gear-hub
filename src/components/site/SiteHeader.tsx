import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { href: "#about", label: "О компании" },
  { href: "#production", label: "Производство" },
  { href: "#catalog", label: "Каталог" },
  { href: "#industries", label: "Отрасли" },
  { href: "#partners", label: "Партнёры" },
  { href: "#contact", label: "Контакты" },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-smooth ${
        scrolled
          ? "bg-brand-navy-deep/95 backdrop-blur-md shadow-elegant"
          : "bg-brand-navy-deep/70 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-wider">
          <span className="text-brand-gold">KAZ</span>
          <span className="text-primary-foreground">PROTECT</span>
        </Link>

        <nav className="hidden gap-8 text-sm font-medium text-primary-foreground/85 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-smooth hover:text-brand-gold">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden bg-gradient-gold text-brand-navy-deep shadow-gold hover:opacity-90 sm:inline-flex"
          >
            <a href="#contact">Оставить заявку</a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-brand-gold">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 border-l-brand-gold/30 bg-brand-navy-deep text-primary-foreground">
              <div className="mt-8 flex flex-col gap-4">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-primary-foreground/10 py-3 text-lg font-medium transition-smooth hover:text-brand-gold"
                  >
                    {l.label}
                  </a>
                ))}
                <Button
                  asChild
                  className="mt-4 bg-gradient-gold text-brand-navy-deep shadow-gold"
                  onClick={() => setOpen(false)}
                >
                  <a href="#contact">Оставить заявку</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
