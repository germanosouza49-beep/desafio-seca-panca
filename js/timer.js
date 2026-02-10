// ==========================================
// COUNTDOWN TIMER
// ==========================================

class CountdownTimer {
  constructor(targetDate, elementId) {
    this.targetDate = new Date(targetDate).getTime();
    this.elementId = elementId;
    this.interval = null;
  }

  start() {
    this.updateTimer();
    this.interval = setInterval(() => this.updateTimer(), 1000);
  }

  updateTimer() {
    const now = new Date().getTime();
    const distance = this.targetDate - now;

    if (distance < 0) {
      this.stop();
      this.displayExpired();
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.displayTime(days, hours, minutes, seconds);
  }

  displayTime(days, hours, minutes, seconds) {
    const element = document.getElementById(this.elementId);
    if (!element) return;

    element.innerHTML = `
      <div class="timer-box">
        <span class="timer-value">${this.padZero(days)}</span>
        <span class="timer-label">dias</span>
      </div>
      <div class="timer-separator">:</div>
      <div class="timer-box">
        <span class="timer-value">${this.padZero(hours)}</span>
        <span class="timer-label">horas</span>
      </div>
      <div class="timer-separator">:</div>
      <div class="timer-box">
        <span class="timer-value">${this.padZero(minutes)}</span>
        <span class="timer-label">min</span>
      </div>
      <div class="timer-separator">:</div>
      <div class="timer-box">
        <span class="timer-value">${this.padZero(seconds)}</span>
        <span class="timer-label">seg</span>
      </div>
    `;
  }

  displayExpired() {
    const element = document.getElementById(this.elementId);
    if (!element) return;
    element.innerHTML = '<span class="timer-expired">Oferta Encerrada</span>';
  }

  padZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}

// ==========================================
// CONTADOR DE VAGAS
// ==========================================

class VagasCounter {
  constructor(totalVagas, vagasRestantes, elementId, progressBarId) {
    this.totalVagas = totalVagas;
    this.vagasRestantes = vagasRestantes;
    this.elementId = elementId;
    this.progressBarId = progressBarId;
  }

  init() {
    this.updateDisplay();
    this.animateVagasDecrease();
  }

  updateDisplay() {
    const percentFilled = ((this.totalVagas - this.vagasRestantes) / this.totalVagas) * 100;

    // Atualizar texto
    const textElement = document.getElementById(this.elementId);
    if (textElement) {
      textElement.textContent = `${Math.round(percentFilled)}%`;
    }

    // Atualizar barra de progresso
    const progressBar = document.getElementById(this.progressBarId);
    if (progressBar) {
      progressBar.style.width = `${percentFilled}%`;
    }
  }

  animateVagasDecrease() {
    // Simula diminuição de vagas ao longo do tempo (a cada 5-10 minutos)
    const decreaseInterval = (Math.random() * 5 + 5) * 60 * 1000; // 5-10 minutos

    setInterval(() => {
      if (this.vagasRestantes > 0) {
        this.vagasRestantes -= Math.floor(Math.random() * 2 + 1); // Diminui 1-2 vagas
        if (this.vagasRestantes < 0) this.vagasRestantes = 0;
        this.updateDisplay();
      }
    }, decreaseInterval);
  }
}

// ==========================================
// EXIT INTENT DETECTION
// ==========================================

class ExitIntent {
  constructor(callback) {
    this.callback = callback;
    this.triggered = false;
    this.init();
  }

  init() {
    document.addEventListener('mouseleave', (e) => {
      if (e.clientY <= 0 && !this.triggered) {
        this.triggered = true;
        this.callback();
      }
    });
  }

  reset() {
    this.triggered = false;
  }
}

// ==========================================
// SCROLL TRACKING
// ==========================================

class ScrollTracker {
  constructor() {
    this.milestones = [25, 50, 75, 100];
    this.tracked = new Set();
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => this.checkScroll());
  }

  checkScroll() {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    this.milestones.forEach(milestone => {
      if (scrollPercent >= milestone && !this.tracked.has(milestone)) {
        this.tracked.add(milestone);
        this.trackEvent(`scroll_${milestone}`);
      }
    });
  }

  trackEvent(eventName) {
    // Integração com analytics (Google Analytics, Facebook Pixel, etc.)
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        event_category: 'Scroll',
        event_label: `${eventName}%`
      });
    }
    console.log(`Scroll Event: ${eventName}`);
  }
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // Countdown Timer - Data do segundo lote (exemplo: 5 dias a partir de hoje)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 5);

  // Timer na sticky bar
  const stickyTimer = new CountdownTimer(targetDate, 'countdown-timer-sticky');
  stickyTimer.start();

  // Timer na seção de pricing
  const pricingTimer = new CountdownTimer(targetDate, 'countdown-timer-pricing');
  pricingTimer.start();

  // Timer na seção final
  const finalTimer = new CountdownTimer(targetDate, 'countdown-timer-final');
  finalTimer.start();

  // Contador de Vagas (desativado - logica movida para app.js)
  // const vagasCounter = new VagasCounter(500, 125, 'sales-percent', 'sales-fill');
  // vagasCounter.init();

  // Scroll Tracking
  const scrollTracker = new ScrollTracker();

  // Exit Intent (opcional - descomente para ativar)
  // const exitIntent = new ExitIntent(() => {
  //   console.log('Exit intent detected!');
  //   // Aqui você pode mostrar um popup ou oferta especial
  // });
});
