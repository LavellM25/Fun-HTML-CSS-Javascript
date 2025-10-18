/* =========================================================
   Assignment 3 - script.js
   Powers Contact form validation, inline errors, announcements,
   and success flow. Safe to include on all pages.
   ========================================================= */

/* ---------- Small DOM helpers ---------- */
const qs  = (sel, el = document) => el.querySelector(sel);
const qsa = (sel, el = document) => Array.from(el.querySelectorAll(sel));
const show = (el) => { if (el) el.hidden = false; };
const hide = (el) => { if (el) el.hidden = true; };
const setText = (el, text) => { if (el) el.textContent = text; };

function addDescribedBy(input, id) {
    if (!input || !id) return;
    const existing = (input.getAttribute('aria-describedby') || '').split(' ').filter(Boolean);
    if (!existing.includes(id)) {
        input.setAttribute('aria-describedby', [...existing, id].join(' ').trim());
    }
}

function removeDescribedBy(input, id) {
    if (!input || !id) return;
    const existing = (input.getAttribute('aria-describedby') || '').split(' ').filter(Boolean);
    const next = existing.filter(token => token !== id);
    if (next.length) {
        input.setAttribute('aria-describedby', next.join(' '));
    } else {
        input.removeAttribute('aria-describedby');
    }
}

function announce(liveEl, msg) {
    if (!liveEl) return;
    // Clear then set to ensure announcement
    liveEl.textContent = '';
    // Small delay helps some screen readers re-announce
    setTimeout(() => { liveEl.textContent = msg; }, 10);
}

/* ---------- Validation rules ---------- */
const validators = {
    name(value) {
        const v = value.trim();
        if (!v) return 'Please enter your full name.';
        if (v.length > 100) return 'Name must be 100 characters or fewer.';
        return '';
    },
    email(value) {
        const v = value.trim();
        if (!v) return 'Please enter your email address.';
        // Simple pattern: some@domain.tld
        const basicEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!basicEmail.test(v)) return 'Please enter a valid email like name@example.com.';
        return '';
    },
    message(value) {
        const v = value.trim();
        if (!v) return 'Please enter a message.';
        if (v.length < 10) return 'Message must be at least 10 characters.';
        return '';
    },
    // sport is optional, but this is left here if you add rules later
    sport(_value) {
        return '';
    }
};

/* ---------- Field bindings ---------- */
function bindFieldValidation(form, fieldId, errorId, hintId) {
    const input = qs(`#${fieldId}`, form);
    const errorEl = qs(`#${errorId}`, form);
    const hintEl = hintId ? qs(`#${hintId}`, form) : null;

    if (!input || !errorEl) return;

    // Attach hint relation if present
    if (hintEl) {
        addDescribedBy(input, hintEl.id);
    }

    function setError(msg) {
        if (!msg) {
            hide(errorEl);
            setText(errorEl, '');
            input.classList.remove('error');
            removeDescribedBy(input, errorEl.id);
            return;
        }
        setText(errorEl, msg);
        show(errorEl);
        input.classList.add('error');
        addDescribedBy(input, errorEl.id);
    }

    function runValidation() {
        // Choose proper validator based on fieldId
        const key = fieldId; // ids: name, email, message, sport
        const fn = validators[key];
        const msg = fn ? fn(input.value) : '';
        setError(msg);
        return msg;
    }

    // Validate on blur and input for better UX
    input.addEventListener('blur', runValidation);
    input.addEventListener('input', () => {
        // Live clear when user fixes issue
        if (errorEl.hidden === false) runValidation();
    });


    function setError(msg) {
        if (!msg) {
            hide(errorEl);
            setText(errorEl, '');
            input.classList.remove('error');
            +     input.removeAttribute('aria-invalid');
            removeDescribedBy(input, errorEl.id);
            return;
        }
        setText(errorEl, msg);
        show(errorEl);
        input.classList.add('error');
        +   input.setAttribute('aria-invalid', 'true');
        addDescribedBy(input, errorEl.id);
    }

    return { input, runValidation, setError };
}

