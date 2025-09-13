export function loadFooter() {
  const footer = document.createElement('footer');
  footer.className = 'glass-footer';
  footer.innerHTML = `
    <p>© 2025 360 Tourism. All rights reserved.</p>
    <div class="socials">
      <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">YouTube</a>
    </div>
  `;
  document.body.appendChild(footer);
}
