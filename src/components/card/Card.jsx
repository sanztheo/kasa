import { Link } from 'react-router-dom';
import './Card.scss';

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/detail/${id}`} className="card">
      <img className="card__img" src={cover} alt={title} loading="lazy" />
      <h2 className="card__title">{title}</h2>
    </Link>
  );
}
