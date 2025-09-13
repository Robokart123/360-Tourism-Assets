export function loadHeader() {
  const header = document.createElement('header');
  header.className = 'glass-header';
  header.innerHTML = `
    <div class="logo">Divya Drishti</div>
    <nav>
      <a href="/index.html">Home</a>
      <a href="#viewer">Explore</a>
      <a href="#about">About</a>
      <a href="#">Contact</a>
    </nav>
  `;
  document.body.prepend(header);
}
