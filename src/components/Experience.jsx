import { experience } from "../data/experience.js";
import Section from "./Section.jsx";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="timeline-item">
            <p className="timeline-date">{job.period}</p>
            <div>
              <h3>
                {job.role}
                {job.current && <span className="badge badge-accent">Current</span>}
              </h3>
              <p className="timeline-company">{job.company}</p>
              <p className="muted">
                {job.location}
                {job.mode ? `, ${job.mode}` : ""}
              </p>
              {job.note && <p className="timeline-note">{job.note}</p>}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
