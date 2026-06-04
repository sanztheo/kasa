import { useId, useState } from 'react';
import './Collapse.scss';

function Chevron() {
  return (
    <svg className="collapse__chevron" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M5 15 12 8 19 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Menu déroulant. Fermé par défaut ; un clic bascule l'état.
 * `variant` : "default" (page À propos, grand) ou "detail" (fiche logement, compact).
 */
export default function Collapse({ title, children, variant = 'default' }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={`collapse collapse--${variant} ${open ? 'collapse--open' : ''}`}>
      <button
        type="button"
        className="collapse__header"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="collapse__title">{title}</span>
        <Chevron />
      </button>
      <div className="collapse__panel" id={panelId}>
        <div className="collapse__content">
          <div className="collapse__inner">{children}</div>
        </div>
      </div>
    </div>
  );
}
