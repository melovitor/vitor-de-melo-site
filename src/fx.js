// Partículas de luz com profundidade + rastro luminoso do mouse
const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

export function startDust(canvas, { count = 110 } = {}) {
  const c = canvas.getContext('2d');
  let w, h, dpr, parts = [], scroll = 0, raf;
  const seed = () => ({ x: Math.random(), y: Math.random(), z: Math.random() * 0.9 + 0.1, s: Math.random() * 6.28 });
  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = canvas.width = innerWidth * dpr; h = canvas.height = innerHeight * dpr;
    parts = Array.from({ length: count }, seed);
  };
  resize(); addEventListener('resize', resize);
  addEventListener('mousemove', (e) => { mouse.tx = e.clientX / innerWidth - 0.5; mouse.ty = e.clientY / innerHeight - 0.5; });
  addEventListener('scroll', () => (scroll = scrollY), { passive: true });

  const draw = (t) => {
    mouse.x += (mouse.tx - mouse.x) * 0.04; mouse.y += (mouse.ty - mouse.y) * 0.04;
    c.clearRect(0, 0, w, h);
    c.globalCompositeOperation = 'lighter';
    for (const p of parts) {
      p.y -= 0.00006 * p.z; if (p.y < -0.05) { p.y = 1.05; p.x = Math.random(); }
      const x = ((p.x + Math.sin(t / 3000 + p.s) * 0.012 - mouse.x * 0.08 * p.z) % 1 + 1) % 1 * w;
      const y = (((p.y - (scroll * 0.00008 * p.z)) % 1 + 1) % 1) * h + mouse.y * -60 * p.z * dpr;
      const r = (1 + p.z * 2.4) * dpr;
      const a = 0.18 + p.z * 0.45 * (0.6 + 0.4 * Math.sin(t / 900 + p.s));
      const g = c.createRadialGradient(x, y, 0, x, y, r * 4);
      g.addColorStop(0, `rgba(159,245,255,${a})`); g.addColorStop(0.35, `rgba(34,227,245,${a * 0.35})`); g.addColorStop(1, 'rgba(34,227,245,0)');
      c.fillStyle = g; c.beginPath(); c.arc(x, y, r * 4, 0, 6.283); c.fill();
    }
    raf = requestAnimationFrame(draw);
  };
  raf = requestAnimationFrame(draw);
  document.addEventListener('visibilitychange', () => { cancelAnimationFrame(raf); if (!document.hidden) raf = requestAnimationFrame(draw); });
}

export function startTrail(canvas) {
  const c = canvas.getContext('2d');
  let w, h, dpr; const pts = [];
  const resize = () => { dpr = Math.min(devicePixelRatio || 1, 2); w = canvas.width = innerWidth * dpr; h = canvas.height = innerHeight * dpr; };
  resize(); addEventListener('resize', resize);
  addEventListener('mousemove', (e) => pts.push({ x: e.clientX * dpr, y: e.clientY * dpr, a: 1 }));
  const draw = () => {
    c.clearRect(0, 0, w, h);
    c.globalCompositeOperation = 'lighter'; c.lineCap = 'round'; c.lineJoin = 'round';
    for (let i = pts.length - 1; i > 0; i--) {
      const p = pts[i], q = pts[i - 1];
      p.a -= 0.028;
      if (p.a <= 0) { pts.splice(0, i); break; }
      c.strokeStyle = `rgba(34,227,245,${p.a * 0.55})`; c.lineWidth = (1 + p.a * 5) * dpr;
      c.shadowBlur = 18 * dpr; c.shadowColor = 'rgba(34,227,245,.9)';
      c.beginPath(); c.moveTo(q.x, q.y); c.lineTo(p.x, p.y); c.stroke();
    }
    requestAnimationFrame(draw);
  };
  requestAnimationFrame(draw);
}
