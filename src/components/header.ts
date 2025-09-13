export function loadHeader() {
  const header = document.createElement('header');
  header.className = 'glass-header';
  header.innerHTML = `
    <div class="logo">
      <a href="/index.html" style="display: flex; align-items: center; text-decoration: none; color: inherit;">
        <img src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/assets/Divya_drishti.svg" alt="Divya Drishti Logo" style="height:60px; vertical-align: middle;">
        <span style="margin-left:10px; font-weight: bold; font-size: 1.5em; vertical-align: middle;">Divya Drishti</span>
      </a>
    </div>
    <nav>
      <a href="/index.html">Home</a>
      <a href="#viewer">Explore</a>
      <a href="#about">About</a>
      <a href="#">Contact</a>
    </nav>
  `;
  document.body.prepend(header);
}
