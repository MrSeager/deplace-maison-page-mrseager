"use client";

import { useEffect } from "react";

export default function InvertCursor() {
  useEffect(() => {
    const circles = Array.from(
      document.querySelectorAll(".trail-circle")
    ) as HTMLElement[];

    const positions = circles.map(() => ({ x: 0, y: 0 }));

    window.addEventListener("mousemove", (e) => {
      positions[0].x = e.clientX;
      positions[0].y = e.clientY;
    });

    function animate() {
      circles.forEach((circle, i) => {
        const current = positions[i];
        const next = positions[i - 1] || positions[0];

        current.x += (next.x - current.x) * 0.25;
        current.y += (next.y - current.y) * 0.25;

        circle.style.transform = `translate(${current.x}px, ${current.y}px)`;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div
      className="
        hidden
        lg:block
        pointer-events-none
        fixed top-0 left-0
        mix-blend-difference
        z-[9999]
      "
    >
      {/* MAIN CIRCLE */}
      <div
        className="
          trail-circle
          absolute
          w-10 h-10
          rounded-full
          bg-white
        "
        style={{ marginLeft: "-20px", marginTop: "-20px" }}
      />

      {/* TRAIL CIRCLES */}
      {[...Array(6)].map((_, i) => {
        const size = 30 - i * 3;

        return (
          <div
            key={i}
            className="
              trail-circle
              absolute
              rounded-full
              duration-0
              bg-white
            "
            style={{
              width: size,
              height: size,
              marginLeft: -(size / 2),
              marginTop: -(size / 2),
              opacity: 0.7 - i * 0.1,
            }}
          />
        );
      })}
    </div>
  );
}
