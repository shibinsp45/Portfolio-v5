import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProjectBySlug, projects } from "@/lib/projects";

export const Route = createFileRoute("/project/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} — Shibin SP` : "Project — Shibin SP";
    const description = loaderData?.tag ?? "A selected product design project by Shibin SP.";
    const image = loaderData?.img;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(image
          ? [
              { property: "og:image", content: image },
              { name: "twitter:image", content: image },
            ]
          : []),
      ],
    };
  },
  component: ProjectPage,
  notFoundComponent: () => <ProjectNotFound />,
  errorComponent: ProjectError,
});

function ProjectPage() {
  const project = Route.useLoaderData();
  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <main className="min-h-screen px-5 pb-20 pt-6 text-foreground sm:px-8 sm:pt-8">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          hash="work"
          className="group inline-flex items-center gap-2 py-3 text-sm text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Back to selected work
        </Link>

        <header className="pb-8 pt-10 sm:pb-12 sm:pt-14">
          <p className="text-sm text-muted-foreground">{project.year} · {project.kind}</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {project.tag}
          </p>
        </header>

        <div className="overflow-hidden rounded-xl bg-secondary">
          <img
            src={project.img}
            alt={project.title}
            className={`aspect-[4/3] w-full ${project.contain ? "object-contain p-6 sm:p-10" : "object-cover"}`}
          />
        </div>

        <section className="grid gap-8 py-12 sm:grid-cols-[minmax(0,1fr)_minmax(220px,0.55fr)] sm:gap-16 sm:py-16">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl">Project overview</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {project.tag}
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-6 border-t border-border pt-5 sm:border-t-0 sm:pt-0">
            <div>
              <dt className="text-xs uppercase text-muted-foreground">Year</dt>
              <dd className="mt-2 text-sm font-medium">{project.year}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase text-muted-foreground">Focus</dt>
              <dd className="mt-2 text-sm font-medium">{project.kind}</dd>
            </div>
          </dl>
        </section>

        <section className="border-t border-border pt-8 sm:pt-10">
          <h2 className="font-display text-2xl sm:text-3xl">More selected work</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-8">
            {related.map((item) => (
              <Link
                key={item.slug}
                to="/project/$slug"
                params={{ slug: item.slug }}
                className="group flex items-start justify-between gap-4 py-4 transition hover:text-[color:var(--electric)]"
              >
                <span>
                  <span className="block font-medium text-foreground">{item.title}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{item.year}</span>
                </span>
                <ArrowUpRight className="mt-1 size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function ProjectNotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center text-foreground">
      <div>
        <h1 className="font-display text-3xl">Project not found</h1>
        <Link to="/" hash="work" className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" />
          Back to selected work
        </Link>
      </div>
    </main>
  );
}

function ProjectError({ reset }: { reset: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center text-foreground">
      <div>
        <h1 className="font-display text-3xl">This project didn’t load</h1>
        <button type="button" onClick={reset} className="mt-5 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">
          Try again
        </button>
      </div>
    </main>
  );
}