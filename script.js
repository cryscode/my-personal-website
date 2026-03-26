/* ── CUSTOM CURSOR ── */
const dot  = document.getElementById('dot');
const ring = document.getElementById('ring');

let mx = 0, my = 0;
let rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top  = my + 'px';
});

(function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
})();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.width       = '50px';
    ring.style.height      = '50px';
    ring.style.borderColor = 'rgba(201,115,106,0.7)';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.width       = '32px';
    ring.style.height      = '32px';
    ring.style.borderColor = 'rgba(201,115,106,0.45)';
  });
});

/* ── SCROLL REVEAL ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
