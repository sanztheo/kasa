import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import DetailPage from './pages/detail/DetailPage';

import NotFoundPage from './pages/error/NotFoundPage';
export default function App() {
  return (
    <BrowserRouter>
      // import header
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      // import footer 
    </BrowserRouter>
  );
}
