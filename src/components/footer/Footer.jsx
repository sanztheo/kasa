import Logo from '../logo/Logo';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Logo className="footer__logo" />
        <p className="footer__copy">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
