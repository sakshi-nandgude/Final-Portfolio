import { useMemo, useState } from "react";
import { projects } from "../data/projects.js";
import Section from "./Section.jsx";
import Disclosure from "./Disclosure.jsx";
import { ExternalIcon } from "./Icons.jsx";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  // Filter chips are built from the tags found in projects.js.
  const tags = useMemo(() => {
    const unique = [];
    projects.forEach((p) => p.tags.forEach((t) => !unique.includes(t) && unique.push(t)));
    return ["All", ...unique];
  }, []);

  const visible = projects.filter((p) => filter === "All" || p.tags.includes(filter));

  return (
    <Section id="projects" title="Projects" note={`${projects.length} projects across data, ML and software.`}>
      <div className="filters" role="group" aria-label="Filter projects by topic">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`filter${filter === tag ? " is-selected" : ""}`}
            aria-pressed={filter === tag}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visible.map((p) => (
          <article key={p.title} className="project">
            <header>
              <h3>{p.title}</h3>
              <div className="project-meta">
                {p.status && <span className="badge badge-warn">{p.status}</span>}
                {p.highlight && <span className="badge badge-accent">{p.highlight}</span>}
                <span className="muted">{p.tags.join(", ")}</span>
              </div>
            </header>

            <p>{p.summary}</p>

            <ul className="chip-row" aria-label={`Technologies used in ${p.title}`}>
              {p.tech.map((t) => (
                <li key={t} className="chip">{t}</li>
              ))}
            </ul>

            {(p.github || p.live) && (
              <p className="project-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer">
                    Source code <ExternalIcon />
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    Live demo <ExternalIcon />
                  </a>
                )}
              </p>
            )}

            {p.details?.length > 0 && (
              <Disclosure openLabel="Show details" closeLabel="Hide details">
                <ul className="bullets">
                  {p.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </Disclosure>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
