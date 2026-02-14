document.addEventListener("DOMContentLoaded", () => {
  fetch("https://enomen.one/resources/navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
      const navbar = document.querySelector(".navbar");

      if (navbar) {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 40) navbar.classList.add("scrolled");
          else navbar.classList.remove("scrolled");
        });
      }
    })
    .catch(err => console.error("Navbar fetch failed:", err));

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
      const id = this.getAttribute("href");
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior:'smooth', block:'start' });
    });
  });
});
