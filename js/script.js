let lightContainer = document.querySelector('.light_container');
let woman = document.querySelector('.woman');

for (let i = 0; i < 30; i++) {
  const div = document.createElement('div');
  div.className = 'allDivs absolute';
  lightContainer.appendChild(div);
}

gsap.fromTo('.allDivs', {
  x: 'random(0, 740)',
  y: 'random(0, 340)',
  backgroundColor: "random(['white', 'orange', 'yellow'])",

  opacity: "random(0, 0.3)"
}, {
  x: 'random(0, 740)',
  y: 'random(0, 340)',
  backgroundColor: "random(['orange', 'white', 'red'])",
  repeat: -1,
  opacity: "random(0, 0.3)",
  duration: "random(3, 4)",
  yoyo: true
});

gsap.set(woman, { x: -400, y: 0 });

gsap.to(woman, {
  keyframes: [
    { x: 1000, y: 0, duration: 8, ease: "linear" },
    { x: -400, y: 0, duration: 0 },

  ], repeat: -1,
  ease: "none"
});