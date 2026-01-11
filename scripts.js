const toggle = document.querySelector(".radial-toggle");
const items = document.querySelectorAll(".radial-menu span");

let open = false;

toggle.addEventListener("click", () => {
  open = !open;

  const start = Math.PI * 0.9;   // 200°
  const end   = Math.PI * 1.6;   // 325°
  const step  = (end - start) / (items.length - 1);

  items.forEach((item, i) => {
    const angle = start + step * i;
    const radius = open ? 120 : 0;

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    item.style.transform = `translate(${x}px, ${y}px) scale(${open ? 1 : 0})`;
    item.style.opacity = open ? 1 : 0;
  });
});

/* Scroll */
items.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // ⬅ stops toggle click
    document.querySelector(btn.dataset.target)
      .scrollIntoView({ behavior: "smooth" });
  });
});
