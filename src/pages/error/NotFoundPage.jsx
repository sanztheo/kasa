import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

export default function NotFoundPage() {
  return (
    <section className="notfound">
      <h1 className="notfound__code">404</h1>
      <p className="notfound__text">Oups! La page que vous demandez n&apos;existe pas.</p>
      <Link to="/" className="notfound__link">
        Retourner sur la page d&apos;accueil
      </Link>
    </section>
  );
}
