"use client"
import Particles from "react-tsparticles";

const ParticleBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: { value: "#000000" },
        },
        fpsLimit: 60,
        particles: {
          color: { value: "#ffffff" },
          move: { enable: true, speed: 2 },
          number: { value: 80 },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 5 } },
        },
      }}
    />
  );
};

export default ParticleBackground;