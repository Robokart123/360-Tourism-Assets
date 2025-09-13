import { loadHeader } from "./components/header";
import { loadFooter } from "./components/footer";

// Load header & footer after DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadFooter();

  // Load Pannellum via CDN
  const pannellumScript = document.createElement("script");
  pannellumScript.src = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js";
  pannellumScript.onload = initPanorama;
  document.body.appendChild(pannellumScript);

  const pannellumCSS = document.createElement("link");
  pannellumCSS.rel = "stylesheet";
  pannellumCSS.href = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css";
  document.head.appendChild(pannellumCSS);
});

// Panorama logic
const imageList = [
  'https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/pano1.jpg',
  'https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/pano2.jpg'
];
let currentIndex = 0;
let viewer: any;

function initPanorama() {
  const panoramaDiv = document.getElementById("panorama");
  if (!panoramaDiv) return;

  viewer = (window as any).pannellum.viewer('panorama', {
    type: "equirectangular",
    panorama: imageList[currentIndex],
    autoLoad: true,
    compass: false,
    showZoomCtrl: true,
    hfov: 100,
    minHfov: 50,
    maxHfov: 120
  });
}

export function prevImage() {
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  reloadPanorama();
}

export function nextImage() {
  currentIndex = (currentIndex + 1) % imageList.length;
  reloadPanorama();
}

function reloadPanorama() {
  if (!viewer) return;
  viewer.destroy();
  initPanorama();
}