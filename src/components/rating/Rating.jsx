import './Rating.scss';

const MAX_STARS = 5;
const STAR_PATH =
  'M12 .587l3.668 7.431 8.2 1.192-5.934 5.784 1.401 8.171L12 18.896l-7.335 3.869 1.401-8.171L.132 9.21l8.2-1.192z';

/**
 * Affiche une note sur 5 étoiles. `score` arrive en chaîne ("1".."5") depuis le JSON.
 */
export default function Rating({ score }) {
  const value = Number(score);

  return (
    <div className="rating" aria-label={`${value} étoiles sur ${MAX_STARS}`}>
      {Array.from({ length: MAX_STARS }, (_, index) => (
        <svg
          key={index}
          className={`rating__star ${index < value ? 'rating__star--on' : ''}`}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d={STAR_PATH} />
        </svg>
      ))}
    </div>
  );
}
