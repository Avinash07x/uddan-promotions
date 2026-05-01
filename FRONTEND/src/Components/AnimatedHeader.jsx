import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedHeader() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    let target = { x: width / 2, y: height / 2 };
    let points = [];
    let animateHeader = true;

    /* 🔥 CREATE POINTS */
    for (let x = 0; x < width; x += width / 20) {
      for (let y = 0; y < height; y += height / 20) {
        const px = x + Math.random() * width / 20;
        const py = y + Math.random() * height / 20;
        points.push({
          x: px,
          y: py,
          originX: px,
          originY: py,
        });
      }
    }

    /* 🔗 CLOSEST POINTS */
    points.forEach((p1) => {
      let closest = [];

      points.forEach((p2) => {
        if (p1 !== p2) {
          if (closest.length < 5) {
            closest.push(p2);
          } else {
            for (let i = 0; i < 5; i++) {
              if (getDistance(p1, p2) < getDistance(p1, closest[i])) {
                closest[i] = p2;
                break;
              }
            }
          }
        }
      });

      p1.closest = closest;
    });

    /* 🔵 CIRCLES */
    points.forEach((p) => {
      p.circle = {
        radius: 2 + Math.random() * 2,
        active: 0,
      };
    });

    /* 🎯 MOUSE MOVE */
    const mouseMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    window.addEventListener("mousemove", mouseMove);

    /* 🔄 RESIZE */
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);

    /* 🔥 SHIFT POINTS (GSAP) */
    function shiftPoint(p) {
      gsap.to(p, {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        duration: 2 + Math.random() * 2,
        ease: "sine.inOut",
        onComplete: () => shiftPoint(p),
      });
    }

    points.forEach((p) => shiftPoint(p));

    /* 🎬 ANIMATE */
    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);

        points.forEach((p) => {
          const dist = getDistance(target, p);

          if (dist < 4000) {
            p.active = 0.3;
            p.circle.active = 0.6;
          } else if (dist < 20000) {
            p.active = 0.1;
            p.circle.active = 0.3;
          } else if (dist < 40000) {
            p.active = 0.02;
            p.circle.active = 0.1;
          } else {
            p.active = 0;
            p.circle.active = 0;
          }

          drawLines(p);
          drawCircle(p);
        });
      }

      requestAnimationFrame(animate);
    }

    animate();

    /* ✏️ DRAW LINES */
    function drawLines(p) {
      if (!p.active) return;

      p.closest.forEach((c) => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(c.x, c.y);
        ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
        ctx.stroke();
      });
    }

    /* 🔵 DRAW CIRCLE */
    function drawCircle(p) {
      if (!p.circle.active) return;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.circle.radius, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(156,217,249,${p.circle.active})`;
      ctx.fill();
    }

    /* 📏 DISTANCE */
    function getDistance(p1, p2) {
      return (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;
    }

    /* 🧹 CLEANUP */
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#111]"
    >
      {/* 🎨 Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* 🧠 Center Text */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold tracking-widest text-center">
        Connect <span className="font-light">Three</span>
      </h1>
    </div>
  );
}