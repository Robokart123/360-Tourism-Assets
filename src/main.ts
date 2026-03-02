import './style.css';
import { loadHeader } from './components/header';
import { loadFooter } from './components/footer';
import { loadHomeContent } from './pages/home';
import { loadMangalContent } from './pages/mangal';
import { loadChandrayaanContent } from './pages/redirect/chandrayaan';

window.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadFooter();

  const path = window.location.pathname;

if (path === '/home' || path === '/') {
  loadHomeContent();
} if (path === '/mangal_grah') {
  loadMangalContent();
} if (path === '/chandrayaan') {
  loadChandrayaanContent();
}
});
