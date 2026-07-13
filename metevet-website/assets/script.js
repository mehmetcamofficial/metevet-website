const header = document.querySelector(".site-header");
const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  document.body.classList.toggle("menu-open", open);
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("appointmentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = data.get("name");
  const phone = data.get("phone");
  const pet = data.get("pet") || "-";
  const service = data.get("service");
  const message = data.get("message") || "-";

  const text = `Merhaba MeteVet,%0A%0ARandevu talebi oluşturmak istiyorum.%0AAd Soyad: ${encodeURIComponent(name)}%0ATelefon: ${encodeURIComponent(phone)}%0AEvcil Dostum: ${encodeURIComponent(pet)}%0AHizmet: ${encodeURIComponent(service)}%0ANot: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/905000000000?text=${text}`, "_blank");
});
