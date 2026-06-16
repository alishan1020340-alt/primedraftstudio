// Sticky Navbar Shadow
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Fade In Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".card, .portfolio-item, .stat, .about, .contact").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s ease";
  observer.observe(el);
});

// Counter Animation
const counters = document.querySelectorAll(".stat h3");
let started = false;

window.addEventListener("scroll", () => {
  const statsSection = document.querySelector(".stats");
  if (window.scrollY > statsSection.offsetTop - 400 && !started) {
    counters.forEach(counter => {
      const target = parseInt(counter.innerText);
      let count = 0;
      const updateCounter = () => {
        const increment = target / 100;
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count) + "+";
          setTimeout(updateCounter, 20);
        } else {
          counter.innerText = target + "+";
        }
      };
      updateCounter();
    });
    started = true;
  }
});

// Contact Form
const form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for contacting PrimeDraft Studio. We will get back to you soon.");
  form.reset();
});

// Lightbox
function openLightbox(item) {
  const img = item.querySelector('img');
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close lightbox with ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});
