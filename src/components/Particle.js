import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        pointerEvents: "none", // <--- this allows clicks to pass through
      }}
      params={{
        particles: {
          number: {
            value: window.innerWidth < 768 ? 80 : 160, // fewer particles on mobile
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: window.innerWidth < 768 ? 0.02 : 0.05, // slower on mobile
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
