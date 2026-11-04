import { education } from "../data/education.js";
import Section from "./Section.jsx";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.degree} className="timeline-item">
            <p className="timeline-date">{e.period}</p>
            <div>
              <h3>{e.degree}</h3>
              <p className="timeline-company">{e.school}</p>
              <p className="muted">{e.location}</p>
              {e.grade && (
                <p className="timeline-note">
                  <strong>Grade:</strong> {e.grade}
                </p>
              )}
              {e.description && <p className="timeline-note">{e.description}</p>}
              {e.coursework?.length > 0 && (
                <>
                  <p className="timeline-note"><strong>Coursework</strong></p>
                  <ul className="chip-row">
                    {e.coursework.map((c) => (
                      <li key={c} className="chip">{c}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
