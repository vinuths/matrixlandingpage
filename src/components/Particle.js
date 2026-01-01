import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,              // ✅ ALWAYS behind content
        pointerEvents: "none",  // ✅ allows buttons to work
      }}
      options={{               // ✅ NOT params
        particles: {
          number: {
            value: window.innerWidth < 768 ? 80 : 160,
            density: {
              enable: true,
              area: 1500,
            },
          },
          move: {
            direction: "right",
            speed: window.innerWidth < 768 ? 0.02 : 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            value: 0.4,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.05,
            },
          },
          links: {
            enable: false,
          },
        },
        interactivity: {
          events: {
            resize: true,
          },
        },
        retinaDetect: true,
      }}
    />
  );
}

export default Particle;
