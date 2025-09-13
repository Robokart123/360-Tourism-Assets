// Inform TypeScript that pannellum is a global object
declare const pannellum: any;

export function loadHomeContent() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <!-- Hero Section -->
    <section class="hero">
      <video autoplay muted loop playsinline class="background-video">
        <source src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/video-bg.mp4" type="video/mp4">
      </video>
      <div class="hero-overlay">
        <h1>Experience the World in 360°</h1>
      </div>
    </section>

    <!-- Viewer Section -->
    <section id="viewer" class="viewer-section">
      <h2 class="viewer-title">Experience 360°</h2>
      <div id="panorama"></div>
      <div>
        <button class="viewer-btn" id="prevBtn">❮ Previous</button>
        <button class="viewer-btn" id="nextBtn">Next ❯</button>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
      <h2>What We Do</h2>
      <p>
        At 360 Tourism, we offer an immersive and interactive experience of the world's most captivating destinations.
        Explore famous landmarks, sacred temples, and cultural heritage sites in 360°, bringing the beauty of travel right to your screen.
        Our platform is dedicated to delivering high-quality panoramic experiences that inspire curiosity and adventure.
      </p>
    </section>

    <!-- Intro Panels Section -->
    <section class="intro">
      <div class="intro-item">
        <img src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/temple.jpg" alt="About Us">
        <div class="text">
          <h2>About 360 Tourism</h2>
          <p>
            Welcome to 360 Tourism — your gateway to exploring the beauty and heritage of the world through cutting-edge panoramic technology.
            Our mission is to make travel and cultural experiences accessible to everyone, regardless of location.
          </p>
        </div>
      </div>

      <div class="intro-item">
        <img src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/surrounding.jpg" alt="Explore">
        <div class="text">
          <h2>Explore Destinations</h2>
          <p>
            Discover historical landmarks, spiritual sites, and natural wonders from the comfort of your home.
            Our 360° views allow you to feel like you're walking through sacred temples, exploring mountains, or wandering ancient cities.
          </p>
        </div>
      </div>

      <div class="intro-item">
        <img src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/rituals.jpg" alt="Immersive Experience">
        <div class="text">
          <h2>Immersive Experience</h2>
          <p>
            Engage in virtual ceremonies, witness rituals, and enjoy cultural festivities through high-quality, interactive panoramic views.
            Experience the spiritual aura and vibrancy of life at different locations around the globe.
          </p>
        </div>
      </div>

      <div class="intro-item">
        <img src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/celebration.jpg" alt="Connect">
        <div class="text">
          <h2>Connect & Learn</h2>
          <p>
            Our platform not only offers exploration but also connects you to global cultures, traditions, and histories.
            Whether for learning or leisure, 360 Tourism is designed to expand your horizons and enrich your knowledge.
          </p>
        </div>
      </div>
    </section>

    <!-- Place Cards Section -->
    <section class="places-grid">
      <a href="mangal.html" class="place-card">
        <img src="https://robokart.com/360/assets/temple.jpg" alt="Mangal Grah Mandir">
        <div class="overlay">Mangal Grah Mandir</div>
      </a>
      <div class="place-card locked">
        <img src="https://robokart.com/360/assets/ellora.jpg" alt="Ellora Caves">
        <div class="overlay">Ellora Caves</div>
        <div class="locked-text">Coming Soon</div>
      </div>
      <div class="place-card locked">
        <img src="https://robokart.com/360/assets/tulja.jpg" alt="Tulja Bhavani Temple">
        <div class="overlay">Tulja Bhavani Temple</div>
        <div class="locked-text">Coming Soon</div>
      </div>
    </section>
  `;

  // Initialize Panorama Viewer
  const imageList = [
    'https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/pano1.jpg',
    'https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/pano2.jpg'
  ];
  let currentIndex = 0;

  let viewer = pannellum.viewer('panorama', {
    type: "equirectangular",
    panorama: imageList[currentIndex],
    autoLoad: true,
    compass: false,
    showZoomCtrl: true,
    hfov: 100,
    minHfov: 50,
    maxHfov: 120
  });

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  prevBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    viewer.destroy();
    viewer = pannellum.viewer('panorama', {
      type: "equirectangular",
      panorama: imageList[currentIndex],
      autoLoad: true,
      compass: false,
      showZoomCtrl: true,
      hfov: 100,
      minHfov: 50,
      maxHfov: 120
    });
  });

  nextBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageList.length;
    viewer.destroy();
    viewer = pannellum.viewer('panorama', {
      type: "equirectangular",
      panorama: imageList[currentIndex],
      autoLoad: true,
      compass: false,
      showZoomCtrl: true,
      hfov: 100,
      minHfov: 50,
      maxHfov: 120
    });
  });
}
