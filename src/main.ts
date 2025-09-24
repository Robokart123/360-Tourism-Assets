import './style.css';
import { loadHeader } from './components/header';
import { loadFooter } from './components/footer';
import { loadHomeContent } from './pages/home';
import { loadMangalContent } from './pages/mangal';

window.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadFooter();

  const path = window.location.pathname;

  if (path === '/home' || path === '/') {
    loadHomeContent();
  } else if (path === '/mangal_grah') {
    loadMangalContent();
  } else {
    loadHomeContent(); // fallback to home
  }
});
