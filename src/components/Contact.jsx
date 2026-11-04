import { profile } from "../data/profile.js";
import Section from "./Section.jsx";
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon } from "./Icons.jsx";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" note="Open to data, analytics and technology roles.">
      <a className="contact-email" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>

      <ul className="contact-list">
        <li>
          <MailIcon />
          <a href={`mailto:${profile.email}`}>Email</a>
        </li>
        {profile.phone && (
          <li>
            <PhoneIcon />
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          </li>
        )}
        <li>
          <LinkedinIcon />
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </li>
        <li>
          <GithubIcon />
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
        </li>
        <li>
          <MapPinIcon />
          <span>{profile.location}</span>
        </li>
      </ul>
      <p className="muted">{profile.workAuth}</p>
    </Section>
  );
}
