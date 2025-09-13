import './style.css';
import { loadHeader } from './components/header';
import { loadFooter } from './components/footer';
import { loadHomeContent } from './pages/home';


declare const pannellum: any; // Because Pannellum has no TS types

window.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadHomeContent();
  loadFooter();

  // Initialize 360 Viewer
  const imageList = [
    'https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/pano1.jpg',
    'https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/pano2.jpg'
  ];

  let currentIndex = 0;

  const viewer = pannellum.viewer('panorama', {
    type: 'equirectangular',
    panorama: imageList[currentIndex],
    autoLoad: true,
    compass: false,
    showZoomCtrl: true,
    hfov: 100,
    minHfov: 50,
    maxHfov: 120
  });

  document.getElementById('prevBtn')?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    viewer.loadScene({ type: 'equirectangular', panorama: imageList[currentIndex] });
  });

  document.getElementById('nextBtn')?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageList.length;
    viewer.loadScene({ type: 'equirectangular', panorama: imageList[currentIndex] });
  });
});
