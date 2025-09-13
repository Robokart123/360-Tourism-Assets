declare const pannellum: any;

export function loadMangalContent() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <div id="header"></div>

    <section class="hero">
      <video autoplay muted loop playsinline class="background-video">
        <source src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/video-bg.mp4" type="video/mp4">
      </video>
      <div class="hero-overlay">
        <h1>Mangal Grah Mandir</h1>
      </div>
    </section>

    <section id="viewer" class="viewer-section">
      <h2 class="viewer-title">Explore Mangal Grah Mandir in 360°</h2>
      <div id="panorama"></div>
      <div>
        <button class="viewer-btn" id="prevBtn">❮ Previous</button>
        <button class="viewer-btn" id="nextBtn">Next ❯</button>
      </div>
    </section>

    <section class="intro">
      <div class="intro-item">
        <img src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/temple.jpg" alt="Mangal Grah Mandir">
        <div class="text">
          <h2>About Mangal Grah Mandir</h2>
          <p>
            Welcome to Mangal Grah Mandir — a sacred place that radiates celestial
            energy and spiritual tranquility. Explore this divine location through
            immersive 360° views and feel the cosmic presence.
          </p>
        </div>
      </div>
      <div class="intro-item">
        <img src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/surrounding.jpg" alt="Temple Surroundings">
        <div class="text">
          <h2>Experience the Surroundings</h2>
          <p>
            Witness the divine architecture and serene environment of Mangal Grah Mandir.
            The 360° panoramic view allows you to feel as if you are walking within
            the sacred premises.
          </p>
        </div>
      </div>
      <div class="intro-item">
        <img src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/rituals.jpg" alt="Rituals & Ceremonies">
        <div class="text">
          <h2>Rituals & Ceremonies</h2>
          <p>
            Participate virtually in the sacred rituals and ceremonies conducted here.
            The spiritual aura and divine chants enhance the immersive 360° experience.
          </p>
        </div>
      </div>
      <div class="intro-item">
        <img src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/celebration.jpg" alt="Temple Festivals">
        <div class="text">
          <h2>Festivals & Celebrations</h2>
          <p>
            Celebrate the grandeur of annual festivals held at Mangal Grah Mandir.
            Every celebration reflects the deep cultural and spiritual heritage.
          </p>
        </div>
      </div>
    </section>

    <div id="footer"></div>
  `;

  // Initialize panorama viewer
  const imageList = [
    'https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/pano1.jpg',
    'https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/pano2.jpg'
  ];
  let currentIndex = 0;
  
  const viewer = pannellum.viewer('panorama', {
    type: "equirectangular",
    panorama: imageList[currentIndex],
    autoLoad: true,
    compass: false,
    showZoomCtrl: true,
    hfov: 100,
    minHfov: 50,
    maxHfov: 120
  });

  // Button event listeners
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  prevBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    viewer.loadScene({
      panorama: imageList[currentIndex]
    });
  });

  nextBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageList.length;
    viewer.loadScene({
      panorama: imageList[currentIndex]
    });
  });
}
