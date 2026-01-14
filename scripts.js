const toggle = document.querySelector(".radial-toggle");
const items = document.querySelectorAll(".radial-menu span");

let open = false;

toggle.addEventListener("click", () => {
  open = !open;
  
  // Responsive Radius: Smaller radius for mobile screens
  const isMobile = window.innerWidth <= 768;
  const radius = open ? (isMobile ? 90 : 120) : 0; 

  // Adjust angles slightly for mobile to keep buttons on screen
  const start = Math.PI * (isMobile ? 1.0 : 0.9);   
  const end   = Math.PI * (isMobile ? 1.5 : 1.6);   
  const step  = (end - start) / (items.length - 1);

  items.forEach((item, i) => {
    const angle = start + step * i;

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    item.style.transform = `translate(${x}px, ${y}px) scale(${open ? 1 : 0})`;
    item.style.opacity = open ? 1 : 0;
  });
});

/* Scroll Smoothly */
items.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    // Close menu after clicking a link
    if(open) toggle.click(); 
    
    document.querySelector(btn.dataset.target)
      .scrollIntoView({ behavior: "smooth" });
  });
});