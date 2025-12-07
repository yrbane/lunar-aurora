/**
 * ╔═══════════════════════════════════════════════════════════════════════════╗
 * ║                         LUNAR AURORA - ACCORDION                            ║
 * ║                                                                           ║
 * ║  Accessible accordion/collapse component.                                ║
 * ╚═══════════════════════════════════════════════════════════════════════════╝
 */

export default class Accordion {
    constructor(element) {
        this.element = element;
        this.triggers = element.querySelectorAll('.la-accordion-trigger');
        this.init();
    }

    init() {
        this.triggers.forEach(trigger => {
            trigger.addEventListener('click', () => this.toggle(trigger));
        });
    }

    toggle(trigger) {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        const contentId = trigger.getAttribute('aria-controls');
        const content = document.getElementById(contentId);

        if (!content) return;

        // Close others if strictly one open (optional logic, sticking to simple toggle for now)
        // this.triggers.forEach(t => {
        //     if (t !== trigger) {
        //         t.setAttribute('aria-expanded', 'false');
        //         const c = document.getElementById(t.getAttribute('aria-controls'));
        //         if(c) c.hidden = true;
        //     }
        // });

        trigger.setAttribute('aria-expanded', !isExpanded);
        content.hidden = isExpanded;
    }

    static initAll() {
        document.querySelectorAll('.la-accordion').forEach(el => new Accordion(el));
    }
}
