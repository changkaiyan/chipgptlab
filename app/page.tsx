import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Cpu,
  Factory,
  FlaskConical,
  Gauge,
  Layers3,
  LineChart,
  Linkedin,
  LockKeyhole,
  Mail,
  MapPin,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { getHomeContent } from "@/lib/home-content";

const iconMap = {
  BrainCircuit,
  Cpu,
  Factory,
  Gauge,
  LineChart,
  LockKeyhole,
  Network,
} as const;

function getIcon(name: string) {
  return iconMap[name as keyof typeof iconMap] ?? Cpu;
}

export default function Home() {
  const content = getHomeContent();

  return (
    <main className="min-h-screen overflow-hidden">
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/60 bg-[#f7f8f6]/86 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-3" aria-label={`${content.site.brand} home`}>
            <span className="grid h-9 w-9 place-items-center rounded-md bg-ink text-white shadow-panel">
              <Cpu size={19} strokeWidth={2.2} />
            </span>
            <span className="text-base font-semibold tracking-normal text-ink">{content.site.brand}</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-graphite md:flex">
            {content.navigation.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={`mailto:${content.site.email}`}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-ink px-4 text-sm font-semibold text-white transition hover:bg-graphite"
          >
            {content.contact.cta.label}
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <section className="relative min-h-[92vh] pt-16">
        <Image
          src={content.hero.image}
          alt={content.hero.imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,248,246,0.96)_0%,rgba(247,248,246,0.82)_38%,rgba(247,248,246,0.18)_74%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f7f8f6] to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(92vh-4rem)] max-w-7xl items-center px-5 py-20 sm:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-ink/10 bg-white/70 px-3 py-2 text-sm font-medium text-graphite shadow-sm backdrop-blur">
              <Sparkles size={16} className="text-circuit" />
              {content.hero.eyebrow}
            </div>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-normal text-ink sm:text-6xl lg:text-7xl">
              {content.hero.heading}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite sm:text-xl">
              {content.hero.subheading}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={content.hero.primaryCta.href}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-ink px-6 text-base font-semibold text-white transition hover:bg-graphite"
              >
                {content.hero.primaryCta.label}
                <ArrowRight size={18} />
              </a>
              <a
                href={content.hero.secondaryCta.href}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-ink/15 bg-white/75 px-6 text-base font-semibold text-ink backdrop-blur transition hover:border-ink/30"
              >
                {content.hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="relative z-10 -mt-8 px-5 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 overflow-hidden rounded-lg border border-ink/10 bg-white shadow-panel md:grid-cols-4">
          {content.metrics.map((metric) => (
            <div key={metric.label} className="border-b border-r border-ink/10 p-6 last:border-r-0 md:border-b-0">
              <div className="text-3xl font-semibold text-ink">{metric.value}</div>
              <div className="mt-2 text-sm text-graphite">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="capabilities" className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-circuit">
                {content.capabilitiesIntro.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
                {content.capabilitiesIntro.heading}
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-graphite">
              {content.capabilitiesIntro.text}
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {content.capabilities.map((capability) => {
              const Icon = getIcon(capability.icon);
              return (
                <article key={capability.title} className="rounded-lg border border-ink/10 bg-white p-7 shadow-sm">
                  <div className="grid h-11 w-11 place-items-center rounded-md bg-mist text-ink">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-ink">{capability.title}</h3>
                  <p className="mt-3 leading-7 text-graphite">{capability.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="lab" className="bg-ink px-5 py-24 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-white/10">
              <FlaskConical size={24} />
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-normal sm:text-5xl">{content.lab.heading}</h2>
            <p className="mt-5 text-lg leading-8 text-white/72">{content.lab.text}</p>
          </div>
          <div className="grid gap-4">
            {content.workflow.map((item) => (
              <div key={item.step} className="grid gap-5 rounded-lg border border-white/12 bg-white/[0.06] p-6 sm:grid-cols-[72px_1fr]">
                <div className="text-2xl font-semibold text-circuit">{item.step}</div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 leading-7 text-white/70">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
                {content.useCasesIntro.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
                {content.useCasesIntro.heading}
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-graphite">
              <BadgeCheck size={18} className="text-circuit" />
              {content.useCasesIntro.badge}
            </div>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {content.useCases.map((useCase) => {
              const Icon = getIcon(useCase.icon);
              return (
                <article key={useCase.title} className="rounded-lg border border-ink/10 bg-white p-6">
                  <Icon size={23} className="text-circuit" />
                  <h3 className="mt-5 text-lg font-semibold text-ink">{useCase.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-graphite">{useCase.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-ink/10 bg-white shadow-panel">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-mist p-8 md:p-12">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-graphite">
              <Layers3 size={18} className="text-copper" />
              {content.contact.eyebrow}
              </div>
              <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-normal text-ink">
                {content.contact.heading}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-graphite">{content.contact.text}</p>
              <a
                href={content.contact.cta.href}
                className="mt-8 inline-flex h-12 w-fit items-center justify-center gap-2 rounded-md bg-ink px-6 text-base font-semibold text-white transition hover:bg-graphite"
              >
                {content.contact.cta.label}
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="p-4 md:p-6">
              <div className="grid gap-2">
                {content.contact.options.map((option, index) => (
                  <div
                    key={option.title}
                    className="grid gap-4 rounded-md border border-transparent p-4 transition hover:border-ink/10 hover:bg-mist/70 sm:grid-cols-[48px_1fr]"
                  >
                    <div className="grid h-11 w-11 place-items-center rounded-md bg-ink text-sm font-semibold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink">{option.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-graphite">{option.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-md border border-circuit/20 bg-circuit/10 p-4 text-sm leading-6 text-graphite">
                请在邮件主题中注明合作方向，我们会按投资、业务、学术或招聘线索分流回复。
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/70 bg-ink px-5 py-14 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr]">
            <div>
              <a href="#" className="inline-flex items-center gap-3" aria-label={`${content.site.brand} home`}>
                <span className="grid h-10 w-10 place-items-center rounded-md bg-white text-ink">
                  <Cpu size={20} strokeWidth={2.2} />
                </span>
                <span className="text-lg font-semibold">{content.site.brand}</span>
              </a>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/68">{content.footer.tagline}</p>
              <div className="mt-7 grid gap-3 text-sm text-white/72 sm:grid-cols-2">
                <a href={`mailto:${content.site.email}`} className="inline-flex items-center gap-2 transition hover:text-white">
                  <Mail size={16} />
                  {content.site.email}
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} />
                  {content.site.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck size={16} />
                  {content.footer.trust}
                </span>
                <a href={content.site.linkedin} className="inline-flex items-center gap-2 transition hover:text-white">
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {content.footer.columns.map((column) => (
                <div key={column.title}>
                  <h3 className="text-sm font-semibold text-white">{column.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm text-white/62">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="transition hover:text-white">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/12 pt-6 text-xs text-white/48 sm:flex-row sm:items-center sm:justify-between">
            <p>{content.footer.copyright}</p>
            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${content.site.email}`} className="transition hover:text-white">Security contact</a>
              <a href="#contact" className="transition hover:text-white">Partnerships</a>
              <a href="#" className="transition hover:text-white">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
