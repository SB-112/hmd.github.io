function createConfettiPiece() {
  const confetti = document.createElement('div');
  confetti.classList.add('mothers-day-confetti');

  confetti.style.position = 'fixed';
  confetti.style.top = '-10px';
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.width = confetti.style.height = Math.random() * 8 + 6 + 'px';
  confetti.style.backgroundColor = [
    '#FF69B4', // hot pink
    '#FFD700', // gold
    '#FF4500', // orange red
    '#FFB6C1', // light pink
    '#FFFF33', // bright yellow
    '#FF00FF'  // magenta
  ][Math.floor(Math.random() * 6)];
  confetti.style.borderRadius = '50%';
  confetti.style.opacity = '0.95';
  confetti.style.pointerEvents = 'none';
  confetti.style.zIndex = '9999';
  confetti.style.animation = 'fall-md 5s linear forwards';

  document.body.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 6000);
}

window.addEventListener('load', () => {
  for (let i = 0; i < 80; i++) {
    setTimeout(createConfettiPiece, i * 50);
  }
});

const style = document.createElement('style');
style.innerHTML = `
@keyframes fall-md {
  to {
    transform: translateY(100vh) rotateZ(720deg);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);