/**
 * ╔═══════════════════════════════════════════════════════════════════════════╗
 * ║                         LUNAR AURORA - TABS                                 ║
 * ║                                                                           ║
 * ║  Accessible tabs component.                                              ║
 * ╚═══════════════════════════════════════════════════════════════════════════╝
 */

export default class Tabs {
    constructor(element) {
        this.element = element;
        this.tabList = element.querySelector('[role="tablist"]');
        this.tabs = element.querySelectorAll('[role="tab"]');
        this.panels = element.querySelectorAll('[role="tabpanel"]');

        this.init();
    }

    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', (e) => this.activateTab(e.currentTarget));
            tab.addEventListener('keydown', (e) => this.handleKeydown(e));
        });
    }

    activateTab(tab) {
        const targetId = tab.getAttribute('aria-controls');
        
        // Deactivate all tabs
        this.tabs.forEach(t => {
            t.setAttribute('aria-selected', 'false');
            t.setAttribute('tabindex', '-1');
        });

        // Hide all panels
        this.panels.forEach(p => {
            p.hidden = true;
        });

        // Activate selected tab
        tab.setAttribute('aria-selected', 'true');
        tab.setAttribute('tabindex', '0');

        // Show target panel
        const panel = document.getElementById(targetId);
        if (panel) {
            panel.hidden = false;
        }
    }

    handleKeydown(e) {
        const dir = e.key === 'ArrowLeft' ? -1 : e.key === 'ArrowRight' ? 1 : 0;
        if (!dir) return;

        e.preventDefault();
        const currentIdx = Array.from(this.tabs).indexOf(e.currentTarget);
        const nextIdx = (currentIdx + dir + this.tabs.length) % this.tabs.length;
        
        const nextTab = this.tabs[nextIdx];
        nextTab.focus();
        this.activateTab(nextTab);
    }

    static initAll() {
        document.querySelectorAll('.la-tabs').forEach(el => new Tabs(el));
    }
}
