const btn = document.getElementById("btn");

// Mouse enter → transform
btn.addEventListener("mouseenter", () => {
  btn.style.transform = "scale(1.1) translateY(-6px) rotate(-2deg)";
  btn.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
});

// Mouse leave → normal
btn.addEventListener("mouseleave", () => {
  btn.style.transform = "scale(1) translateY(0) rotate(0)";
  btn.style.boxShadow = "none";
});