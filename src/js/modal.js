/**
 * ╔═══════════════════════════════════════════════════════════════════════════╗
 * ║                         LUNAR AURORA - MODAL                                ║
 * ║                                                                           ║
 * ║  Accessible modal dialog using native <dialog> element.                  ║
 * ╚═══════════════════════════════════════════════════════════════════════════╝
 */

export default class Modal {
    constructor(element) {
        this.element = element; // The <dialog> element
        this.closeButtons = element.querySelectorAll('[data-close-modal]');
        this.init();
    }

    init() {
        // Close on backdrop click
        this.element.addEventListener('click', (e) => {
            if (e.target === this.element) {
                this.close();
            }
        });

        // Close buttons
        this.closeButtons.forEach(btn => {
            btn.addEventListener('click', () => this.close());
        });
    }

    open() {
        this.element.showModal();
        document.body.classList.add('la-modal-open');
        this.element.classList.add('is-open');
    }

    close() {
        this.element.classList.remove('is-open');
        // Wait for animation if any
        setTimeout(() => {
            this.element.close();
            document.body.classList.remove('la-modal-open');
        }, 200);
    }

    static initAll() {
        // Initialize all dialogs
        document.querySelectorAll('dialog.la-modal').forEach(el => new Modal(el));

        // Initialize triggers
        document.querySelectorAll('[data-open-modal]').forEach(trigger => {
            trigger.addEventListener('click', () => {
                const modalId = trigger.getAttribute('data-open-modal');
                const modalEl = document.getElementById(modalId);
                if (modalEl && !modalEl._modalInstance) {
                    modalEl._modalInstance = new Modal(modalEl);
                }
                if (modalEl && modalEl._modalInstance) {
                    modalEl._modalInstance.open();
                }
            });
        });
    }
}
