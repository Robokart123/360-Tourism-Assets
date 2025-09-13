export function loadHeader() {
  const header = document.createElement('header');
  header.className = 'glass-header';
  header.innerHTML = `
    <div class="logo">
      <img src="https://cdn.jsdelivr.net/gh/Robokart123/360-Tourism-Assets@main/assets/Divya_drishti.svg" alt="Divya Drishti Logo" style="height:40px;">
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
