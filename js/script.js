// Smooth scroll & active link highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 80;
    const height = sec.offsetHeight;
    const id = sec.id;

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document
          .querySelector(`.nav__list a[href*=${id}]`)
          .classList.add('active');
      });
    }
  });
});


// Project filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    projectCards.forEach(card => {
      card.style.display =
        filter === 'all' || card.dataset.category === filter
          ? 'block'
          : 'none';
    });
  });
});

const sr = ScrollReveal({
  origin: 'top',
  distance: '200px',
  duration: 2000, 
  reset: true,
});
// scroll reveal animations home section
sr.reveal('.home_data', {})
sr.reveal('.home_img', { delay: 400 });

// scroll reveal animations about section
sr.reveal('.about', { delay: 200 });
// scroll reveal project section
sr.reveal('.projects', { delay: 200 });
//scroll reveal skills section
sr.reveal('.home-icons', { delay: 200 });
//scroll reveal contact section
sr.reveal('.contact', { delay: 200 });

const srr = ScrollReveal({
  origin: 'right', 
  distance: '200px',
  duration: 2000,
  reset: true,
});
// scroll reveal animations for left side elements
srr.reveal('.home_social', {delay: 200});