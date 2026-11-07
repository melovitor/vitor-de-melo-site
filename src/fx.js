// Partículas de luz ao fundo: leves (sprite pré-desenhado), proporcionais à tela e com movimento próprio.
export function startDust(canvas, { count = 110, lite = false } = {}) {
  const c = canvas.getContext('2d');
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  let w, h, dpr, scale, parts = [], scroll = 0, raf, last = 0;

  // sprite do brilho, desenhado uma única vez
  const S = 64, sprite = document.createElement('canvas');
  sprite.width = sprite.height = S;
  const sc = sprite.getContext('2d'), g = sc.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  g.addColorStop(0, 'rgba(190,250,255,1)'); g.addColorStop(0.3, 'rgba(34,227,245,.38)'); g.addColorStop(1, 'rgba(34,227,245,0)');
  sc.fillStyle = g; sc.fillRect(0, 0, S, S);

  const seed = () => ({ x: Math.random(), y: Math.random(), z: Math.random() * 0.9 + 0.1, s: Math.random() * 6.28 });
  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, lite ? 1.5 : 2);
    w = canvas.width = innerWidth * dpr; h = canvas.height = innerHeight * dpr;
    scale = Math.min(1, Math.max(0.42, innerWidth / 1440)); // celular: partículas proporcionais à tela
    if (!parts.length) parts = Array.from({ length: count }, seed);
  };
  resize(); addEventListener('resize', resize);
  addEventListener('mousemove', (e) => { mouse.tx = e.clientX / innerWidth - 0.5; mouse.ty = e.clientY / innerHeight - 0.5; });
  addEventListener('scroll', () => (scroll = scrollY), { passive: true });

  const frame = (now) => {
    raf = requestAnimationFrame(frame);
    if (lite && now - last < 33) return; // ~30 fps no celular
    const dt = Math.min((now - last) / 1000, 0.1) || 0.016; last = now;
    mouse.x += (mouse.tx - mouse.x) * 0.05; mouse.y += (mouse.ty - mouse.y) * 0.05;
    c.clearRect(0, 0, w, h);
    c.globalCompositeOperation = 'lighter';
    for (const p of parts) {
      p.y -= (0.018 + 0.05 * p.z) * dt; // sobe sozinha (tela/segundo)
      if (p.y < -0.06) { p.y = 1.06; p.x = Math.random(); }
      const sway = Math.sin(now / 2600 + p.s) * 0.018 * p.z;
      const x = (((p.x + sway - mouse.x * 0.08 * p.z) % 1 + 1) % 1) * w;
      const y = (((p.y - scroll * 0.00008 * p.z) % 1 + 1) % 1) * h - mouse.y * 60 * p.z * dpr;
      const r = (1 + p.z * 2.4) * dpr * scale * 4;
      c.globalAlpha = Math.min(1, 0.2 + p.z * 0.5 * (0.6 + 0.4 * Math.sin(now / 900 + p.s)));
      c.drawImage(sprite, x - r, y - r, r * 2, r * 2);
    }
    c.globalAlpha = 1;
  };
  raf = requestAnimationFrame(frame);
  document.addEventListener('visibilitychange', () => { cancelAnimationFrame(raf); if (!document.hidden) raf = requestAnimationFrame(frame); });
}
