/* ============================================================
   MAITREE FOODS — Main JavaScript
   100% Pure Vegetarian Catering, Pune
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------------------------
     1. STICKY HEADER — add shadow on scroll
  ---------------------------------------------------------- */
  const header = document.getElementById('siteHeader');

  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ----------------------------------------------------------
     2. MOBILE MENU — toggle open/close
  ---------------------------------------------------------- */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', isOpen);
      // Animate hamburger lines
      hamburger.classList.toggle('is-active', isOpen);
    });

    // Close when a mobile link is clicked
    mobileMenu.querySelectorAll('.mobile-menu__link').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('is-open');
        hamburger.classList.remove('is-active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (!header.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('is-open');
        hamburger.classList.remove('is-active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ----------------------------------------------------------
     3. ACTIVE NAV LINK — highlight current page
  ---------------------------------------------------------- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav__link, .mobile-menu__link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && href === currentPath) {
      link.classList.add('active');
    }
  });

  /* ----------------------------------------------------------
     4. SMOOTH SCROLL — for anchor links on menu page
  ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 150; // header + menu-nav height
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ----------------------------------------------------------
     5. CONTACT FORM — handle submission
  ---------------------------------------------------------- */
  const contactForm   = document.getElementById('contactForm');
  const formSuccess   = document.getElementById('formSuccess');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic validation
      const required = contactForm.querySelectorAll('[required]');
      let valid = true;

      required.forEach(function (field) {
        if (!field.value.trim()) {
          field.style.borderColor = '#C0392B';
          valid = false;
        } else {
          field.style.borderColor = '';
        }
      });

      if (!valid) return;

      // Simulate submission
      const submitBtn = contactForm.querySelector('.form-submit');
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(function () {
        contactForm.reset();
        formSuccess.style.display = 'block';
        submitBtn.textContent = 'Send Enquiry';
        submitBtn.disabled = false;
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 900);
    });

    // Live validation — remove red border when user starts typing
    contactForm.querySelectorAll('input, select, textarea').forEach(function (field) {
      field.addEventListener('input', function () {
        this.style.borderColor = '';
      });
    });
  }

  /* ----------------------------------------------------------
     6. MENU NAV — highlight active category on scroll
  ---------------------------------------------------------- */
  const menuNavLinks = document.querySelectorAll('.menu-nav__link');
  const menuSections = document.querySelectorAll('.menu-section');

  if (menuNavLinks.length && menuSections.length) {
    function setActiveMenuLink () {
      let current = '';
      menuSections.forEach(function (section) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 180) {
          current = '#' + section.getAttribute('id');
        }
      });

      menuNavLinks.forEach(function (link) {
        link.style.color = '';
        link.style.borderBottomColor = '';
        if (link.getAttribute('href') === current) {
          link.style.color = 'var(--maroon)';
          link.style.borderBottomColor = 'var(--gold)';
        }
      });
    }

    window.addEventListener('scroll', setActiveMenuLink, { passive: true });
    setActiveMenuLink();
  }

  /* ----------------------------------------------------------
     7. SCROLL REVEAL — fade up elements on scroll
  ---------------------------------------------------------- */
  const revealEls = document.querySelectorAll(
    '.service-card, .dish-card, .testimonial-card, .value-card, .about__point, .stat-item'
  );

  if ('IntersectionObserver' in window && revealEls.length) {
    // Set initial hidden state
    revealEls.forEach(function (el, i) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease ' + (i % 4) * 0.1 + 's, transform 0.5s ease ' + (i % 4) * 0.1 + 's';
    });

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ----------------------------------------------------------
     8. STAT COUNTER ANIMATION — animate numbers on scroll
  ---------------------------------------------------------- */
  const statNums = document.querySelectorAll('.stat-item__num');

  if ('IntersectionObserver' in window && statNums.length) {
    const statsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const el      = entry.target;
          const rawText = el.textContent.trim();
          const suffix  = rawText.replace(/[0-9]/g, '');   // e.g. "+", "%"
          const target  = parseInt(rawText, 10);

          if (isNaN(target)) return;

          let current = 0;
          const step  = Math.ceil(target / 40);
          const timer = setInterval(function () {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = current + suffix;
          }, 30);

          statsObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statNums.forEach(function (el) {
      statsObserver.observe(el);
    });
  }

  /* ----------------------------------------------------------
     9. HERO SCROLL INDICATOR — hide on scroll
  ---------------------------------------------------------- */
  const heroScroll = document.querySelector('.hero__scroll');

  if (heroScroll) {
    window.addEventListener('scroll', function () {
      heroScroll.style.opacity = window.scrollY > 100 ? '0' : '1';
    }, { passive: true });
  }

});

/* ----------------------------------------------------------
   HERO FADE SLIDER
---------------------------------------------------------- */

const slides = document.querySelectorAll('.hero__slide');

if (slides.length) {
  const images = [
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1800&q=80",
    "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=1800&q=80",
    "https://images.unsplash.com/photo-1555244162-803834f70033?w=1800&q=80"
  ];

  slides.forEach((slide, index) => {
    slide.style.backgroundImage = `url(${images[index]})`;
  });

  let current = 0;

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 6000);
}

/* ----------------------------------------------------------
   CULINARY HIGHLIGHT SLIDER
---------------------------------------------------------- */

const track = document.querySelector('.highlight-track');
const slide = document.querySelectorAll('.highlight-card');
const nextBtn = document.querySelector('.slider-btn.next');
const prevBtn = document.querySelector('.slider-btn.prev');

if (track && slides.length) {

  let index = 0;

  function updateSlide() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlide();
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  let autoSlide = setInterval(nextSlide, 6000);

  const slider = document.querySelector('.highlight-slider');

  slider.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
  });

  slider.addEventListener('mouseleave', () => {
    autoSlide = setInterval(nextSlide, 7000);
  });
}