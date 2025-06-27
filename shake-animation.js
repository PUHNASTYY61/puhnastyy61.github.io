const heading = document.gerElementById('shake-heading');
const amplitude = 15;
const speed = 0.01;
let time = 0;
function animateShake() {
  time += 1;
  const offset = Math.sin(time * speed) * amplitude;
  heading.style.transform = `translateX(${offset}px)`;
  requestAnimationFrame(animateShake);
}
animateShake();
