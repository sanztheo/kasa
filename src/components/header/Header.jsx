import { NavLink } from 'react-router-dom';
import Logo from '../logo/Logo';
import './Header.scss';

const navLinkClass = ({ isActive }) => (isActive ? 'header__link header__link--active' : 'header__link');

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink to="/" className="header__logo" aria-label="Kasa — Accueil">
          <Logo />
        </NavLink>
        <nav className="header__nav">
          <NavLink to="/" end className={navLinkClass}>
            Accueil
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            A Propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
