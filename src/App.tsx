import { profile, projects, skills } from "./data/portfolio";

const navItems = [
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Compétences", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function App() {
  return (
    <div className="min-h-screen bg-app text-ink">
      <header className="sticky top-0 z-30 border-b border-ink/10 bg-app/90 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3 text-base font-semibold tracking-tight text-ink">
            <img
              src="/RayanMERZOUK.jpg"
              alt="Photo de profil de Rayan Merzouk"
              className="h-10 w-10 rounded-full border border-ink/10 object-cover"
            />
            {profile.name}
          </div>
          <div className="hidden gap-6 text-sm font-medium text-ink/70 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-hero-gradient" />
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/60">
                Portfolio ingénierie logicielle
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="/RayanMERZOUK.jpg"
                  alt="Photo de profil de Rayan Merzouk"
                  className="h-16 w-16 rounded-full border border-ink/10 object-cover"
                />
                <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                  {profile.name}
                </h1>
              </div>
              <p className="max-w-xl text-lg text-ink/70">
                {profile.title} — {profile.objective}
              </p>
              <div className="flex flex-wrap gap-4">
                <a className="btn-primary" href="#projects">
                  Voir les projets
                </a>
                <a className="btn-ghost" href="#contact">
                  Contact
                </a>
              </div>
            </div>

            <div className="space-y-6 rounded-2xl border border-ink/10 bg-white/80 p-6 shadow-soft">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-ink/50">
                  Profil
                </p>
                <p className="mt-2 text-lg font-semibold text-ink">
                  Étudiant en {profile.title}
                </p>
                <p className="mt-2 text-sm text-ink/70">{profile.university}</p>
              </div>
              <div className="grid gap-3">
                <div className="rounded-xl border border-ink/10 bg-white px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                    Objectif
                  </p>
                  <p className="mt-2 text-sm text-ink/70">
                    Poste junior en développement logiciel / full-stack.
                  </p>
                </div>
                
                <div className="rounded-xl border border-ink/10 bg-white px-4 py-3">
                  
                  <p className="mt-2 text-sm text-ink/70">
                    Architecture web, conception logicielle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-3">
              <p className="section-eyebrow">À propos</p>
              <h2 className="section-title">
                Un profil junior, orienté ingénierie logicielle
              </h2>
              <p className="text-ink/70">
                Étudiant en Master 2 Génie Logiciel, je construis des projets
                académiques complets avec une attention particulière pour la
                structure applicative, la fiabilité et la clarté du code.
              </p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-soft">
              <div className="grid gap-4 text-sm text-ink/70">
                <div>
                  <p className="font-semibold text-ink">Formation</p>
                  <p>
                    Master 2 Génie Logiciel — {profile.university}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-ink">Approche</p>
                  <p>
                    Priorité à l'architecture, aux API REST et à une séparation
                    claire des responsabilités.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-ink">Positionnement</p>
                  <p>
                    Recherche d'un premier poste en ingénierie logicielle /
                    développement full-stack junior.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              <p className="section-eyebrow">Projets</p>
              <h2 className="section-title">Sélection de projets académiques</h2>
              <p className="text-ink/70">
                Trois projets représentatifs de mon niveau et de ma progression.
                Chaque description reste factuelle, sans exagération.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="flex h-full flex-col gap-6 rounded-2xl border border-ink/10 bg-white p-6 shadow-soft"
                >
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
                      {project.context}
                    </p>
                    <h3 className="text-xl font-semibold text-ink">
                      {project.title}
                    </h3>
                    <p className="text-sm text-ink/70">{project.description}</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                        Stack
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-xs font-medium text-ink/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                        Points clés
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-ink/70">
                        {project.focus.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {project.details && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                          Détails
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-ink/70">
                          {project.details.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent/80" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.roles && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                          Rôles
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-ink/70">
                          {project.roles.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent/70" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.backendHighlights && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                          Backend
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-ink/70">
                          {project.backendHighlights.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent/60" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>


                        
                      </div>
                      
                    )}
                  </div>

                {project.lien && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                          Lien
                        </p>}
                  <a href={project.lien} target="_blank" rel={project.lien} className="relative bottom-4 text-blue-800">
                  {project.lien}
</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="section-eyebrow">Compétences</p>
              <h2 className="section-title">
                Compétences techniques consolidées en M2
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {skills.map((group) => (
                <div
                  key={group.label}
                  className="rounded-2xl border border-ink/10 bg-white p-6 shadow-soft"
                >
                  <p className="text-sm font-semibold text-ink">{group.label}</p>
                  <div className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <div key={item.name} className="space-y-2">
                        <div className="flex items-center justify-between text-xs font-medium text-ink/70">
                          <span>{item.name}</span>
                          <span>{item.level}%</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-ink/10">
                          <div
                            className="h-1.5 rounded-full bg-accent"
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-8 rounded-2xl border border-ink/10 bg-white p-8 shadow-soft md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-3">
              <p className="section-eyebrow">Contact</p>
              <h2 className="section-title">
                Disponible pour un échange technique
              </h2>
              <p className="text-ink/70">
                Ajoutez vos liens et coordonnées pour faciliter la prise de
                contact avec un recruteur.
              </p>
            </div>
            <div className="space-y-4 text-sm text-ink/70">
              <div className="rounded-xl border border-ink/10 bg-ink/5 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                  Email
                </p>
                <div className="mt-2 flex items-center gap-2 text-ink/80">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                  <span>rayan.merzouk.pro@gmail.com</span>
                </div>
              </div>
              <div className="rounded-xl border border-ink/10 bg-ink/5 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                  LinkedIn
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-2 text-ink/80 underline-offset-4 transition hover:text-ink hover:underline"
                  href="https://www.linkedin.com/in/rayan-merzouk-00074a287/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6.1V21h-4v-5.2c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.6V21H9z" />
                  </svg>
                  linkedin.com/in/rayan-merzouk-00074a287
                </a>
              </div>
              <div className="rounded-xl border border-ink/10 bg-ink/5 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                  GitHub
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-2 text-ink/80 underline-offset-4 transition hover:text-ink hover:underline"
                  href="https://github.com/rayanmerzouk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M12 .5C5.7.5.7 5.6.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.6-1.3-1.4-1.7-1.4-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.7-1.7-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C18.7 4.3 19.7 4.6 19.7 4.6c.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.8 5.6-5.5 5.9.4.3.8 1 .8 2.1v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.3 5.6 18.3.5 12 .5Z" />
                  </svg>
                  github.com/rayanmerzouk
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 bg-white/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-ink/60 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Portfolio académique — Génie Logiciel</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