/* ---------- Form init ---------- */
function initContactForm() {
    const form = qs('#contact-form');
    if (!form) return; // Safe exit on other pages

    const live = qs('#form-live', form);
    const successBox = qs('#contact-success') || qs('#contact-success', document);

    // Bind fields
    const nameField    = bindFieldValidation(form, 'name',    'name-error',    'name-hint');
    const emailField   = bindFieldValidation(form, 'email',   'email-error',   'email-hint');
    const messageField = bindFieldValidation(form, 'message', 'message-error', 'message-hint');
    const sportField   = bindFieldValidation(form, 'sport',   'sport-error'); // currently optional

    const fields = [nameField, emailField, messageField, sportField].filter(Boolean);

    function validateAll() {
        const messages = fields.map(f => f.runValidation ? f.runValidation() : '');
        const firstErrorIndex = messages.findIndex(m => m);
        return { messages, firstErrorIndex };
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate
        const { messages, firstErrorIndex } = validateAll();

        if (firstErrorIndex !== -1) {
            const firstInvalid = fields[firstErrorIndex].input;
            announce(live, 'Please correct the errors in the form.');
            firstInvalid.focus();
            return;
        }

        // Simulate success (no backend)
        announce(live, 'Your message has been sent.');
        // Option 1: hide form, show success
        if (successBox) {
            hide(form);
            show(successBox);
            successBox.focus();
        } else {
            // Fallback: reset the form and announce
            form.reset();
        }
    });
}

// Add FAQ behavior
function initFAQ() {
    const buttons = qsa('.faq-q');
    if (!buttons.length) return;

    buttons.forEach(btn => {
        const panelId = btn.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);
        if (!panel) return;

        const toggle = () => {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!expanded));
            panel.hidden = expanded; // hide if was open
        };

        btn.addEventListener('click', toggle);
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle();
            }
        });
    });
}

function initGallery() {
    const thumbsWrap = qs('#gallery-thumbs');
    if (!thumbsWrap) return;

    const thumbs = qsa('.thumb', thumbsWrap);
    if (!thumbs.length) return; // nothing to do yet

    const preview = qs('#gallery-preview');
    const live = qs('#gallery-live');
    const prevBtn = qs('#gallery-prev');
    const nextBtn = qs('#gallery-next');

    let index = 0;

    function render(i) {
        const btn = thumbs[i];
        if (!btn) return;
        const full = btn.dataset.full;
        const alt = btn.dataset.alt || '';
        const caption = btn.dataset.caption || '';

        // Replace preview content
        preview.innerHTML = '';
        const img = document.createElement('img');
        img.src = full;
        img.alt = alt;
        img.loading = 'eager';
        img.style.width = '100%';
        img.style.height = 'auto';

        const figcap = document.createElement('figcaption');
        figcap.className = 'muted';
        figcap.textContent = caption;

        preview.appendChild(img);
        preview.appendChild(figcap);
        announce(live, caption);
    }

    function select(i) {
        index = (i + thumbs.length) % thumbs.length; // wrap
        render(index);
        thumbs[index].focus();
    }

    thumbs.forEach((btn, i) => {
        btn.addEventListener('click', () => select(i));
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                select(i);
            }
            if (e.key === 'ArrowLeft') select(i - 1);
            if (e.key === 'ArrowRight') select(i + 1);
        });
    });

    prevBtn?.addEventListener('click', () => select(index - 1));
    nextBtn?.addEventListener('click', () => select(index + 1));

    // Also allow arrow keys when a control has focus
    [prevBtn, nextBtn].forEach(btn => {
        btn?.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') select(index - 1);
            if (e.key === 'ArrowRight') select(index + 1);
        });
    });

    // Initial render
    render(index);
}

/* ---------- Boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
    initFAQ();           // <-- make sure this line exists
    // initGallery();     // fine to add later
});
