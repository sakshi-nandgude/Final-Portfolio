import { leadership } from "../data/leadership.js";
import Section from "./Section.jsx";
import Disclosure from "./Disclosure.jsx";

export default function Leadership() {
  return (
    <Section id="leadership" title="Leadership" note="Extracurricular roles and team projects.">
      <ol className="timeline">
        {leadership.map((l) => (
          <li key={l.title} className="timeline-item">
            <p className="timeline-date">{l.period}</p>
            <div>
              <h3>{l.title}</h3>
              <p className="timeline-company">{l.org}</p>
              {l.tools?.length > 0 && (
                <ul className="chip-row" aria-label="Tools and methods">
                  {l.tools.map((t) => (
                    <li key={t} className="chip">{t}</li>
                  ))}
                </ul>
              )}
              <Disclosure openLabel="Show details" closeLabel="Hide details">
                <ul className="bullets">
                  {l.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </Disclosure>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
