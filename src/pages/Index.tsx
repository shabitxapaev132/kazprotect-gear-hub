import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Production } from "@/components/site/Production";
import { Industries } from "@/components/site/Industries";
import { Catalog } from "@/components/site/Catalog";
import { Partners } from "@/components/site/Partners";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Production />
        <Industries />
        <Catalog />
        <Partners />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
