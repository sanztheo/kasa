import { useFetch } from '../../lib/useFetch';
import Banner from '../../components/banner/Banner';
import Collapse from '../../components/collapse/Collapse';
import bannerAbout from '../../assets/banner-about.jpg';
import './AboutPage.scss';

export default function AboutPage() {
  const { data: sections } = useFetch('/data/about.json');

  return (
    <>
      <Banner image={bannerAbout} alt="Chaîne de montagnes enneigées" />

      <section className="about">
        {sections?.map((section) => (
          <Collapse key={section.title} title={section.title}>
            {section.content}
          </Collapse>
        ))}
      </section>
    </>
  );
}
