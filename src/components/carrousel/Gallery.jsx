import { useState } from 'react';
import './Gallery.scss';

function Chevron() {
  return (
    <svg className="gallery__chevron" viewBox="0 0 16 28" aria-hidden="true" focusable="false">
      <path
        d="M2 2 14 14 2 26"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Galerie photos d'un logement.
 * - Boutons et numérotation masqués s'il n'y a qu'une seule image.
 * - Défilement circulaire : avant la première → dernière ; après la dernière → première.
 */
export default function Gallery({ pictures, title }) {
  const [index, setIndex] = useState(0);
  const total = pictures.length;
  const hasControls = total > 1;

  const goPrev = () => setIndex((current) => (current - 1 + total) % total);
  const goNext = () => setIndex((current) => (current + 1) % total);

  return (
    <section className="gallery">
      <img
        className="gallery__img"
        src={pictures[index]}
        alt={`${title} — photo ${index + 1} sur ${total}`}
      />

      {hasControls && (
        <>
          <button
            type="button"
            className="gallery__btn gallery__btn--prev"
            onClick={goPrev}
            aria-label="Image précédente"
          >
            <Chevron />
          </button>
          <button
            type="button"
            className="gallery__btn gallery__btn--next"
            onClick={goNext}
            aria-label="Image suivante"
          >
            <Chevron />
          </button>
          <p className="gallery__counter">
            {index + 1}/{total}
          </p>
        </>
      )}
    </section>
  );
}
