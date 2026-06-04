import './Banner.scss';

/**
 * Bannière image. Si un titre (children) est fourni, on superpose un voile
 * sombre + le titre centré (page d'accueil). Sinon, image seule (page À propos).
 */
export default function Banner({ image, alt = '', children }) {
  const hasTitle = Boolean(children);

  return (
    <section className="banner">
      <img className="banner__img" src={image} alt={alt} />
      {hasTitle && (
        <>
          <div className="banner__overlay" />
          <h1 className="banner__title">{children}</h1>
        </>
      )}
    </section>
  );
}
