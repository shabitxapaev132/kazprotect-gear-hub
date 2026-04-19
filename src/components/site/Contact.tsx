import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Заявка отправлена",
        description: "Мы свяжемся с вами в течение рабочего дня.",
      });
    }, 600);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-hero py-20 text-primary-foreground md:py-28">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="container relative mx-auto grid grid-cols-1 gap-12 px-4 lg:grid-cols-2">
        <div>
          <div className="mb-3 inline-block rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold">
            Контакты
          </div>
          <h2 className="mb-5 text-3xl font-extrabold md:text-5xl">
            Запросите <span className="text-gradient-gold">коммерческое предложение</span>
          </h2>
          <p className="mb-10 text-primary-foreground/80">
            Расскажите о задаче — наш конструкторский отдел подготовит решение
            под ваши требования. Быстрые согласования, точные сроки.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-gold/15 text-brand-gold">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/60">Адрес</div>
                <div className="font-semibold">Астана, Республика Казахстан</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-gold/15 text-brand-gold">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/60">Телефон</div>
                <a href="tel:+77000000000" className="font-semibold hover:text-brand-gold">+7 (700) 000-00-00</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-gold/15 text-brand-gold">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/60">Email</div>
                <a href="mailto:info@kazprotect.kz" className="font-semibold hover:text-brand-gold">info@kazprotect.kz</a>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 shadow-elegant backdrop-blur-md md:p-8"
        >
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-primary-foreground/90">Имя</label>
              <Input
                required
                name="name"
                placeholder="Иван Иванов"
                className="border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-brand-gold"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-primary-foreground/90">Компания</label>
                <Input
                  name="company"
                  placeholder="ТОО «Компания»"
                  className="border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-brand-gold"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-primary-foreground/90">Телефон</label>
                <Input
                  required
                  name="phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-brand-gold"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-primary-foreground/90">Email</label>
              <Input
                required
                name="email"
                type="email"
                placeholder="info@example.kz"
                className="border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-brand-gold"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-primary-foreground/90">Задача</label>
              <Textarea
                name="message"
                rows={4}
                placeholder="Опишите задачу, отрасль, требуемые объёмы…"
                className="border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-brand-gold"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full bg-gradient-gold text-brand-navy-deep shadow-gold transition-spring hover:scale-[1.01] hover:opacity-95"
            >
              {loading ? "Отправляем…" : "Отправить заявку"}
              {!loading && <ArrowRight className="ml-1 h-4 w-4" />}
            </Button>
            <p className="text-center text-xs text-primary-foreground/50">
              Отправляя форму, вы соглашаетесь на обработку персональных данных.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
