function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const hexColor = '#' + ('0' + r.toString(16)).slice(-2) +
  ('0' + g.toString(16)).slice(-2) +
  ('0' + b.toString(16)).slice(-2);
  return hexColor;
}

const container = document.querySelector(".container");

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + (clientHeight+300) >= scrollHeight) {
    for (let i = 0; i < 100; i++) {
      const newColor = generateRandomColor();
      const box = document.createElement('a');
      box.classList.add('box');
      box.style.backgroundColor = newColor;
      box.setAttribute('href', `https://www.color-hex.com/color/${newColor.split('#')[1]}`);
      box.setAttribute('target', `_blank`);
      box.textContent = newColor;
      container.appendChild(box);
    }
  }
});

for (let i = 0; i < 100; i++) {
  const newColor = generateRandomColor();
  const box = document.createElement('a');
  box.classList.add('box');
  box.style.backgroundColor = newColor;
  box.setAttribute('href', `https://www.color-hex.com/color/${newColor.split('#')[1]}`);
  box.setAttribute('target', `_blank`);
  box.textContent = newColor;
  container.appendChild(box);
}