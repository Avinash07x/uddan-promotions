import { useEffect } from "react";

export default function CurlyCursor() {
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const colors = ["#D61C59", "#E7D84B", "#1B8798"];
    let particles = [];
    let lastTime = 0;

    // ========================
    // 🎯 Main Cursor Dot
    // ========================
    const cursor = document.createElement("div");

    Object.assign(cursor.style, {
      position: "fixed",
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "#E7FF00",
      pointerEvents: "none",
      zIndex: 10000,
      left: "0px",
      top: "0px",
    });

    document.body.appendChild(cursor);

    // ========================
    // ✨ Particle Create (FIXED ALIGN)
    // ========================
    const createParticle = (x, y) => {
      const el = document.createElement("span");
      el.innerHTML = "*";

      Object.assign(el.style, {
        position: "fixed",
        left: x + "px",
        top: y + "px",
        color: colors[Math.floor(Math.random() * colors.length)],
        pointerEvents: "none",
        fontSize: "14px",
        zIndex: 9999,
        willChange: "transform, opacity",
      });

      document.body.appendChild(el);

      return {
        el,
        x,
        y,
        life: 60,
        vx: (Math.random() - 0.5) * 1,
        vy: Math.random() * 1.5,
      };
    };

    // ========================
    // 🖱️ Mouse Move
    // ========================
    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // 🔥 dot EXACT same point
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";

      // throttle
      const now = performance.now();
      if (now - lastTime > 16) {
        lastTime = now;

        if (particles.length > 50) {
          const old = particles.shift();
          old.el.remove();
        }

        particles.push(createParticle(x, y));
      }
    };

    window.addEventListener("mousemove", move);

    // ========================
    // 🎯 Animation Loop
    // ========================
    let rafId;

    const animate = () => {
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life--;

        if (p.life <= 0) {
          p.el.remove();
          particles.splice(i, 1);
        } else {
          p.el.style.transform = `translate(${p.x - parseFloat(p.el.style.left)}px, ${
            p.y - parseFloat(p.el.style.top)
          }px) scale(${p.life / 60})`;
          p.el.style.opacity = p.life / 60;
        }
      });

      rafId = requestAnimationFrame(animate);
    };

    animate();

    // ========================
    // 🧲 Hover Effect
    // ========================
    const hoverElements = document.querySelectorAll(
      "a, button, input, textarea"
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(2)";
        cursor.style.background = "#fff";
      });

      el.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
        cursor.style.background = "#E7FF00";
      });
    });

    // ========================
    // 🧹 Cleanup
    // ========================
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafId);
      cursor.remove();
      particles.forEach((p) => p.el.remove());
    };
  }, []);

  return null;
}