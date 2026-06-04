import { useParams } from 'react-router-dom';
import { useFetch } from '../../lib/useFetch';
import Gallery from '../../components/carrousel/Gallery';
import Tag from '../../components/tag/Tag';
import Rating from '../../components/rating/Rating';
import Collapse from '../../components/collapse/Collapse';
import NotFoundPage from '../error/NotFoundPage';
import './DetailPage.scss';

export default function DetailPage() {
  const { id } = useParams();
  const { data: listings, loading } = useFetch('/data/backend.json');

  // On attend les données avant de conclure qu'un logement est introuvable.
  if (loading) return null;

  const accommodation = listings?.find((item) => item.id === id);
  if (!accommodation) return <NotFoundPage />;

  const { title, pictures, location, tags, host, rating, description, equipments } = accommodation;

  return (
    <article className="accommodation">
      <Gallery key={id} pictures={pictures} title={title} />

      <header className="accommodation__head">
        <div className="accommodation__info">
          <h1 className="accommodation__title">{title}</h1>
          <p className="accommodation__location">{location}</p>
          <ul className="accommodation__tags">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </ul>
        </div>

        <div className="accommodation__owner">
          <div className="host">
            <span className="host__name">{host.name}</span>
            <img className="host__avatar" src={host.picture} alt={host.name} />
          </div>
          <Rating score={rating} />
        </div>
      </header>

      <div className="accommodation__details">
        <Collapse title="Description" variant="detail">
          {description}
        </Collapse>
        <Collapse title="Équipements" variant="detail">
          <ul className="collapse__equipments">
            {equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </article>
  );
}
