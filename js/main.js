$(document).ready(function () {
  const lazyImages = document.querySelectorAll("img[data-src]");
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    });
    lazyImages.forEach((img) => imageObserver.observe(img));
  }
});
