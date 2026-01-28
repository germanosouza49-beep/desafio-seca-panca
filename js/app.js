// Accordion Functionality
document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const accordionItem = header.parentElement;
      const accordionContent = header.nextElementSibling;
      const isActive = header.classList.contains('active');

      // Close all other accordion items
      document.querySelectorAll('.accordion-header').forEach(otherHeader => {
        if (otherHeader !== header) {
          otherHeader.classList.remove('active');
          otherHeader.nextElementSibling.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isActive) {
        header.classList.remove('active');
        accordionContent.style.maxHeight = null;
      } else {
        header.classList.add('active');
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      }
    });
  });

  // Carousel Navigation
  document.querySelectorAll('.carousel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const trackId = btn.getAttribute('data-carousel');
      const track = document.getElementById(trackId);
      if (!track) return;

      const scrollAmount = 350;
      const direction = btn.classList.contains('carousel-btn-next') ? 1 : -1;
      track.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
    });
  });

  // Auto-scroll Galeria de Depoimentos
  const galeriaTrack = document.getElementById('galeria-carousel');
  if (galeriaTrack) {
    let autoScrollInterval = setInterval(() => {
      const maxScroll = galeriaTrack.scrollWidth - galeriaTrack.clientWidth;
      if (galeriaTrack.scrollLeft >= maxScroll - 5) {
        galeriaTrack.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        galeriaTrack.scrollBy({ left: 320, behavior: 'smooth' });
      }
    }, 3000);

    galeriaTrack.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
    galeriaTrack.addEventListener('mouseleave', () => {
      autoScrollInterval = setInterval(() => {
        const maxScroll = galeriaTrack.scrollWidth - galeriaTrack.clientWidth;
        if (galeriaTrack.scrollLeft >= maxScroll - 5) {
          galeriaTrack.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          galeriaTrack.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }, 3000);
    });
  }

  // Sales Progress Logic
  const percentEl = document.getElementById('sales-percent');
  const fillEl = document.getElementById('sales-fill');

  if (percentEl && fillEl) {
    const today = new Date();
    const day = today.getDate();
    // Logic: Base 50% + Day of Month (cap at 96% to never be full 100 until sold out manually)
    let percent = 50 + day;
    if (percent > 96) percent = 96;

    // Set initial state (for animation)
    fillEl.style.width = '0%';

    // Animate after short delay
    setTimeout(() => {
      percentEl.textContent = percent + "%";
      fillEl.style.width = percent + "%";
    }, 500);
  }
});
