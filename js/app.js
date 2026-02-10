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

  // Sales Progress Logic - Live Increment (90% to 110%)
  const percentEl = document.getElementById('sales-percent');
  const fillEl = document.getElementById('sales-fill');
  const statusEl = document.getElementById('sales-status');
  const urgencyEl = document.getElementById('sales-urgency-text');

  if (percentEl && fillEl) {
    // Seed deterministica baseada no dia (mesmo valor para todos os usuarios no mesmo dia)
    const today = new Date();
    const daySeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const pseudoRandom = ((daySeed * 9301 + 49297) % 233280) / 233280; // LCG simples
    const basePercent = 90 + (pseudoRandom * 10); // 90% a 100%

    // Recuperar ou inicializar valor da sessao
    let currentPercent = parseFloat(sessionStorage.getItem('salesPercent'));
    const sessionStart = parseInt(sessionStorage.getItem('salesSessionStart'));

    if (!currentPercent || !sessionStart) {
      currentPercent = basePercent;
      sessionStorage.setItem('salesPercent', currentPercent.toString());
      sessionStorage.setItem('salesSessionStart', Date.now().toString());
    }

    // Calcular incremento baseado no tempo decorrido na sessao (para manter consistencia ao recarregar)
    const elapsedMs = Date.now() - (sessionStart || Date.now());
    const elapsedIntervals = Math.floor(elapsedMs / 30000); // ~30s por intervalo medio
    const catchUpIncrement = elapsedIntervals * 0.25; // 0.25% por intervalo
    currentPercent = Math.min(currentPercent + catchUpIncrement, 110);
    sessionStorage.setItem('salesPercent', currentPercent.toString());

    // Funcao para atualizar display
    function updateSalesDisplay(percent) {
      const displayPercent = Math.round(percent);
      percentEl.textContent = displayPercent + '%';

      // Barra: escalar para caber no container (110% da barra = 100% do container)
      const barWidth = (percent / 110) * 100;
      fillEl.style.width = barWidth + '%';

      // Classe de overflow (glow pulsante quando > 100%)
      if (percent >= 100) {
        fillEl.classList.add('overflowing');
      } else {
        fillEl.classList.remove('overflowing');
      }

      // Status badge
      if (statusEl) {
        if (percent >= 105) {
          statusEl.textContent = 'LOTADO';
          statusEl.style.color = '#EF4444';
          statusEl.style.background = 'rgba(239, 68, 68, 0.15)';
        } else if (percent >= 100) {
          statusEl.textContent = 'ESGOTADO';
          statusEl.style.color = '#EF4444';
          statusEl.style.background = 'rgba(239, 68, 68, 0.15)';
        } else {
          statusEl.textContent = 'ESGOTANDO';
          statusEl.style.color = '#F59E0B';
          statusEl.style.background = 'rgba(245, 158, 11, 0.15)';
        }
      }

      // Texto de urgencia
      if (urgencyEl) {
        if (percent >= 105) {
          urgencyEl.textContent = 'Lote 1 LOTADO - encerrando a qualquer momento';
        } else if (percent >= 100) {
          urgencyEl.textContent = 'Lote 1 oficialmente esgotado - ultimas vagas extras';
        } else {
          urgencyEl.textContent = 'Poucas vagas restantes neste lote';
        }
      }
    }

    // Animacao inicial (de 0 para o valor atual)
    fillEl.style.width = '0%';
    setTimeout(function () {
      updateSalesDisplay(currentPercent);
    }, 500);

    // Incremento ao vivo durante a sessao
    function scheduleIncrement() {
      // Intervalo aleatorio entre 15 e 45 segundos
      var delay = (Math.random() * 30 + 15) * 1000;

      setTimeout(function () {
        if (currentPercent < 110) {
          // Incremento entre 0.1% e 0.5%
          var increment = Math.random() * 0.4 + 0.1;
          currentPercent = Math.min(currentPercent + increment, 110);
          sessionStorage.setItem('salesPercent', currentPercent.toString());
          updateSalesDisplay(currentPercent);
        }
        scheduleIncrement();
      }, delay);
    }

    scheduleIncrement();
  }
});
