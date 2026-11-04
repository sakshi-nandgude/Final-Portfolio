import { useState } from "react";
import { navItems, profile } from "../data/profile.js";

export default function Header({ active }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          {profile.name.replace(" Vijay", "")}
        </a>

        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav id="site-nav" className={`site-nav${open ? " is-open" : ""}`} aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "is-active" : undefined}
              aria-current={active === item.id ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
