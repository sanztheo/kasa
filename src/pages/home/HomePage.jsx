import { useFetch } from '../../lib/useFetch';
import Banner from '../../components/banner/Banner';
import Card from '../../components/card/Card';
import bannerHome from '../../assets/banner-home.jpg';
import './HomePage.scss';

export default function HomePage() {
  const { data: listings, loading, error } = useFetch('/data/backend.json');

  return (
    <>
      <Banner image={bannerHome} alt="Côte rocheuse en bord de mer">
        Chez vous, partout et ailleurs
      </Banner>

      <section className="listings">
        {loading && <p className="listings__status">Chargement des logements…</p>}
        {error && <p className="listings__status">Impossible de charger les logements.</p>}
        {listings && (
          <ul className="listings__grid">
            {listings.map((listing) => (
              <li key={listing.id}>
                <Card id={listing.id} title={listing.title} cover={listing.cover} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
