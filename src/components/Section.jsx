// Shared layout: heading on the left, content on the right.
export default function Section({ id, title, note, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container section-grid">
        <header className="section-head">
          <h2 id={`${id}-title`}>{title}</h2>
          {note && <p className="section-note">{note}</p>}
        </header>
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
}
