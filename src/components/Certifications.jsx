import { useState } from "react";
import { certifications } from "../data/certifications.js";
import Section from "./Section.jsx";
import { ExternalIcon } from "./Icons.jsx";

const PREVIEW_COUNT = 5;

function Group({ group }) {
  const [expanded, setExpanded] = useState(false);
  const items = expanded ? group.items : group.items.slice(0, PREVIEW_COUNT);
  const hidden = group.items.length - PREVIEW_COUNT;

  return (
    <div className="cert-group">
      <h3>
        {group.issuer} <span className="muted">({group.items.length})</span>
      </h3>
      <ul className="cert-list">
        {items.map((c) => (
          <li key={c.name} className={c.featured ? "cert is-featured" : "cert"}>
            <span className="cert-name">
              {c.url ? (
                <a href={c.url} target="_blank" rel="noreferrer">
                  {c.name} <ExternalIcon />
                </a>
              ) : (
                c.name
              )}
            </span>
            <span className="cert-issued">{c.issued}</span>
            {c.id && <span className="cert-id">ID {c.id}</span>}
          </li>
        ))}
      </ul>
      {hidden > 0 && (
        <button type="button" className="link-button" aria-expanded={expanded} onClick={() => setExpanded((v) => !v)}>
          {expanded ? "Show fewer" : `Show all ${group.items.length}`}
        </button>
      )}
    </div>
  );
}

export default function Certifications() {
  const total = certifications.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <Section id="certifications" title="Certifications" note={`${total} credentials from Microsoft, Google, IBM, AWS and Forage.`}>
      {certifications.map((g) => (
        <Group key={g.issuer} group={g} />
      ))}
    </Section>
  );
}
