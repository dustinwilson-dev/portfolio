"use client"

import React, { useEffect, useState } from "react";

const MouseLumination = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.pageX, y: e.pageY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: `radial-gradient(400px at ${coords.x}px ${coords.y}px, rgba(107, 73, 132, 0.15), transparent 80%)`,
      }}
    ></div>
  );
};

export default MouseLumination;
