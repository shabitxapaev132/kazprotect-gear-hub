import { useMemo, useState } from "react";
import { Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { categories, products, type Category, type Product } from "@/data/catalog";

export const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("firefighter");
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = useMemo(
    () => products.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="catalog" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 inline-block rounded-full bg-brand-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold">
            Каталог
          </div>
          <h2 className="mb-5 text-3xl font-extrabold text-brand-navy md:text-5xl">
            Сертифицированная <span className="text-gradient-gold">продукция</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Готовые решения и индивидуальная разработка по требованиям заказчика.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-smooth ${
                  isActive
                    ? "bg-gradient-gold text-brand-navy-deep shadow-gold"
                    : "border border-brand-navy/15 bg-card text-brand-navy hover:border-brand-gold hover:text-brand-gold"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div key={activeCategory} className="grid animate-fade-up grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Card
              key={p.title}
              className="group flex flex-col overflow-hidden border-border bg-gradient-card transition-spring hover:-translate-y-1 hover:shadow-hover"
            >
              <div className="h-1 bg-gradient-gold" />
              <CardContent className="flex flex-1 flex-col p-7">
                {p.badge && (
                  <Badge className="mb-3 w-fit border border-brand-gold/30 bg-brand-gold/10 font-semibold text-brand-gold hover:bg-brand-gold/15">
                    {p.badge}
                  </Badge>
                )}
                <h3 className="mb-3 text-xl font-bold leading-tight text-brand-navy">
                  {p.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                {p.gost && (
                  <div className="mb-5 flex items-start gap-2.5 rounded-lg border border-border bg-muted/60 p-3">
                    <Award className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                        Сертификат
                      </div>
                      <div className="text-xs font-medium text-foreground">{p.gost}</div>
                    </div>
                  </div>
                )}
                <Button
                  onClick={() => setSelected(p)}
                  className="mt-auto w-full bg-brand-navy text-primary-foreground transition-smooth hover:bg-brand-navy-deep group-hover:bg-gradient-gold group-hover:text-brand-navy-deep"
                >
                  Подробнее <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
          {selected && (
            <>
              <DialogHeader className="text-left">
                {selected.badge && (
                  <Badge className="mb-2 w-fit border border-brand-gold/30 bg-brand-gold/10 font-semibold text-brand-gold hover:bg-brand-gold/15">
                    {selected.badge}
                  </Badge>
                )}
                <DialogTitle className="text-2xl font-extrabold text-brand-navy md:text-3xl">
                  {selected.title}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-5 pt-3">
                <div className="rounded-lg border border-border bg-muted/40 p-4">
                  <div className="mb-1 text-xs font-bold uppercase tracking-wider text-brand-gold">
                    Ткани и материалы
                  </div>
                  <p className="text-sm text-foreground">{selected.materials}</p>
                </div>

                {selected.gost && (
                  <div className="flex items-start gap-3 rounded-lg border border-brand-gold/30 bg-brand-gold/5 p-4">
                    <Award className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                        Сертификация / ГОСТ
                      </div>
                      <p className="mt-1 text-sm font-medium text-foreground">{selected.gost}</p>
                    </div>
                  </div>
                )}

                <div className="rounded-lg border border-border bg-muted/40 p-4">
                  <div className="mb-1 text-xs font-bold uppercase tracking-wider text-brand-gold">
                    Преимущества
                  </div>
                  <p className="text-sm text-foreground">{selected.advantages}</p>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-gradient-gold text-brand-navy-deep shadow-gold hover:opacity-95"
                >
                  <a href="#contact" onClick={() => setSelected(null)}>
                    Запросить стоимость
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
