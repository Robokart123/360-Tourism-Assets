// Inform TypeScript that pannellum is a global object
declare const pannellum: any;

export function loadHomeContent() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <!-- Hero Section -->
    <section class="hero">
      <video autoplay muted loop playsinline class="background-video">
        <source src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/assets/video-bg.mp4" type="video/mp4">
      </video>
      <div class="hero-overlay">
        <h1>Divya Drishti</h1>
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



  <!-- Place Cards Section -->
  <section class="places-grid">
    <a href="#" class="place-card" onclick="loadMangalContent();">
      <img src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/assets/temple.jpg" alt="Mangal Grah Mandir">
      <div class="overlay">Mangal Grah Mandir</div>
    </a>

    <div class="place-card locked">
      <img src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/assets/ellora.jpg" alt="Ellora Caves">
      <div class="overlay">Ellora Caves</div>
      <div class="locked-text">Coming Soon</div>
    </div>

    <div class="place-card locked">
      <img src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/assets/tulja.jpg" alt="Tulja Bhavani Temple">
      <div class="overlay">Tulja Bhavani Temple</div>
      <div class="locked-text">Coming Soon</div>
    </div>
  </section>

      <!-- About Section -->
    <section id="about" class="about-section">
      <h2>What We Do</h2>
      <p>
        At Divya Drishti, we offer an immersive and interactive experience of the world's most captivating destinations.
        Explore famous landmarks, sacred temples, and cultural heritage sites in 360°, bringing the beauty of travel right to your screen.
        Our platform is dedicated to delivering high-quality panoramic experiences that inspire curiosity and adventure.
      </p>
    </section>


    <!-- Dynamic Info Section -->
    <section class="intro">
      <div class="intro-item">
        <img src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/assets/Our_vision_new.svg" alt="Our Vision">
        <div class="text">
          <h2>Our Vision</h2>
          <p>
            We aim to bridge the gap between technology and culture by offering panoramic experiences
            that connect travelers, scholars, and enthusiasts. Our interactive tours make history, architecture,
            and spirituality accessible to everyone, from the comfort of their home.
          </p>
        </div>
      </div>

<!--
<div class="intro-item reverse">
  <img src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/assets/Global_destinations.svg" alt="Global Destinations">
  <div class="text">
    <h2>Global Destinations</h2>
    <p>
      Explore a wide range of spiritual and cultural destinations from around the globe.
      Our platform offers meticulously curated 360° tours that highlight architectural wonders,
      natural landscapes, and places of worship, bringing you closer to world heritage.
    </p>
  </div>
</div>
-->


      <div class="intro-item">
        <img src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/assets/Interactive_learning_new.svg" alt="Interactive Learning">
        <div class="text">
          <h2>Interactive Learning</h2>
          <p>
            Our tours are not just visual experiences — they are learning journeys.
            Dive deep into rituals, traditions, and ceremonies with immersive details,
            enabling you to understand the cultural and historical significance of each site.
          </p>
        </div>
      </div>

      <div class="intro-item reverse">
        <img src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/assets/Community_engagement.svg" alt="Community Engagement">
        <div class="text">
          <h2>Community Engagement</h2>
          <p>
            Join a global community of explorers, historians, and spiritual seekers.
            Share experiences, insights, and stories while contributing to a growing archive of shared knowledge.
            Our platform fosters cultural appreciation and mutual understanding.
          </p>
        </div>
      </div>
    </section>

    
    <!-- Dedication / Thank You Section -->
<section class="thankyou-section">
  <div class="thankyou-content">
    <!-- Map -->
    <div class="map">
      <img src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/assets/Maharashtra_map_new.png" 
           alt="Maharashtra Map">
    </div>

    <!-- Text + Minister -->
    <div class="thankyou-text">
      <h2>A Heartfelt Thank You</h2>
      <p>
        We extend our sincere gratitude to the Government of Maharashtra and 
        Hon. Tourism Minister Shambhuraj Desai for their vision, dedication, 
        and relentless efforts in promoting cultural heritage and spiritual 
        tourism across the state. Their leadership has been instrumental in 
        making initiatives like <strong>Divya Drishti</strong> possible, 
        preserving our traditions while embracing modern technology to 
        showcase Maharashtra’s glory to the world.
      </p>

      <div class="minister-info">
        <img src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/assets/Shambhuraj_Desai.webp" 
             alt="Shambhuraj Desai" class="minister-photo">
        <div class="minister-label">
          Hon. Shambhuraj Desai <br> Tourism Minister, Maharashtra
        </div>
      </div>
    </div>
  </div>
</section>

  `;

  // Initialize Panorama Viewer
  const imageList = [
    'https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/assets/pano1.jpg',
    'https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/assets/pano2.jpg'
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
