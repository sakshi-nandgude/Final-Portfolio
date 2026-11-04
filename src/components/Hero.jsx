import { profile } from "../data/profile.js";
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "./Icons.jsx";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>{profile.name}</h1>
          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <MailIcon /> Email me
            </a>
            {profile.resume && (
              <a className="btn btn-ghost" href={profile.resume} download>
                <DownloadIcon /> Download CV
              </a>
            )}
            <a className="btn btn-ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon /> LinkedIn
            </a>
            <a className="btn btn-ghost" href={profile.links.github} target="_blank" rel="noreferrer">
              <GithubIcon /> GitHub
            </a>
          </div>
        </div>

        <table className="snapshot">
          <caption>
            <span>select * from sakshi;</span>
            <span>{profile.snapshot.length} rows</span>
          </caption>
          <tbody>
            {profile.snapshot.map((row, i) => (
              <tr key={row.label} style={{ "--i": i }}>
                <th scope="row">{row.label}</th>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
