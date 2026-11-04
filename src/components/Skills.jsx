import { useState } from "react";
import { skills } from "../data/skills.js";
import Section from "./Section.jsx";

const tabs = [
  { key: "technical", label: "Technical" },
  { key: "business", label: "Business and delivery" },
];

export default function Skills() {
  const [tab, setTab] = useState("technical");

  return (
    <Section id="skills" title="Skills">
      <div className="tabs" role="tablist" aria-label="Skill categories">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            id={`tab-${t.key}`}
            aria-selected={tab === t.key}
            aria-controls={`panel-${t.key}`}
            className={`tab${tab === t.key ? " is-selected" : ""}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`}>
        <dl className="skill-list">
          {skills[tab].map((g) => (
            <div key={g.group} className="skill-row">
              <dt>{g.group}</dt>
              <dd>
                <ul className="chip-row">
                  {g.items.map((item) => (
                    <li key={item} className="chip">{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
