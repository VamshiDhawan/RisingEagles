(function () {
  var btn = document.getElementById('menuBtn'), ov = document.getElementById('overlay'), ico = document.getElementById('menuIco'), txt = document.getElementById('menuTxt');
  function setMenu(open) {
    ov.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    txt.textContent = open ? 'Close' : 'Menu';
    ico.innerHTML = open ? '<path d="M5 5l14 14M19 5L5 19"/>' : '<path d="M3 6h18M3 12h18M3 18h18"/>';
  }
  btn.addEventListener('click', function () { setMenu(!ov.classList.contains('open')); });
  ov.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  var links = {};
  document.querySelectorAll('#links a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          Object.keys(links).forEach(function (k) { links[k].classList.remove('on'); });
          if (links[e.target.id]) links[e.target.id].classList.add('on');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('.panel').forEach(function (s) { io.observe(s); });
  }

  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var n = document.getElementById('note-msg');
    if (!document.getElementById('email').value.trim() || !document.getElementById('msg').value.trim()) { n.textContent = 'Add your email and a message so we can reply.'; return; }
    n.textContent = 'This form is not connected to an inbox yet. Connect it before launch.';
  });

  var c = document.getElementById('embers');
  if (c && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var x = c.getContext('2d'), W, H, P = [];
    function size() { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight; }
    size(); window.addEventListener('resize', size);
    function mk(init) { return { x: Math.random() * W, y: init ? Math.random() * H : H + 10, r: Math.random() * 2.4 + .6, v: Math.random() * .9 + .3, d: Math.random() * 2 - 1, a: Math.random() * .6 + .4 }; }
    for (var i = 0; i < 60; i++) P.push(mk(true));
    (function tick() {
      x.clearRect(0, 0, W, H);
      P.forEach(function (p, i) {
        p.y -= p.v; p.x += Math.sin(p.y / 40) * .5 + p.d * .2; p.a -= .001;
        if (p.y < -10 || p.a <= 0) P[i] = mk(false);
        x.beginPath(); x.fillStyle = 'rgba(255,' + (110 + Math.floor(p.a * 100)) + ',20,' + p.a + ')';
        x.arc(p.x, p.y, p.r, 0, 6.283); x.fill();
      });
      requestAnimationFrame(tick);
    })();
  }
})();
