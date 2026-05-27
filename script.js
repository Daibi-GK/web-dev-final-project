document.addEventListener("DOMContentLoaded", () => {
 
  document.body.classList.add("loaded");
 
  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");
 
    if (!href || href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto")) return;
 
    link.addEventListener("click", e => {
      e.preventDefault();
 
      document.body.classList.remove("loaded");
      setTimeout(() => {
        window.location.href = href;
      }, 300); 
    });
  });
 
});
