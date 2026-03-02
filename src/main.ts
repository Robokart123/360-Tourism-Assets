import './style.css';
import { loadHeader } from './components/header';
import { loadFooter } from './components/footer';
import { loadHomeContent } from './pages/home';
import { loadMangalContent } from './pages/mangal';
import { loadChandrayaanContent } from './pages/redirect/chandrayaan';
import { loadAsteroidsContent } from './pages/redirect/asteroids';
import { loadBigBangContent } from './pages/redirect/bigbang.ts';
import { loadSolarSystemContent } from './pages/redirect/solar_system.ts';
import { loadHumanEmbryoContent } from './pages/redirect/human_embryo.ts';
import { loadBiologyContent } from './pages/redirect/biology.ts';
import { loadPeriodicTableContent } from './pages/redirect/periodic_table.ts';
import { loadEvolutionaryContent } from './pages/redirect/evolutionary.ts';
import { loadOhmsLawContent } from './pages/redirect/ohms_law.ts';
import { loadEarthContent } from './pages/redirect/earth.ts';

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
if (path === '/asteroids') {
  loadAsteroidsContent();
}
if (path === '/bigbang') {
  loadBigBangContent();
}
if (path === '/solar_system') {
  loadSolarSystemContent();
}
if (path === '/human_embryo') {
  loadHumanEmbryoContent();
}
if (path === '/biology') {
  loadBiologyContent();
}
if (path === '/periodic_table') {
  loadPeriodicTableContent();
}
if (path === '/evolutionary') {
  loadEvolutionaryContent();
}
if (path === '/ohms_law') {
  loadOhmsLawContent();
}
if (path === '/earth') {
  loadEarthContent();
}
});
