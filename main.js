document.querySelectorAll('.sidebar-cont a').forEach(function(link) {
    link.onclick = function() {
        document.querySelector('.sidebar-cont').style.display = 'none';
        document.body.style.overflow = '';
    };
});

document.querySelector('.svg2').onclick = function(link) {
    document.querySelector('.sidebar-cont').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}



  const counters = document.querySelectorAll('.counter');
let counted = false;

function animateCounters() {
  if (counted) return;

  counters.forEach(counter => {
    const rect = counter.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight;

    if (isVisible) {
      const target = +counter.dataset.target;
      let count = 0;
      const speed = 100;

      const update = () => {
        const increment = Math.ceil(target / speed);
        if (count < target) {
          count += increment;
          counter.textContent = count;
          requestAnimationFrame(update);
        } else {
          counter.textContent = target + '+';
        }
      };

      update();
    }
  });

  counted = true;
}

window.addEventListener('scroll', animateCounters);

