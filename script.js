// 1. Sticky Navbar Glass Effect Enhancement
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    if (window.scrollY > 50) {
      // Scroll karne par background thoda dark aur shadow deep ho jayegi
      navbar.style.background = "rgba(40, 45, 55, 0.75)"; 
      navbar.style.boxShadow = "0 10px 40px rgba(0,0,0,0.4)";
    } else {
      // Wapas top par aane par original glass effect
      navbar.style.background = "rgba(40, 45, 55, 0.5)";
      navbar.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.2)";
    }
  }
});

// 2. Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// 3. Fade In Animation
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

// 4. Counter Animation
const counters = document.querySelectorAll(".stat h3");
let started = false;

window.addEventListener("scroll", () => {
  const statsSection = document.querySelector(".stats");
  if (!statsSection) return; // Prevent error if section is missing
  
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

// 5. Contact Form
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for contacting PrimeDraft Studio. We will get back to you soon.");
    form.reset();
  });
}

// 6. Lightbox
function openLightbox(item) {
  const img = item.querySelector('img');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightbox = document.getElementById('lightbox');
  
  if (img && lightboxImg && lightbox) {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Close lightbox with ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});
