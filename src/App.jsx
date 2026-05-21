import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import DetailPage from './pages/detail/DetailPage';
import NotFoundPage from './pages/error/NotFoundPage';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
