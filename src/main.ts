import './style.css';
import { loadHeader } from './components/header';
import { loadFooter } from './components/footer';
import { loadHomeContent } from './pages/home';
import { loadMangalContent } from './pages/mangal';

(window as any).loadMangalContent = loadMangalContent;
(window as any).loadHomeContent = loadHomeContent;

document.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadFooter();
  loadHomeContent();
});
