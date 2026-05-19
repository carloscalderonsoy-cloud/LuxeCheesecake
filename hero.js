/* ============================================================
   LUXE CHEESECAKE — Hero · Tweaks panel + mode switching
   ============================================================ */
(() => {
  'use strict';

  // ---- read defaults from inline TWEAK_DEFAULTS marker ---------
  const defaults = (typeof TWEAK_DEFAULTS !== 'undefined') ? TWEAK_DEFAULTS : { mode: 'cocoa' };

  const state = { ...defaults };

  // progressive enhancement — CSS reveal gated on this class
  document.body.classList.add('js-ready');

  // ---- apply state to DOM --------------------------------------
  function apply() {
    document.body.setAttribute('data-mode', state.mode);
    // update radio UI if present
    document.querySelectorAll('[data-tweak-mode]').forEach(btn => {
      btn.setAttribute('aria-pressed', btn.dataset.tweakMode === state.mode ? 'true' : 'false');
    });
  }

  function persist() {
    try {
      window.parent.postMessage({
        type: '__edit_mode_set_keys',
        edits: { mode: state.mode }
      }, '*');
    } catch (e) { /* not embedded — ignore */ }
  }

  function setMode(mode) {
    if (!['cocoa', 'blush', 'wine'].includes(mode)) return;
    state.mode = mode;
    apply();
    persist();
  }

  // ---- build the panel UI --------------------------------------
  const root = document.getElementById('tweak-root');
  if (!root) return;

  root.innerHTML = `
    <div class="tweaks" data-open="false" role="region" aria-label="Tweaks">
      <button class="tweaks__handle" type="button" aria-label="Abrir tweaks">
        <span class="tweaks__handle-dot"></span>
        <span class="tweaks__handle-text">Tweaks</span>
      </button>

      <div class="tweaks__panel" role="dialog" aria-label="Panel de tweaks">
        <header class="tweaks__head">
          <div>
            <p class="tweaks__eyebrow">· Tweaks ·</p>
            <h3 class="tweaks__title">Modo de superficie</h3>
          </div>
          <button class="tweaks__close" type="button" aria-label="Cerrar tweaks">×</button>
        </header>

        <p class="tweaks__hint">
          El brandbook permite tres surfaces. Una vista = un modo dominante.
        </p>

        <div class="tweaks__modes" role="radiogroup" aria-label="Modo de superficie">
          <button type="button" data-tweak-mode="cocoa" class="modecard" role="radio">
            <span class="modecard__swatch modecard__swatch--cocoa">
              <span class="modecard__accent" style="background: #D4B98C"></span>
            </span>
            <span class="modecard__label">
              <strong>Cocoa</strong>
              <small>Dark editorial · default</small>
            </span>
          </button>

          <button type="button" data-tweak-mode="blush" class="modecard" role="radio">
            <span class="modecard__swatch modecard__swatch--blush">
              <span class="modecard__accent" style="background: #A88A5C"></span>
            </span>
            <span class="modecard__label">
              <strong>Blush</strong>
              <small>Soft artesanal · íntimo</small>
            </span>
          </button>

          <button type="button" data-tweak-mode="wine" class="modecard" role="radio">
            <span class="modecard__swatch modecard__swatch--wine">
              <span class="modecard__accent" style="background: #D4B98C"></span>
            </span>
            <span class="modecard__label">
              <strong>Wine</strong>
              <small>Drama eventos B2B</small>
            </span>
          </button>
        </div>

        <footer class="tweaks__foot">
          <span class="tweaks__foot-mark">·</span>
          <span class="tweaks__foot-text">LUXE Cheesecake · v2.0</span>
          <span class="tweaks__foot-mark">·</span>
        </footer>
      </div>
    </div>
  `;

  const panel = root.querySelector('.tweaks');
  const handle = root.querySelector('.tweaks__handle');
  const closeBtn = root.querySelector('.tweaks__close');

  function setOpen(open) {
    panel.setAttribute('data-open', String(open));
    if (open) {
      window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    } else {
      window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
    }
  }

  handle.addEventListener('click', () => setOpen(panel.getAttribute('data-open') !== 'true'));
  closeBtn.addEventListener('click', () => setOpen(false));

  root.querySelectorAll('[data-tweak-mode]').forEach(btn => {
    btn.addEventListener('click', () => setMode(btn.dataset.tweakMode));
  });

  // ---- host protocol -------------------------------------------
  window.addEventListener('message', (e) => {
    const m = e.data;
    if (!m || typeof m !== 'object') return;
    if (m.type === '__activate_edit_mode')   setOpen(true);
    if (m.type === '__deactivate_edit_mode') setOpen(false);
  });

  // announce availability
  window.parent.postMessage({ type: '__edit_mode_available' }, '*');

  // initial render
  apply();

  // ---- watermark parallax ----------------------------------------
  const wm = document.querySelector('.hero__watermark');
  if (wm) {
    let rafPending = false;
    window.addEventListener('scroll', () => {
      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(() => {
          wm.style.transform = `translateY(calc(-52% + ${window.scrollY * 0.22}px))`;
          rafPending = false;
        });
      }
    }, { passive: true });
  }

  // ---- scroll-reveal for catalog cards ---------------------------
  const revealCards = document.querySelectorAll('.card');
  if (revealCards.length && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

    revealCards.forEach((card, i) => {
      card.style.setProperty('--reveal-delay', `${i * 90}ms`);
      obs.observe(card);
    });
  }

})();
