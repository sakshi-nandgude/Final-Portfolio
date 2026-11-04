import { useId, useState } from "react";

// A small show/hide toggle used for project and leadership details.
export default function Disclosure({ openLabel = "Show details", closeLabel = "Hide details", children }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="disclosure">
      <button
        type="button"
        className="link-button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? closeLabel : openLabel}
      </button>
      <div id={panelId} hidden={!open} className="disclosure-panel">
        {children}
      </div>
    </div>
  );
}
