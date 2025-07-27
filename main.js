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

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.dataset.target;
        let count = 0;
        const speed = 200;

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

        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 }); 

  counters.forEach(counter => {
    observer.observe(counter);
  });


