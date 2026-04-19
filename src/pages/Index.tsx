import { useMemo, useState } from "react";
import { Award, Factory, Sparkles, Zap, ShieldCheck, Clock, Mail, Phone, MapPin } from "lucide-react";
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

const advantages = [
  { icon: Factory, title: "Компания полного цикла", text: "Собственная разработка, оборудование и логистика. Никаких посредников — снижение временных и финансовых рисков." },
  { icon: Sparkles, title: "Разнообразие предложений", text: "Готовые решения и индивидуальная разработка моделей любой сложности под корпоративные требования." },
  { icon: Zap, title: "Быстрое принятие решений", text: "Минимизируем сроки согласований благодаря многолетнему профильному опыту." },
  { icon: ShieldCheck, title: "Идеальный результат за оптимальную цену", text: "Инновационный подход к производству позволяет предлагать продукт по честным ценам." },
  { icon: Award, title: "Решение специфических задач", text: "Гибкость собственного конструкторского отдела — точное соответствие параметрам проекта." },
  { icon: Clock, title: "12 лет на рынке", text: "Огромный практический опыт, компетентность и репутация надёжного партнёра." },
];

const partners = [
  { name: "IBENA (Германия)", text: "Высокотехнологичные ткани от электродуги." },
  { name: "Elvex", text: "Мировой лидер в щитках для защиты лица." },
  { name: "Carrington (Великобритания)", text: "Огнестойкие ткани по технологии Proban®." },
  { name: "Concordia Textiles (Бельгия)", text: "Многофункциональные мембранные ткани." },
  { name: "3M & Coats", text: "Мировые лидеры светоотражающих лент." },
  { name: "AITEX", text: "Лабораторное тестирование по евро-стандартам." },
  { name: "Fritsche, Westex, Dale", text: "Поставщики высокопрочных защитных тканей." },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("firefighter");
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = useMemo(
    () => products.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 z-40 w-full bg-primary shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="#" className="text-2xl font-bold tracking-wider text-secondary">
            KAZ<span className="text-primary-foreground">PROTECT</span>
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-primary-foreground md:flex">
            <a href="#about" className="hover:text-secondary">О компании</a>
            <a href="#production" className="hover:text-secondary">Производство</a>
            <a href="#catalog" className="hover:text-secondary">Каталог</a>
            <a href="#partners" className="hover:text-secondary">Партнеры</a>
          </nav>
          <a
            href="#contact"
            className="rounded bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground hover:opacity-90 sm:px-6"
          >
            Заявка
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-primary px-4 pb-20 pt-32 text-center text-primary-foreground">
        <h1 className="mx-auto mt-4 mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
          Комплексные решения <br />в сфере охраны труда
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-lg text-primary-foreground/80">
          Производство специальной и защитной одежды полного цикла в Казахстане. Инновации, 12 лет опыта и соответствие международным стандартам качества.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
        >
          <a href="#catalog">Смотреть каталог</a>
        </Button>
      </section>

      {/* About */}
      <section id="about" className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">ТОО «KAZPROTECT» сегодня</h2>
            <p className="leading-relaxed text-muted-foreground">
              Наша миссия — оперативное и качественное обеспечение клиента одеждой спецназначения и снаряжением. Постоянное улучшение системы менеджмента качества (ISO 9001) способствует нашему динамичному развитию и выходу на мировой рынок.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a) => (
              <Card key={a.title} className="border-border">
                <CardContent className="p-6">
                  <div className="mb-3 inline-flex rounded-lg bg-secondary/15 p-3 text-secondary">
                    <a.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-primary">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production */}
      <section id="production" className="bg-muted/40 py-20">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-primary">Высокие технологии и контроль качества</h2>
            <div className="space-y-5 text-muted-foreground">
              <p><strong className="text-foreground">САПР и Автоматизация:</strong> При проектировании используется система САПР, что гарантирует точное соответствие ГОСТ и ТУ. Раскладки выводятся на «Plotter Technology».</p>
              <p><strong className="text-foreground">Парк оборудования:</strong> Техника мировых брендов — «MAYER», «SIRUBA», «JACR», «TYPICAL». Полный замкнутый цикл от оверлоков до петельных машин.</p>
              <p><strong className="text-foreground">Многоступенчатый ОТК:</strong> Жёсткий контроль на всех этапах — от входного контроля сырья до финальной приёмки.</p>
              <p><strong className="text-foreground">Инновационные материалы:</strong> Срок службы в 2–3 раза превышает аналоги. Усадка &lt;1%, кубовые красители (50+ оттенков).</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Цех", "ОТК", "САПР", "Склад"].map((label) => (
              <div
                key={label}
                className="flex aspect-square items-center justify-center rounded-lg bg-primary/10 font-bold text-primary"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="bg-background py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-3 text-center text-3xl font-bold text-primary">Каталог продукции</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
            Выберите категорию для просмотра моделей и характеристик.
          </p>

          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full border-2 px-4 py-2 text-sm font-bold transition ${
                    isActive
                      ? "border-secondary bg-secondary text-secondary-foreground"
                      : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <Card key={p.title} className="flex flex-col border-border transition hover:shadow-lg">
                <CardContent className="flex flex-1 flex-col p-6">
                  {p.badge && (
                    <Badge className="mb-3 w-fit bg-secondary/20 text-secondary-foreground hover:bg-secondary/20">
                      {p.badge}
                    </Badge>
                  )}
                  <h3 className="mb-3 text-xl font-bold text-primary">{p.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{p.description}</p>
                  {p.gost && (
                    <div className="mb-4 flex items-start gap-2 rounded-md bg-muted p-3 text-xs">
                      <Award className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      <span className="font-medium text-foreground">{p.gost}</span>
                    </div>
                  )}
                  <Button
                    onClick={() => setSelected(p)}
                    className="mt-auto w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="bg-muted/40 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary">Наши партнеры и поставщики</h2>
          <p className="mx-auto mb-12 max-w-3xl text-muted-foreground">
            Мы интегрируем современные технологии, перенимая опыт на выставках (А+А Дюссельдорф, Secure&Safety Франкфурт) и сотрудничая с лидерами отрасли.
          </p>
          <div className="grid grid-cols-2 gap-4 text-left md:grid-cols-4">
            {partners.map((p) => (
              <div key={p.name} className="rounded-lg bg-background p-4 shadow-sm">
                <strong className="text-primary">{p.name}</strong>
                <p className="mt-1 text-xs text-muted-foreground">{p.text}</p>
              </div>
            ))}
            <div className="flex items-center justify-center rounded-lg bg-primary p-4 text-center text-xs text-primary-foreground">
              Сертификация<br />ГОСТ К и ДС РК
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
          <div className="flex items-start gap-3"><Phone className="h-5 w-5 text-secondary" /><div><div className="font-bold">Телефон</div><div className="text-sm text-primary-foreground/80">+7 (XXX) XXX-XX-XX</div></div></div>
          <div className="flex items-start gap-3"><Mail className="h-5 w-5 text-secondary" /><div><div className="font-bold">Email</div><div className="text-sm text-primary-foreground/80">info@kazprotect.kz</div></div></div>
          <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-secondary" /><div><div className="font-bold">Адрес</div><div className="text-sm text-primary-foreground/80">Республика Казахстан</div></div></div>
        </div>
      </section>

      {/* Modal */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                {selected.badge && (
                  <Badge className="mb-2 w-fit bg-secondary/20 text-secondary-foreground hover:bg-secondary/20">
                    {selected.badge}
                  </Badge>
                )}
                <DialogTitle className="text-2xl text-primary">{selected.title}</DialogTitle>
                <DialogDescription>{selected.description}</DialogDescription>
              </DialogHeader>

              <div className="space-y-4 pt-2">
                <div>
                  <h4 className="mb-1 text-sm font-bold uppercase text-secondary">Ткани и материалы</h4>
                  <p className="text-sm text-foreground">{selected.materials}</p>
                </div>

                {selected.gost && (
                  <div className="flex items-start gap-3 rounded-md bg-muted p-3">
                    <Award className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <div>
                      <h4 className="text-sm font-bold uppercase text-secondary">Сертификат / ГОСТ</h4>
                      <p className="text-sm text-foreground">{selected.gost}</p>
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="mb-1 text-sm font-bold uppercase text-secondary">Преимущества</h4>
                  <p className="text-sm text-foreground">{selected.advantages}</p>
                </div>

                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <a href="#contact" onClick={() => setSelected(null)}>Запросить стоимость</a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
