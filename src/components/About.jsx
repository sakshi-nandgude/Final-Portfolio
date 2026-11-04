import { profile } from "../data/profile.js";
import Section from "./Section.jsx";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="prose">
        {profile.summary.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <ul className="chip-row" aria-label="Role focus">
        {profile.roles.map((r) => (
          <li key={r} className="chip chip-accent">{r}</li>
        ))}
      </ul>
    </Section>
  );
}
