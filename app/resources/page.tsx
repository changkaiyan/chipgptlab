import { ArrowLeft, Cpu, ExternalLink } from "lucide-react";
import { getHomeContent } from "@/lib/home-content";
import { getResourcesContent } from "@/lib/resources-content";

export default function ResourcesPage() {
  const home = getHomeContent();
  const content = getResourcesContent();

  return (
    <main className="min-h-screen bg-[#f7f8f6] text-ink">
      <header className="border-b border-ink/10 bg-[#f7f8f6]/86 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="../" className="flex items-center gap-3" aria-label={`${home.site.brand} home`}>
            <span className="grid h-9 w-9 place-items-center rounded-md bg-ink text-white shadow-panel">
              <Cpu size={19} strokeWidth={2.2} />
            </span>
            <span className="text-base font-semibold tracking-normal text-ink">{home.site.brand}</span>
          </a>
          <a
            href="../"
            className="inline-flex h-10 items-center gap-2 rounded-md border border-ink/15 bg-white px-4 text-sm font-semibold text-ink transition hover:border-ink/30"
          >
            <ArrowLeft size={16} />
            返回首页
          </a>
        </div>
      </header>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-circuit">
            {content.page.eyebrow}
          </p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <h1 className="text-5xl font-semibold tracking-normal text-ink sm:text-6xl">
              {content.page.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-graphite">
              {content.page.description}
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-lg border border-ink/10 bg-white shadow-panel">
            <div className="grid border-b border-ink/10 bg-mist px-6 py-4 text-sm font-semibold text-graphite md:grid-cols-[1.4fr_0.75fr_1fr]">
              <div>问题</div>
              <div className="hidden md:block">发布时间和地点</div>
              <div className="hidden md:block">论文</div>
            </div>

            <div className="divide-y divide-ink/10">
              {content.works.map((work) => (
                <article
                  key={`${work.problem}-${work.paper}`}
                  className="grid gap-4 px-6 py-6 md:grid-cols-[1.4fr_0.75fr_1fr]"
                >
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-circuit md:hidden">
                      问题
                    </div>
                    <p className="leading-7 text-ink">{work.problem}</p>
                  </div>
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-circuit md:hidden">
                      发布时间和地点
                    </div>
                    <p className="leading-7 text-graphite">{work.published}</p>
                  </div>
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-circuit md:hidden">
                      论文
                    </div>
                    {work.href ? (
                      <a
                        href={work.href}
                        className="inline-flex items-center gap-2 font-semibold text-ink transition hover:text-graphite"
                      >
                        {work.paper}
                        <ExternalLink size={15} />
                      </a>
                    ) : (
                      <p className="leading-7 text-graphite">{work.paper}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
