/* ============================================
   Career Presentation — Slide Engine
   Keyboard, click, touch, and swipe navigation
   ============================================ */

(function () {
  'use strict';

  const deck = document.querySelector('.deck');
  const slides = Array.from(deck.querySelectorAll('.slide'));
  const progress = document.querySelector('.progress');
  const counter = document.querySelector('.slide-counter');
  const total = slides.length;

  let current = 0;
  let isAnimating = false;
  const ANIM_DURATION = 500; // ms, matches CSS transition

  /* ---------- helpers ---------- */

  function updateProgress() {
    const pct = ((current + 1) / total) * 100;
    progress.style.width = pct + '%';
    counter.textContent = (current + 1) + ' / ' + total;
  }

  function revealFragments(slide) {
    const frags = slide.querySelectorAll('.fragment');
    frags.forEach(function (f) {
      f.classList.add('visible');
    });
  }

  function hideFragments(slide) {
    const frags = slide.querySelectorAll('.fragment');
    frags.forEach(function (f) {
      f.classList.remove('visible');
    });
  }

  function goTo(index, direction) {
    if (index < 0 || index >= total || index === current) return;

    // If already animating, instantly finish the previous transition
    slides.forEach(function (s) {
      s.classList.remove('exit-left');
    });

    var prev = slides[current];
    var next = slides[index];

    // Determine exit direction class
    if (direction === 'forward') {
      prev.classList.add('exit-left');
    }

    prev.classList.remove('active');
    hideFragments(prev);

    // Set up enter direction
    if (direction === 'backward') {
      next.style.transform = 'translateX(-60px)';
    }

    // Force reflow so the transform applies before transition
    void next.offsetWidth;
    next.style.transform = '';
    next.classList.add('active');

    current = index;
    updateProgress();

    // Reveal fragments with stagger
    setTimeout(function () {
      revealFragments(next);
    }, 150);

    setTimeout(function () {
      next.classList.remove('exit-left');
    }, ANIM_DURATION);
  }

  function next() {
    goTo(current + 1, 'forward');
  }

  function prev() {
    goTo(current - 1, 'backward');
  }

  /* ---------- keyboard ---------- */

  document.addEventListener('keydown', function (e) {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case ' ':
      case 'PageDown':
        e.preventDefault();
        next();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        prev();
        break;
      case 'r':
      case 'Home':
        e.preventDefault();
        goTo(0, 'backward');
        break;
      case 'End':
        e.preventDefault();
        goTo(total - 1, 'forward');
        break;
    }
  });

  /* ---------- click navigation (left/right halves) ---------- */

  deck.addEventListener('click', function (e) {
    // Don't navigate if clicking on interactive elements
    if (e.target.closest('a, button, input, textarea, .no-nav')) return;

    var x = e.clientX;
    var w = window.innerWidth;
    if (x < w * 0.3) {
      prev();
    } else if (x > w * 0.7) {
      next();
    }
  });

  /* ---------- touch / swipe ---------- */

  var touchStartX = 0;
  var touchStartY = 0;
  var touchStartTime = 0;

  deck.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
    touchStartTime = Date.now();
  }, { passive: true });

  deck.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - touchStartX;
    var dy = e.changedTouches[0].clientY - touchStartY;
    var dt = Date.now() - touchStartTime;

    // Need a horizontal swipe of at least 50px within 500ms
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) && dt < 500) {
      if (dx < 0) {
        next();
      } else {
        prev();
      }
    }
  }, { passive: true });

  /* ---------- URL hash support ---------- */

  function readHash() {
    var hash = window.location.hash.replace('#', '');
    var n = parseInt(hash, 10);
    if (!isNaN(n) && n >= 1 && n <= total) {
      current = n - 1;
    }
  }

  function writeHash() {
    history.replaceState(null, '', '#' + (current + 1));
  }

  // Update hash on navigation
  var origGoTo = goTo;
  goTo = function (index, direction) {
    origGoTo(index, direction);
    writeHash();
  };

  /* ---------- init ---------- */

  readHash();
  slides[current].classList.add('active');
  updateProgress();

  // Reveal fragments on first slide after a brief delay
  setTimeout(function () {
    revealFragments(slides[current]);
  }, 300);

  // Hide nav hint after first navigation
  var navHint = document.querySelector('.nav-hint');
  if (navHint) {
    var hideHint = function () {
      navHint.style.opacity = '0';
      setTimeout(function () { navHint.style.display = 'none'; }, 500);
      document.removeEventListener('keydown', hideHint);
      deck.removeEventListener('click', hideHint);
    };
    // Hide after 8 seconds or first interaction
    setTimeout(hideHint, 8000);
    document.addEventListener('keydown', hideHint);
    deck.addEventListener('click', hideHint);
  }

})();
